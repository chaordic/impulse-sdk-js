import { z } from "zod";

export const eventHomeSchema = z.object({
    user: z.object({
        id: z.string({
            required_error: "id is required",
            invalid_type_error: "id must be a string"
        }).transform(id => Number(id)), //required
        email: z.string().email(
            { message: "Invalid email address" }
        ).optional(),
        name: z.string({
            required_error: "name is required",
            invalid_type_error: "name must be a string"
        }).optional(),
        allowMailMarketing: z.boolean({
            invalid_type_error: "allowMailMarketing must be a boolean",
        }).optional()
    }).optional(),
    salesChannel: z.number({
        invalid_type_error: "salesChannel must be a number"
    }).optional(),
    info: z.object({
        pageViewId: z.string({
            invalid_type_error: "pageViewId must be a string"
        }),
        shopbackCookie: z.string({
            invalid_type_error: "shopbackCookie must be a string"
        }),
        percycleCookie: z.string({
            invalid_type_error: "percycleCookie must be a string"
        }),
        chaordicCookie: z.string({
            invalid_type_error: "chaordicCookie must be a string"
        }),
        impulseSuiteCookie: z.string({
            invalid_type_error: "impulseSuiteCookie must be a string"
        }),
    }).optional(),
    source: z.string({
        required_error: "source is required",
        invalid_type_error: "source must be a desktop|mobile|app"
    }).regex(/^(desktop|mobile|app)$/), //required
    identity: z.object({
        anonymousUserId: z.string({
            invalid_type_error: "anonymousUserId must be a string"
        }).optional(),
        browserId: z.string({
            required_error: "browserId is required",
            invalid_type_error: "browserId must be a string"
        }), //required
        session: z.string({
            invalid_type_error: "session must be a string"
        }).optional()
    }),
    apiKey: z.string({
        required_error: "apiKey is required",
        invalid_type_error: "apiKey must be a string"
    }), //required
    url: z.string({
        invalid_type_error: "url must be a string"
    }).optional()
});

export type eventHomeInput = z.input<typeof eventHomeSchema>;
export type eventHomeOutput = z.output<typeof eventHomeSchema>;
