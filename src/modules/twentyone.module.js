import { Module } from "../core/module.js";
import { getRandomNumber } from "../utils/utils.js";
import { getSumPoints } from "../utils/utils.js";

export class TwentyOne extends Module {
    constructor(type, text) {
        super(type,text)
        this.mainConteiner = document.createElement('div');
      
        document.body.append(this.mainConteiner);
    }
     

    getGameField() {
        
        const fieldPlayer = document.createElement('div');
        fieldPlayer.className = 'Player-Field';
        fieldPlayer.style.width = '1400px';
        fieldPlayer.id='Player';
        fieldPlayer.style.display='flex';
        fieldPlayer.style.padding='20px';
        fieldPlayer.style.gap = '20px'
        fieldPlayer.style.backgroundColor='skyblue';
        fieldPlayer.style.position= 'absolute';
        fieldPlayer.style.right='50%';
        fieldPlayer.style.bottom='0';
        fieldPlayer.style.borderRadius='10px';
      

        const fieldEnemy = document.createElement('div');
        fieldEnemy.className = 'Player-Enemy';
        fieldEnemy.style.width = '1400px';
        fieldEnemy.id='Enemy';
        fieldEnemy.style.padding='20px';
        fieldEnemy.style.gap = '20px'
        fieldEnemy.style.backgroundColor='skyblue';
        fieldEnemy.style.display='flex';
        fieldEnemy.style.position= 'absolute';
        fieldEnemy.style.right='50%';
        fieldEnemy.style.top='0';
        this.mainConteiner.append(fieldPlayer,fieldEnemy);
        fieldEnemy.style.borderRadius='10px';
     }

