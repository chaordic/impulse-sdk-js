export class LinxImpulseError extends Error {
  static version = process.env.npm_package_version
  static userAgent = `LinxImpulseSDK/${this.version}`;
  
  constructor(message: string) {
    super(message);
    this.name = 'LinxImpulseError';
  }
}