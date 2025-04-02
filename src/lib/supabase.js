// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

// Add your Supabase project URL and public anon key
const supabaseUrl = "https://vjnfcsanaumxlhebtbln.supabase.co"; // This is your Supabase project URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqbmZjc2FuYXVteGxoZWJ0YmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MDQ2MTUsImV4cCI6MjA1NzI4MDYxNX0.GzKfyvkXkz-ppYWgyg1T3h6eQSeM_Xs5_j826LnQ6as"; // This is your public API key (anon key)

export const supabase = createClient(supabaseUrl, supabaseKey);
