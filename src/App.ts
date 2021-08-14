import { CatHandler } from "./classes/CatHandler";
import { LionHandler } from "./classes/LionHandler";
import { MonkeyHandler } from "./classes/MonkeyHandler";
export class App {
  static main() {
    const cat = new CatHandler();
    const lion = new LionHandler();
    const monkey = new MonkeyHandler();
    cat.setNext(lion).setNext(monkey);
    const eats = ["Buffalo", "Mousse", "Banana"];

    for (const eat of eats) {
      const result = lion.handle(eat);
      if (result) {
        return result;
      } else {
        return `${eat} n'a pas été touché `;
      }
    }
  }
}
