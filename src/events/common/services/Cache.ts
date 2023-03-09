export class CacheService {
    public async getById(id: string): Promise<any> {
        try {
            return await globalThis.impulseCache.getItem(id)
        } catch (error: any) {
            throw new Error(error);            
        }
    }

    public async setById(id: string, content: any, expire: number): Promise<any> {
        const cached = await globalThis.impulseCache.getItem(id)

        if (cached) {
            return cached
        }

        try {
            await globalThis.impulseCache.setItem(id, content, {ttl: expire})
            return content
        } catch (error: any) {
            throw new Error(error);            
        }
    }
}