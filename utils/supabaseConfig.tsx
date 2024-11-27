import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://idnujgssjorqmplgmprk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkbnVqZ3Nzam9ycW1wbGdtcHJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1OTE4MjgsImV4cCI6MjA0NzE2NzgyOH0.zKElomOl306MCka5uTS-JUF_1Lz3MOOu2Mi6GrdCcO4"
);
