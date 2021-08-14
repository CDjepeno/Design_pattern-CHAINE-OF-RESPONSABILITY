import { AbstractHandler } from "../abstract/AbstractHandler";

export class LionHandler extends AbstractHandler {
  handle(request: string) {
    if (request === "Buffalo") {
      return `Le Lion mange un ${request}`;
    }
    return super.handle(request);
  }
}
