// supabaseConfig.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://iudlkwzaefvluuaasyux.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZGxrd3phZWZ2bHV1YWFzeXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4NTc4NzEsImV4cCI6MjAxODQzMzg3MX0.AcVSBQA4bNb4HS98DUCwehHlXZsg2CUWe7UioyuMnbc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
