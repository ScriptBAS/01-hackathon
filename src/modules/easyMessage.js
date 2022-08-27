import { Module } from "../core/module.js";
import { getRandomNumber } from "../utils/utils.js";

export class easyMessage extends Module {

	 getElement(text) {
		const buildDivElementHTML = document.createElement('div');
		const buildTitleElementHTML = document.createElement('p');
		buildTitleElementHTML.textContent = 'Message:';
		buildTitleElementHTML.style.fontWeight = 'Bold';
		buildTitleElementHTML.style.padding = '5px 0';
		buildDivElementHTML.className = ('message');
		buildDivElementHTML.textContent = text;
		buildDivElementHTML.style.position = 'absolute';
		buildDivElementHTML.style.right = '0';
		buildDivElementHTML.style.bottom = '0';
		buildDivElementHTML.style.width = '500px';
		buildDivElementHTML.style.backgroundColor = 'skyblue';
		buildDivElementHTML.style.borderRadius = '8px';
		buildDivElementHTML.style.boxSizing = 'border-box';
		buildDivElementHTML.style.padding = '20px';
		buildDivElementHTML.prepend(buildTitleElementHTML);
		return document.body.append(buildDivElementHTML);
	}

	 async getData() {
		try {
		  const responce = await fetch('https://jsonplaceholder.typicode.com/comments');
	  
		  if (!responce.ok) {
			throw new Error(`Внимание - ошибка`);
		  }
		  const arrayMessage = await responce.json()
		  return arrayMessage
	  
		} catch (error) {
		  console.log(error)
		}
	  }
 

	trigger() {
		this.getData()
			.then((responce) => {
				const randomNumber = getRandomNumber(responce.length)
				const textMessage = responce[randomNumber].body;
				this.getElement(textMessage);
				const messageBox = document.querySelector('.message');
				setTimeout(() => messageBox.remove(), 4000)
			})
			.catch(error => {
				console.log(error)
			})
	}
}
