import { createClient } from '@supabase/supabase-js'
 
export const supabase = createClient('https://swjtmzodewjsndmzzldd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3anRtem9kZXdqc25kbXp6bGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjI0OTUsImV4cCI6MjA1MzUzODQ5NX0.DmQgxusaem7rvkOvKJokCzuNlF5iQY5bIhcXWRHBo8Q')