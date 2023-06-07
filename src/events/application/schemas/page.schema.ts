import { z } from "zod";

export const pageSchema = z.string().toLowerCase().optional()
