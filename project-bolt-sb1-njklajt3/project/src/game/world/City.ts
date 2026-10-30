import * as THREE from "three";

export interface BuildingBox {
  x: number;
  z: number;
  w: number;
  d: number;
  h: number;
}

export interface WorldData {
  group: THREE.Group;
  colliders: BuildingBox[];
  roadSegments: { x1: number; z1: number; x2: number; z2: number; width: number }[];
  blockSize: number;
  gridCount: number;
  garage: THREE.Vector3;
  sun: THREE.DirectionalLight;
  hemi: THREE.HemisphereLight;
  ambient: THREE.AmbientLight;
  timeOfDay: "sunset" | "night";
  setQuality: (q: "low" | "medium" | "high") => void;
}

const BLOCK = 48;
const ROAD_W = 14;
const GRID = 5; // 5x5 blocks => city spans ~240x240

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export function buildCity(quality: "low" | "medium" | "high"): WorldData {
  const group = new THREE.Group();
  const colliders: BuildingBox[] = [];
  const roadSegments: WorldData["roadSegments"] = [];
  const rand = rng(7321);

  const palette = [
    0x2a3a5c, 0x33415e, 0x1f2b45, 0x3a4a6e, 0x283047, 0x1a2030, 0x40384f,
    0x2d2538,
  ];

  // Ground / asphalt base
  const groundGeo = new THREE.PlaneGeometry(GRID * BLOCK, GRID * BLOCK);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x141822,
    roughness: 0.95,
    metalness: 0.0,
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  ground.receiveShadow = true;
  group.add(ground);

  const offset = ((GRID - 1) / 2) * BLOCK;

  // Build a grid of blocks. Each block has buildings inset from roads.
  const buildingGeoms: Record<string, THREE.BufferGeometry> = {};
  const litMat = new THREE.MeshStandardMaterial({
    color: 0x3a5a8c,
    emissive: 0xffaa44,
    emissiveIntensity: 0.35,
    roughness: 0.4,
    metalness: 0.2,
  });

  for (let gx = 0; gx < GRID; gx++) {
    for (let gz = 0; gz < GRID; gz++) {
      const cx = gx * BLOCK - offset;
      const cz = gz * BLOCK - offset;
      // Inner block area (exclude road margins)
      const inner = BLOCK - ROAD_W;

      // Sidewalk slab
      const swGeo = new THREE.BoxGeometry(inner, 0.3, inner);
      const swMat = new THREE.MeshStandardMaterial({
        color: 0x444a55,
        roughness: 0.9,
      });
      const sw = new THREE.Mesh(swGeo, swMat);
      sw.position.set(cx, 0.15, cz);
      sw.receiveShadow = true;
      group.add(sw);

      // Place 1-4 buildings within the block
      const subdivs = rand() > 0.5 ? 2 : 1;
      const sub = inner / subdivs;
      for (let sx = 0; sx < subdivs; sx++) {
        for (let sz = 0; sz < subdivs; sz++) {
          if (rand() < 0.12) continue; // occasional plaza / empty lot
          const bx = cx - inner / 2 + sub / 2 + sx * sub;
          const bz = cz - inner / 2 + sub / 2 + sz * sub;
          const bw = sub * (0.6 + rand() * 0.3);
          const bd = sub * (0.6 + rand() * 0.3);
          const bh = 8 + rand() * rand() * 60;
          const colorIdx = Math.floor(rand() * palette.length);
          const colKey = `${colorIdx}`;
          if (!buildingGeoms[colKey]) {
            // We'll just use one shared BoxGeometry scaled per-instance isn't trivial,
            // so create unique geometry per building (fine for ~50 buildings).
          }
          const geo = new THREE.BoxGeometry(bw, bh, bd);
          const mat = new THREE.MeshStandardMaterial({
            color: palette[colorIdx],
            roughness: 0.7,
            metalness: 0.15,
          });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.set(bx, bh / 2 + 0.3, bz);
          mesh.castShadow = quality !== "low";
          mesh.receiveShadow = quality !== "low";
          group.add(mesh);

          colliders.push({ x: bx, z: bz, w: bw, d: bd, h: bh });

          // Window emissive strips on taller buildings
          if (bh > 18 && quality !== "low") {
            const litCount = Math.floor(bh / 6);
            for (let w = 0; w < litCount; w++) {
              if (rand() < 0.5) continue;
              const stripGeo = new THREE.BoxGeometry(bw * 1.01, 1.2, bd * 1.01);
              const m = new THREE.Mesh(stripGeo, litMat.clone() as THREE.Material);
              const lm = m.material as THREE.MeshStandardMaterial;
              lm.emissiveIntensity = 0.25 + rand() * 0.3;
              lm.emissive = new THREE.Color(rand() > 0.7 ? 0x88ccff : 0xffaa44);
              m.position.set(bx, 2 + w * 6, bz);
              group.add(m);
            }
          }
        }
      }
    }
  }

  // Roads: horizontal + vertical strips between blocks.
  const roadMat = new THREE.MeshStandardMaterial({
    color: 0x0c0f16,
    roughness: 0.9,
    metalness: 0.0,
  });
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xffcc66 });

  const citySpan = GRID * BLOCK;
  // Horizontal roads (run along x at each gz boundary)
  for (let i = 0; i <= GRID; i++) {
    const z = i * BLOCK - offset - BLOCK / 2;
    const geo = new THREE.PlaneGeometry(citySpan + BLOCK, ROAD_W);
    const m = new THREE.Mesh(geo, roadMat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(0, 0.02, z);
    m.receiveShadow = true;
    group.add(m);
    roadSegments.push({ x1: -citySpan / 2, z1: z, x2: citySpan / 2, z2: z, width: ROAD_W });
    // center line
    const lg = new THREE.PlaneGeometry(citySpan, 0.3);
    const lm = new THREE.Mesh(lg, lineMat);
    lm.rotation.x = -Math.PI / 2;
    lm.position.set(0, 0.05, z);
    group.add(lm);
  }
  // Vertical roads
  for (let i = 0; i <= GRID; i++) {
    const x = i * BLOCK - offset - BLOCK / 2;
    const geo = new THREE.PlaneGeometry(ROAD_W, citySpan + BLOCK);
    const m = new THREE.Mesh(geo, roadMat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, 0.02, 0);
    m.receiveShadow = true;
    group.add(m);
    roadSegments.push({ x1: x, z1: -citySpan / 2, x2: x, z2: citySpan / 2, width: ROAD_W });
    const lg = new THREE.PlaneGeometry(0.3, citySpan);
    const lm = new THREE.Mesh(lg, lineMat);
    lm.rotation.x = -Math.PI / 2;
    lm.position.set(x, 0.05, 0);
    group.add(lm);
  }

  // Streetlights at intersections
  if (quality !== "low") {
    const lampMat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.6,
    });
    const bulbMat = new THREE.MeshStandardMaterial({
      color: 0xffd680,
      emissive: 0xffc24a,
      emissiveIntensity: 1.4,
    });
    for (let i = 0; i <= GRID; i++) {
      for (let j = 0; j <= GRID; j++) {
        const x = i * BLOCK - offset - BLOCK / 2;
        const z = j * BLOCK - offset - BLOCK / 2;
        if (x < -citySpan / 2 + 1 || x > citySpan / 2 - 1) continue;
        if (z < -citySpan / 2 + 1 || z > citySpan / 2 - 1) continue;
        for (const [dx, dz] of [[ROAD_W / 2 + 1, ROAD_W / 2 + 1], [-ROAD_W / 2 - 1, -ROAD_W / 2 - 1]]) {
          const pole = new THREE.Mesh(
            new THREE.CylinderGeometry(0.12, 0.18, 6, 6),
            lampMat
          );
          pole.position.set(x + dx, 3, z + dz);
          pole.castShadow = false;
          group.add(pole);
          const arm = new THREE.Mesh(
            new THREE.BoxGeometry(1.5, 0.15, 0.15),
            lampMat
          );
          arm.position.set(x + dx - Math.sign(dx) * 0.6, 6, z + dz);
          group.add(arm);
          const bulb = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 8, 8),
            bulbMat
          );
          bulb.position.set(x + dx - Math.sign(dx) * 1.2, 5.9, z + dz);
          group.add(bulb);
        }
      }
    }
  }

  // Garage / start area: a flat pad with a marker at center edge of city.
  const garageX = -offset + BLOCK / 2;
  const garageZ = -offset + BLOCK / 2;
  const garagePad = new THREE.Mesh(
    new THREE.BoxGeometry(18, 0.4, 24),
    new THREE.MeshStandardMaterial({ color: 0x2b2f3a, roughness: 0.8 })
  );
  garagePad.position.set(garageX, 0.2, garageZ);
  garagePad.receiveShadow = true;
  group.add(garagePad);
  // Garage frame (open arch)
  const frameMat = new THREE.MeshStandardMaterial({
    color: 0x556070,
    roughness: 0.5,
    metalness: 0.3,
  });
  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 5, 0.6),
      frameMat
    );
    post.position.set(garageX + side * 7, 2.5, garageZ - 10);
    post.castShadow = true;
    group.add(post);
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(15, 0.6, 0.6), frameMat);
  beam.position.set(garageX, 5, garageZ - 10);
  beam.castShadow = true;
  group.add(beam);

  // Lighting
  const ambient = new THREE.AmbientLight(0x4a5a7a, 0.5);
  group.add(ambient);

  const hemi = new THREE.HemisphereLight(0xffb37a, 0x202840, 0.6);
  group.add(hemi);

  const sun = new THREE.DirectionalLight(0xffaa55, 1.6);
  sun.position.set(-60, 40, -30);
  sun.target.position.set(0, 0, 0);
  sun.castShadow = quality !== "low";
  if (quality !== "low") {
    sun.shadow.mapSize.set(quality === "high" ? 2048 : 1024, quality === "high" ? 2048 : 1024);
    const cam = sun.shadow.camera as THREE.OrthographicCamera;
    cam.left = -citySpan / 2;
    cam.right = citySpan / 2;
    cam.top = citySpan / 2;
    cam.bottom = -citySpan / 2;
    cam.near = 1;
    cam.far = 200;
    cam.updateProjectionMatrix();
  }
  group.add(sun);
  group.add(sun.target);

  // Fog handled at scene level (Sky sets it).

  let timeOfDay: "sunset" | "night" = "sunset";

  const setQuality = (q: "low" | "medium" | "high") => {
    sun.castShadow = q !== "low";
    if (q !== "low") {
      sun.shadow.mapSize.set(q === "high" ? 2048 : 1024, q === "high" ? 2048 : 1024);
    }
  };

  return {
    group,
    colliders,
    roadSegments,
    blockSize: BLOCK,
    gridCount: GRID,
    garage: new THREE.Vector3(garageX, 0.4, garageZ),
    sun,
    hemi,
    ambient,
    timeOfDay,
    setQuality,
  };
}

