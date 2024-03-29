import { ZodType } from "zod";
export class ParserSchema {
    name: ZodType;

    constructor(schemaValidation: ZodType) {
        this.name = schemaValidation;
    }
    
    validate = this.restrict<
        Record<string, unknown>
    >();

    restrict<T>() {
        return (t: T) => this.name.parse(t);
    }
}
