export default defineEventHandler(async (event) => {
  const userId = useQuery(event)
  const result: string = await $fetch(`http://host.docker.internal:8000/api/edit_spot/${userId.id}`)
  return result
})