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

  // if (error) throw error;
  // console.log(data?.user?.id);
  // if (userAuth.value) {
  //   const userCreds = {
  //     id: userAuth.value.id,
  //     username: user.username,
  //     full_name: `${user.firstName} ${user.lastName}`,
  //   };
  //   const { data: userData, error: userError } = await client
  //     .from("profiles")
  //     .upsert(userCreds)
  //     .single();
  //   console.log(userData);
  //   if (userError) throw userError;
  // console.log(readBody(event))
  return readBody(event)
})
