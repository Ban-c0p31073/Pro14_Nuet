import type { IncomingMessage, ServerResponse } from "http";

let url: string = `https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo`

export default async (req: IncomingMessage, res: ServerResponse) => {
  const result: [] = await $fetch(url)
  return result
}