    trigger() {
        let isWinner =false;
        let PlayerCardBox = [];
        let EnemyCardBox = [];
        const fieldPlayerValue = document.querySelector('#Player');
        const fieldEnemyValue = document.querySelector('#Enemy');
        const checkedID = document.querySelector('#button');
        if (!fieldPlayerValue && !fieldEnemyValue) {
            this.getGameField();
            }
            
        if(!checkedID) {
        this.getButton();
    
        }
        let cardBox = [{
            card:'6',
            view: 'Пики',
            img:'src/assets/img/peaks.png',
            point: 6,
            
        },
        {
            card:'7',
            view: 'Пики',
            img:'src/assets/img/peaks.png',
            point: 7,
        },
        {
            card:'8',
            view: 'Пики',
            img:'src/assets/img/peaks.png',
            point: 8,
        },
        {
            card: '9',
            view: 'Пики',
            img:'src/assets/img/peaks.png',
            point: 9,
        },
        {
            card: '10',
            view: 'Пики',
            img:'src/assets/img/peaks.png',
            point: 10,
        },
        {
            card:'Валет',
            view: 'Пики',
            img:'src/assets/img/peaks.png',
            point: 2,
        },
        {
            card:'Дама',
            view: 'Пики',
            img:'src/assets/img/peaks.png',
            point: 3,
        },
        {
            card:'Король',
            view: 'Пики',
            img:'src/assets/img/peaks.png',
            point: 4,
        },
        {
            card:'Туз',
            view: 'Пики',
            img:'src/assets/img/peaks.png',
            point: 11,
        },
    
        {
            card:'6',
            view: 'Черви',
            img:'src/assets/img/heart.png',
            point: 6,
            
        },
        {
            card:'7',
            view: 'Черви',
            img:'src/assets/img/heart.png',
            point: 7,
        },
        {
            card:'8',
            view: 'Черви',
            img:'src/assets/img/heart.png',
            point: 8,
        },
        {
            card: '9',
            view: 'Черви',
            img:'src/assets/img/heart.png',
            point: 9,
        },
        {
            card: '10',
            view: 'Черви',
            img:'src/assets/img/heart.png',
            point: 10,
        },
        {
            card:'Валет',
            view: 'Черви',
            img:'src/assets/img/heart.png',
            point: 2,
        },
        {
            card:'Дама',
            view: 'Черви',
            img:'src/assets/img/heart.png',
            point: 3,
        },
        {
            card:'Король',
            view: 'Черви',
            img:'src/assets/img/heart.png',
            point: 4,
        },
        {
            card:'Туз',
            view: 'Черви',
            img:'src/assets/img/heart.png',
            point: 11,
        },
    
        {
            card:'6',
            view: 'Крести',
            img:'src/assets/img/kresty.png',
            point: 6,
            
        },
        {
            card:'7',
            view: 'Крести',
            img:'src/assets/img/kresty.png',
            point: 7,
        },
        {
            card:'8',
            view: 'Крести',
            img:'src/assets/img/kresty.png',
            point: 8,
        },
        {
            card: '9',
            view: 'Крести',
            img:'src/assets/img/kresty.png',
            point: 9,
        },
        {
            card: '10',
            view: 'Крести',
            img:'src/assets/img/kresty.png',
            point: 10,
        },
        {
            card:'Валет',
            view: 'Крести',
            img:'src/assets/img/kresty.png',
            point: 2,
        },
        {
            card:'Дама',
            view: 'Крести',
            img:'src/assets/img/kresty.png',
            point: 3,
        },
        {
            card:'Король',
            view: 'Крести',
            img:'src/assets/img/kresty.png',
            point: 4,
        },
        {
            card:'Туз',
            view: 'Крести',
            img:'src/assets/img/kresty.png',
            point: 11,
        },
    
    
        {
            card:'6',
            view: 'Буби',
            img:'src/assets/img/bubi.png',
            point: 6,
            
        },
        {
            card:'7',
            view: 'Буби',
            img:'src/assets/img/bubi.png',
            point: 7,
        },
        {
            card:'8',
            view: 'Буби',
            img:'src/assets/img/bubi.png',
            point: 8,
        },
        {
            card: '9',
            view: 'Буби',
            img:'src/assets/img/bubi.png',
            point: 9,
        },
        {
            card: '10',
            view: 'Буби',
            img:'src/assets/img/bubi.png',
            point: 10,
        },
        {
            card:'Валет',
            view: 'Буби',
            img:'src/assets/img/bubi.png',
            point: 2,
        },
        {
            card:'Дама',
            view: 'Буби',
            img:'src/assets/img/bubi.png',
            point: 3,
        },
        {
            card:'Король',
            view: 'Буби',
            img:'src/assets/img/bubi.png',
            point: 4,
        },
        {
            card:'Туз',
            view: 'Буби',
            img:'src/assets/img/bubi.png',
            point: 11,
        },
      
    ]
    
    const PlayerField = document.querySelector('.Player-Field')
    const EnemyField = document.querySelector('.Player-Enemy')
    const buttonClick = document.querySelector('.Button-Style')
    

    buttonClick.addEventListener('click', (event) => {
        const modalWindow = document.querySelector('.Modal-Box');
            let random = getRandomNumber(cardBox.length-1);
            PlayerCardBox.push(cardBox[random]);
            cardBox.splice(random,1);
            let cardItem = this.getCard(PlayerCardBox[PlayerCardBox.length-1]);
            PlayerField.append(cardItem);
            let sumPointsPlayer = getSumPoints(PlayerCardBox);
            console.log(sumPointsPlayer)
            random = getRandomNumber(cardBox.length-1);
            EnemyCardBox.push(cardBox[random]);
            cardBox.splice(random,1);
            cardItem = this.getCard(EnemyCardBox[EnemyCardBox.length-1]);
            EnemyField.append(cardItem);
            let sumPointsEnemy = getSumPoints(EnemyCardBox);
            console.log(sumPointsEnemy)
            if (sumPointsPlayer > 21) {
                isWinner=false;
                document.body.append(this.getModalBox('Проигл, Ва бене!', isWinner))
                PlayerCardBox=[];
                EnemyCardBox=[];
            } else if (sumPointsPlayer === 21) {
                isWinner=true;
                document.body.append(this.getModalBox(`И Вы Победитель!!!`,isWinner))
                PlayerCardBox=[];
                EnemyCardBox=[];
            }else if (sumPointsEnemy > 21) {
                isWinner=true;
                document.body.append(this.getModalBox(`И Вы Победитель!!!`,isWinner));
                PlayerCardBox=[];
                EnemyCardBox=[];
            } else if (sumPointsEnemy === 21) {
                isWinner=false;
                document.body.append(this.getModalBox('Проигл, Ва бене!', isWinner))
                PlayerCardBox=[];
                EnemyCardBox=[];
            }  
            
            if (modalWindow) {
                modalWindow.remove();
                const deleteCards = document.querySelectorAll('.Card-Style')
                deleteCards.forEach( item=> item.remove());
            } 

        console.log(cardBox)
            const closeButton = document.querySelector('.Close-Modal');
            if(closeButton) {
             closeButton.addEventListener('click', () => {
                 const modalWindow = document.querySelector('.Modal-Box');
                 modalWindow.remove();
                 const deleteCards = document.querySelectorAll('.Card-Style')
                 deleteCards.forEach((item)=> item.remove());
                 console.log(PlayerCardBox);
                 PlayerCardBox=[];
                 EnemyCardBox=[];
             },)
            }
    })

	 }

     
     getCard(card) {
    
        const cardElementHTML = document.createElement('div');
        cardElementHTML.className='Card-Style';
        cardElementHTML.style.boxSizing='border-box';
        cardElementHTML.style.display = 'flex';
        cardElementHTML.style.position='relative';
        cardElementHTML.style.borderRadius='10px'
        cardElementHTML.style.width = '250px';
        cardElementHTML.style.height = '350px';
        cardElementHTML.style.backgroundColor='tan';
        const cardImgHTML = document.createElement('img');
        cardImgHTML.src = card.img;
        cardImgHTML.style.position='absolute';
        cardImgHTML.style.right='40%';
        cardImgHTML.style.top='40%';
        cardImgHTML.style.height='50px';
        cardImgHTML.style.width='50px';
        const titleCardHTML= document.createElement('h3');
        titleCardHTML.textContent=`${card.card}`;
        titleCardHTML.style.padding='1px';
         cardElementHTML.append(titleCardHTML,cardImgHTML)
         return cardElementHTML
    }

