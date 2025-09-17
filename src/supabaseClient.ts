import { createClient } from "@supabase/supabase-js";

//nomnom
// export const supabaseUrl = "https://awzautxzkkrdgxbowdnk.supabase.co";
// export const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3emF1dHh6a2tyZGd4Ym93ZG5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1ODYxNTksImV4cCI6MjA3MzE2MjE1OX0.K_OLwhqyYb52Rt1qcC6sI6au7bkGR2Ks_7xV6LuZ6BE"

//storedb
export const supabaseUrl = "https://zpcxosoceehgxajftdou.supabase.co";
export const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY3hvc29jZWVoZ3hhamZ0ZG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5ODg2NDAsImV4cCI6MjA3MjU2NDY0MH0.vi1Hu3ha8pgTDOAxaXszys_uuaXyRTOSr1wCkBUfrgw"


export const supabase = createClient(supabaseUrl, supabaseAnonKey);