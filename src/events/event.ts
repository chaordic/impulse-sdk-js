import { v4 as uuidv4 } from 'uuid';
import { CacheService } from "@/events/common/services/Cache";
import { FlagsService } from "@/events/common/services/Flags";
import { API_KEY } from "@/events/common/helpers/strings/constants";
import { CacheContainer } from "node-ts-cache";
import { MemoryStorage } from "node-ts-cache-storage-memory";

declare global {
    var impulseCache: CacheContainer
    var impulse: {[key: string]: any}
}

globalThis.impulseCache = new CacheContainer(new MemoryStorage())
globalThis.impulse = {}

async function initialize(): Promise<any | Error> {

    //set deviceId

    return await new CacheService().getById(API_KEY).then(async (cached) => {
        if (!cached) {
            return await new FlagsService().getFlags().then(async (flags: any) => {
                if (!flags.enabled) {
                    throw new Error(`Client ${API_KEY}: not enabled Flags`);            
                }

                const content = { clientSdkId: uuidv4(), flags: flags }

                return await new CacheService().setById(API_KEY, content, 60).then((data) => {
                    Object.assign(globalThis.impulse, {
                        clientSdkId: data.clientSdkId
                    })
                })
            })
        }

        Object.assign(globalThis.impulse, {
            flags: cached.flags
        })
        return true
    })
}

export default function(): any {
    initialize().then(() => {
        impulse.initialized = true
    })    
};
