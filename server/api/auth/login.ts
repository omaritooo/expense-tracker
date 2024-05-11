import { serverSupabaseClient } from '#supabase/server'
import { serverSupabaseUser } from '#supabase/server'



export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  // const auth = await serverSupabaseUser(event)
  const body = await readBody(event)
  try {

    const { data, error } = await client.auth.signUp({
      email: body.email,
      password: body.password,
    });
    if (error) throw error

    return { ...data }
  }
  catch (err) {
    return err
  }
})
