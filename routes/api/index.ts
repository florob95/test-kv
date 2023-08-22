import { HandlerContext, Handlers } from '$fresh/src/server/types.ts'
import KV from '../../db/kv.ts'

export const handler: Handlers<unknown> = {
    async POST(req, _ctx: HandlerContext) {
        const object = await req.json()
        const kv = await KV.getInstance()
        const id = crypto.randomUUID()

        await kv.set([id], object)

        return new Response(JSON.stringify({ ...object, id }), { status: 201 })
    },
}
