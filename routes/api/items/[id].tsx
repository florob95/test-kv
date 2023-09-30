import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts'
import KV from '../../../db/kv.ts'

export const handler: Handlers<Record<string, unknown>> = {
    async GET(_req, ctx: HandlerContext) {
        const kv = await KV.getInstance()
        const res = await kv.get(['items', ctx.params.id])

        if (!res.value) return new Response('item not found', { status: 404 })

        return new Response(JSON.stringify(res.value))
    },
    async PUT(req, ctx: HandlerContext) {
        const kv = await KV.getInstance()
        const res = await kv.get(['items', ctx.params.id])

        if (!res.value) return new Response('item not found', { status: 404 })

        const object = await req.json()
        await kv.set(['items', ctx.params.id], object)

        return new Response(JSON.stringify({ ...object, id: ctx.params.id }))
    },
    async DELETE(_req, ctx: HandlerContext) {
        const kv = await KV.getInstance()
        await kv.delete(['items', ctx.params.id])

        return new Response()
    },
}
