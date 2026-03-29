import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sghxiwpaxcppiarcgvex.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnaHhpd3BheGNwcGlhcmNndmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1Mjc2NzEsImV4cCI6MjA5MDEwMzY3MX0.8MaUZWn67bmkJbIyFGrUepcnMW8pQEe43-7GyJGSXKo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
