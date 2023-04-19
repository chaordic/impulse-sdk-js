import { LinxImpulseError } from "@/events/application/errors/linx-impulse-error";

export class ValidationError extends LinxImpulseError {
  
  issues: any[]
  
  constructor(message: string, issues: any[] = []) {      
    super(message);
    this.issues = issues;
    this.name = "ValidationError";
  }
}