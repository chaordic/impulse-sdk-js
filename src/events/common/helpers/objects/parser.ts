import { ZodType, ZodTypeDef } from "zod";

type InferTypes<Z> = Z extends ZodType<infer Output, infer Defs, infer Input> ? [Output, Defs, Input] : [never, never, never];
type InferOutput<Z> = InferTypes<Z>[0];
type InferDefs<Z> = InferTypes<Z>[1];
type InferInput<Z> = InferTypes<Z>[2];

export class Parser {
    name: any;

    constructor(schemaValidation: any) {
        this.name = schemaValidation;
    }
    
    validate = this.restrict<
        Record<string, unknown>,
        InferOutput<typeof this.name>,
        InferDefs<typeof this.name>,
        InferInput<typeof this.name>
    >();

    restrict<T, Output, Def extends ZodTypeDef, Input = Output>(_schema?: ZodType<Output, Def, Input>) {
        return (t: T) => this.name.parse(t);
    }
}
