import type { IncomingMessage, ServerResponse } from "http";

let url: string = `http://host.docker.internal:8000/api/edit_spot/1`

export default async (req: IncomingMessage, res: ServerResponse) => {
  const result: string = await $fetch(url)
  return result
}