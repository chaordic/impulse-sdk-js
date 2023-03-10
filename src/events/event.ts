import { v4 as uuidv4 } from 'uuid';
import { CacheService } from "@/events/common/services/Cache";
import { FlagsService } from "@/events/common/services/Flags";
import { API_KEY } from "@/events/common/helpers/strings/constants";
import { CacheContainer } from "node-ts-cache";
import { MemoryStorage } from "node-ts-cache-storage-memory";

declare global {
    var impulseCache: any
}

const impulse: any = {}
globalThis.impulseCache = new CacheContainer(new MemoryStorage())

async function initialize(): Promise<any | Error> {

    return await new CacheService().getById(API_KEY).then(async (cached) => {
        if (!cached) {
            return await new FlagsService().getFlags().then(async (flags: any) => {
                if (!flags.enabled) {
                    throw new Error(`Client ${API_KEY}: not enabled Flags`);            
                }

                impulse.flags = flags
                const content = { deviceId: uuidv4(), flags: flags }

                return await new CacheService().setById(API_KEY, content, 60).then((data) => {
                    impulse.deviceId = data.deviceId
                })
            })
        }
        
        impulse.flags = cached.flags
        impulse.deviceId = cached.deviceId
        return true
    })
}

export default function(): any {
    initialize().then(() => {
        impulse.initialized = true
    })    
};
