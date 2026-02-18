import {createClient} from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)


/*
let user = supabase.auth.user()
supabase.auth.onAuthStateChange((event, session) => {
  user = session?.user || null
})

export function getCurrentUser() {
  return user
}


let { data: profile, error } = await supabase
  .from('profiles')
  .select('*')
  .eq('id', user?.id)
  .single()

export { profile, error as profileError }
*/
