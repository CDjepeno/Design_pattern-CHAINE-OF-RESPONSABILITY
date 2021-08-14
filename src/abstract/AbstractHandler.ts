import { IHandler } from "../interfaces/IHandler";
export abstract class AbstractHandler implements IHandler {
  nextHandler: IHandler;

  setNext(h: IHandler) {
    this.nextHandler = h;
    return h;
  }

  handle(r: string) {
    if (this.nextHandler) {
      return this.nextHandler.handle(r);
    }
    return null;
  }
}
