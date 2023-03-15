export class DefaultValidationError extends Error {
    constructor(err: any) {      
      super(err);
      this.name = "ZodError"
  }
}