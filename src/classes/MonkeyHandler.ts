import { AbstractHandler } from "../abstract/AbstractHandler";

export class MonkeyHandler extends AbstractHandler {
  handle(request: string) {
    if (request === "Banana") {
      return `Le singe mange une ${request}`;
    } else {
      return super.handle(request);
    }
  }
}
