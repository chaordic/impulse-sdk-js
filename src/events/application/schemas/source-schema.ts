import { z } from "zod";

export const sourceSchema = z
    .enum(["desktop", "mobile", "app"], {
        required_error: "source is required",
        invalid_type_error: "source must be a desktop|mobile|app"
    })
    .default("desktop")

export type SourceInput = z.input<typeof sourceSchema>;
