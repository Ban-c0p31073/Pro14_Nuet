let url: string = `http://host.docker.internal:8000/api/login`

export interface login {
  token: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

export default defineEventHandler(async (e) => {
  const body = await useBody(e)
  const result: login[] = await $fetch(url,{
   method: 'POST',
   body: body
  })
  console.log(result)
  return result
})