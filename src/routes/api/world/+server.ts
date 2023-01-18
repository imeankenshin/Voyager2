import type { RequestHandler } from "@sveltejs/kit"

export const GET = (({ url }) =>{
  const message = `div`;
  return new Response(message)
}) satisfies RequestHandler;