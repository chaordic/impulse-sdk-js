import { z } from "zod";

export const eventHomeSchema = z.object({
    user: z.object({
        id: z.string().transform(id => Number(id)), //required
        email: z.string().email().optional(),
        name: z.string().optional(),
        allowMailMarketing: z.boolean().optional()
    }).optional(),
    salesChannel: z.number().optional(),
    info: z.object({
        pageViewId: z.string(),
        shopbackCookie: z.string(),
        percycleCookie: z.string(),
        chaordicCookie: z.string(),
        impulseSuiteCookie: z.string()
    }).optional(),
    source: z.string().regex(/^(desktop|mobile|app)$/), //required
    identity: z.object({
        anonymousUserId: z.string().optional(),
        browserId: z.string(), //required
        session: z.string().optional()
    }),
    apiKey: z.string(), //required
    url: z.string().optional()
});

export type eventHomeInput = z.input<typeof eventHomeSchema>;
export type eventHomeOutput = z.output<typeof eventHomeSchema>;
