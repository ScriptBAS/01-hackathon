import { Module } from "../core/module";
import { addButton, addPic } from "../components/scripts/42.module";

export class Module42 extends Module {
  trigger() {
    document.body.classList.add("activated");

    const isPicExist = document.querySelector(".pic");
    if (isPicExist) {
      isPicExist.remove();
    }

    addButton();
    const buttonHTML = document.querySelector(".button");
    buttonHTML.addEventListener("click", () => {
      addPic("./src/assets/img/42.png");
      buttonHTML.remove();
    });
  }
}