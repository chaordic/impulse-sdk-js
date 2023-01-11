import { version } from "../../../../package.json";

export class SdkError extends Error {
  public clientVersion = `LinxImpulseError-TypeScriptSDK/${version}`;

  constructor(public error: any) {
    super(error.data.message);
    this.name = this.clientVersion;
  }
}