// Sky dome with gradient + sun. Sets fog on the scene.
export function buildSky(scene: THREE.Scene, time: "sunset" | "night") {
  const colors =
    time === "sunset"
      ? { top: 0x1a2050, mid: 0x5a3a6e, bot: 0xff8a4a, fog: 0x3a3050 }
      : { top: 0x05060f, mid: 0x0a0a1e, bot: 0x1a1230, fog: 0x0a0a18 };

  const geo = new THREE.SphereGeometry(400, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      topColor: { value: new THREE.Color(colors.top) },
      midColor: { value: new THREE.Color(colors.mid) },
      botColor: { value: new THREE.Color(colors.bot) },
    },
    vertexShader: `
      varying vec3 vPos;
      void main() {
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 botColor;
      varying vec3 vPos;
      void main() {
        float h = normalize(vPos).y;
        vec3 col = mix(botColor, midColor, smoothstep(-0.1, 0.3, h));
        col = mix(col, topColor, smoothstep(0.3, 0.9, h));
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(geo, mat);
  scene.add(sky);

  // Sun disc for sunset
  if (time === "sunset") {
    const sunDisc = new THREE.Mesh(
      new THREE.CircleGeometry(18, 32),
      new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0.95 })
    );
    sunDisc.position.set(-120, 18, -200);
    sunDisc.lookAt(0, 0, 0);
    scene.add(sunDisc);
  } else {
    // Moon for night
    const moon = new THREE.Mesh(
      new THREE.CircleGeometry(12, 32),
      new THREE.MeshBasicMaterial({ color: 0xd0e0ff, transparent: true, opacity: 0.9 })
    );
    moon.position.set(100, 80, -200);
    moon.lookAt(0, 0, 0);
    scene.add(moon);
    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starPos: number[] = [];
    for (let i = 0; i < 300; i++) {
      const r = 350;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 0.7 + 0.2);
      starPos.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    }
    starGeo.setAttribute("position", new THREE.Float32BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.2, sizeAttenuation: false });
    scene.add(new THREE.Points(starGeo, starMat));
  }

  scene.fog = new THREE.Fog(colors.fog, 80, 260);
}