    getButton() {
        const buttonElementHTML = document.createElement('button');
        buttonElementHTML.textContent = 'Сдать карту';
        buttonElementHTML.style.backgroundColor = 'deepskyblue';
        buttonElementHTML.style.position='relative';
        buttonElementHTML.style.padding='20px';
        buttonElementHTML.style.borderRadius='10px';
        buttonElementHTML.style.left='0';
        buttonElementHTML.style.top='40%';
        buttonElementHTML.id='button';
        buttonElementHTML.className= 'Button-Style';
        document.body.append(buttonElementHTML);

    }

    getModalBox(text, isWinner) {
    const imgResult = isWinner? 'winner.png': 'loose.png'
    const modalBox = document.createElement('div');
    modalBox.className = 'Modal-Box';
    modalBox.style.width = '600px';
    modalBox.className = 'Modal-Box';
    modalBox.id = 'modalBox';
    modalBox.style.backgroundColor='lightcoral';
    modalBox.style.position= 'relative';
    modalBox.style.top = '20%';
    modalBox.style.left = '50%';
    modalBox.style.height = '600px';
    modalBox.style.borderRadius = '20px';
    const titleResult = document.createElement('p');
    titleResult.textContent = `${text}`;
    titleResult.style.textAlign='center';
    titleResult.style.padding = '90px';
    titleResult.style.fontSize='40px';
    titleResult.style.fontWeight='Bold';
    const imgModal = document.createElement('img');
    imgModal.style.height = '300px';
    imgModal.style.width = '300px';
    imgModal.src = `src/assets/img/${imgResult}`;
    imgModal.style.position= 'absolute';
    imgModal.style.right = '25%';
    imgModal.style.top = '25%';
    imgModal.style.borderRadius = '25px'
    const closeModalImg = document.createElement('img');
    closeModalImg.className = 'Close-Modal'
    closeModalImg.src = 'src/assets/img/close.png';
    closeModalImg.style.width='40px';
    closeModalImg.style.height='40px';
    closeModalImg.style.cursor= 'pointer';
    closeModalImg.style.position= 'absolute';
    closeModalImg.style.right = '0';
    closeModalImg.style.top = '0';
    modalBox.append(closeModalImg,titleResult,imgModal,)
    return modalBox;
    } 

	}
