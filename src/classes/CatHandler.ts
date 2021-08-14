import { AbstractHandler } from "../abstract/AbstractHandler";

export class CatHandler extends AbstractHandler {
  handle(request: string) {
    if (request === "Mousse") {
      return `Le Chat mange une ${request}`;
    }
    return super.handle(request);
  }
}
