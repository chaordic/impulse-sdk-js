// @ts-ignore: package.json will be imported from dist folders
import version from "../../../../package.json"; // eslint-disable-line

export class DefaultApplicationError extends Error {
  public clientVersion = `LinxImpulseError-TypeScriptSDK/${version}`;

  constructor(public error: any) {
    super(error.data.message);
    this.name = this.clientVersion;
  }
}