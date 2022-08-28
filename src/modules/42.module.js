import { Module } from "../core/module";
import { removeElement } from "../utils/utils";
import { addButton, addPic } from "../components/scripts/42.module";

export class Module42 extends Module {
  trigger() {
    document.body.classList.add("activated");

    const isPicExist = document.querySelector(".pic");
    if (isPicExist) {
      isPicExist.remove();
    }

    const isButtonExist = document.querySelector(".button");
    if (isButtonExist) {
      isButtonExist.remove();
    }

    addButton();
    const buttonHTML = document.querySelector(".button");
    buttonHTML.addEventListener("click", () => {
      addPic("./src/assets/img/42.png");
      buttonHTML.remove();

      const picHTML = document.querySelector(".pic");
      removeElement(picHTML, 2000);
    });
  }
}
