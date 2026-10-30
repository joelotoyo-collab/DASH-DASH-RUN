/*
# Game tables: profiles and scores

1. New Tables
- `profiles`
  - `id` (uuid, PK, references auth.users) — one row per user
  - `username` (text, display name on menus and leaderboards)
  - `character_type` (text, which runner character: 'blob' | 'robot' | 'ninja')
  - `body_color` (text, hex color of the character body)
  - `hat` (text, hat accessory: 'none' | 'cap' | 'crown' | 'space')
  - `updated_at` (timestamp)
- `scores`
  - `id` (uuid, PK)
  - `user_id` (uuid, references auth.users, defaults to auth.uid())
  - `score` (integer, points earned in a run)
  - `distance` (integer, meters traveled)
  - `created_at` (timestamp)

2. Security
- Enable RLS on both tables.
- profiles: authenticated users can read any profile and insert/update only their own.
- scores: authenticated users can read all scores (leaderboard) and insert only their own.
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text NOT NULL DEFAULT 'Runner',
  character_type text NOT NULL DEFAULT 'blob',
  body_color text NOT NULL DEFAULT '#22d3ee',
  hat text NOT NULL DEFAULT 'none',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "read_all_profiles" ON profiles;
CREATE POLICY "read_all_profiles" ON profiles FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "update_own_profile" ON profiles;
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE
  TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE TABLE IF NOT EXISTS scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  score integer NOT NULL DEFAULT 0,
  distance integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE scores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "read_all_scores" ON scores;
CREATE POLICY "read_all_scores" ON scores FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "insert_own_score" ON scores;
CREATE POLICY "insert_own_score" ON scores FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_scores_score_desc ON scores (score DESC);
