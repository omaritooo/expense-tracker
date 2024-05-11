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
    const userCreds = {
      id: data?.user?.id,
      username: body.username,
      full_name: `${body.firstName} ${body.lastName}`,
      updated_at: Date.now()
    };

    const { data: userData, error: userError } = await client
      .from("profiles")
      .upsert(userCreds, { onConflict: `handle` })
      .single();

    if (userError) throw userError
    return { ...data, userData: userData }
  }
  catch (err) {
    return err
  }


})
