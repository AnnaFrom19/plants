export default class burgerMenu {
    constructor() {      
        this.burgerInput = document.getElementById('burger-button__input');
        this.navElement = document.getElementsByTagName('nav')[0];
        this.linksInNav = this.navElement.getElementsByTagName('a');
        this.labelElement = document.getElementsByClassName('burger-button__label')[0];
        document.body.addEventListener('click', (e) => {         
          if (this.needClose(e.target))
          {
             this.closeBurger();
          }
        });
    }
 
    needClose(clickTarget) {
       return this.isBurgerOpen() && clickTarget !== this.navElement &&
              clickTarget !== this.labelElement && clickTarget !==this.burgerInput;
    }
 
    isBurgerOpen()
    {
       return this.burgerInput.checked
    }
 
    closeBurger() {
       this.burgerInput.checked = false;
    }
 
 }