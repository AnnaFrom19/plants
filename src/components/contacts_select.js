export default class ContactSelect {
    current = null;
    selection = document.getElementById("contactList");
    cardPlace = document.getElementById("cardPlace");
    imagePlace = document.querySelector(".contacts__img-container");
    mainOption = this.selection.getElementsByClassName("contacts__main-option")[0];
    optionList = this.selection.getElementsByClassName("contacts__options-list")[0];
    data = {
       // "City": {},
        "Canandaigua, NY": {
          "phone":"+1 585 393 0001",
          "name":"Canandaigua, NY",
          "address":"151 Charlotte Street"
        },
        "New York City": {
          "phone":"+1 212 456 0002",
          "name":"New York City",
          "address":"9 East 91st Street"
          },
        "Yonkers, NY": {
          "phone":"+1 914 678 0003",
          "name":"Yonkers, NY",
          "address":"511 Warburton Ave"
          },
        "Sherrill, NY": {
          "phone":"+1 315 908 0004",
          "name":"Sherrill, NY",
          "address":"14 WEST Noyes BLVD"
         }                    
    }

    closeSelectionAndHide(value) {
        this.optionList.classList.remove('show-list');
        this.mainOption.classList.remove('Active');
        if (value) {
          this.imagePlace.classList.add("hideIt");          
            this.mainOption.classList.add('option-set');            
            this.mainOption.textContent = value;
            this.optionList.innerHTML = '';
            const thisContent = this.data[value];
            this.cardPlace.innerHTML = this.cardShow(thisContent);
            const thisButton = this.cardPlace.querySelector('button');
            thisButton.addEventListener('click',()=>{window.location.href=`tel:${thisContent.phone}`;});
            this.current = value;
        }
        else if (!this.current) {
            this.cardPlace.innerHTML = '';
        }
    }

    constructor() {
        const cityArray = Object.keys(this.data);
        this.mainOption.addEventListener('click', () => {
            this.optionList.innerHTML = '';
            if (this.mainOption.classList.contains('Active')) {
                this.closeSelectionAndHide();
            }
            else {
                this.mainOption.classList.add('Active');
                for (let city of cityArray) {
                    this.optionList.append(this.oneListElement(city));
                }
                this.optionList.style.width = this.mainOption.offsetWidth;                
                this.optionList.classList.add('show-list');
            }
        });
        document.body.addEventListener('resize', () => {
          this.optionList.style.width = this.mainOption.offsetWidth;
        });
        document.body.addEventListener('click', (e) => {         
            if (this.needClose(e.target))
            {
               this.closeSelectionAndHide();
            }
          });
    }      
   
      needClose(clickTarget) {

         return this.mainOption.classList.contains('Active') && !clickTarget.classList.contains('not-close-selection');
      }
    

    oneListElement(value) {
        const container = document.createElement('li');
        container.classList.add('contacts__options-list__one-option');
        container.classList.add('not-close-selection');
        container.addEventListener('click', () => {
            this.closeSelectionAndHide(value);
        });
        container.textContent = value;
        return container;
    }

    cardShow(data) {
        return `<div class="contact__card-wrapper">        
           <div class="contact-card__table-wrapper"> 
             <div class="contact-card__name">City:</div>
              <div class="contact-card__value">${data.name}</div>                                                
              <div class="contact-card__name">Phone:</div>
              <div class="contact-card__value">${data.phone}</div>                                                
              <div class="contact-card__name">Office address:</div>
              <div class="contact-card__value">${data.address}</div>                                        
            </div> 
            <button>Call us</button> 
          </div>                                   
    `;
    }
}