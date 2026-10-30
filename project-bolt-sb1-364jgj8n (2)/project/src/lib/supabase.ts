import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(url, anonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export type Profile = {
  id: string;
  username: string;
  character_type: string;
  body_color: string;
  hat: string;
  updated_at: string;
};

export type ScoreRow = {
  id: string;
  user_id: string;
  score: number;
  distance: number;
  created_at: string;
  profiles?: { username: string } | null;
};
