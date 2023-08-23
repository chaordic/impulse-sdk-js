import { IMPULSE_SDK_VERSION } from "@/events/common/helpers/strings/version"
export class LinxImpulseError extends Error {
  static version = IMPULSE_SDK_VERSION;
  static userAgent = `LinxImpulseSDK/${this.version}`;
  
  constructor(message: string) {
    super(message);
    this.name = 'LinxImpulseError';
  }
}
