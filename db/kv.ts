export default class KV {
    private static instance: Deno.openKv

    private constructor() {}

    static async getInstance() {
        if (!this.instance) this.instance = await Deno.openKv()

        return this.instance
    }
}
