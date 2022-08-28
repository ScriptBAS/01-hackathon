import { Module } from "../core/module";
import { addButton } from "../components/scripts/addButton42";
import { addPic } from "../components/scripts/addPic42";

export class Module42 extends Module {
  trigger() {
    document.body.classList.add("activated");

    const isPicExist = document.querySelector('.pic');
    if (!isPicExist) {
      addButton("Ответ на главный вопрос жизни");
    }

    const buttonHTML = document.querySelector(".button");
    buttonHTML.addEventListener("click", () => {
      addPic("./src/assets/img/42.png");
      buttonHTML.remove();
    }, { once: true });
  }
}
