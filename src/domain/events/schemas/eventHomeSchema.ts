import { z } from "zod";

export const eventHomeSchema = z.object({
    user: z.object({
        id: z.string().transform(id => Number(id)),
        email: z.string().email(),
        name: z.string(),
        allowMailMarketing: z.boolean()
    }).optional(),
    salesChannel: z.number().optional(),
    info: z.object({
        pageViewId: z.string(),
        shopbackCookie: z.string(),
        percycleCookie: z.string(),
        chaordicCookie: z.string(),
        impulseSuiteCookie: z.string()
    }),
    source: z.string().regex(/^(desktop|mobile|app)$/),
    identity: z.object({
        anonymousUserId: z.string(),
        browserId: z.string(),
        session: z.string()
    }),
    apiKey: z.string(),
    url: z.string()
});

export type eventHomeInput = z.input<typeof eventHomeSchema>;
export type eventHomeOutput = z.output<typeof eventHomeSchema>;
