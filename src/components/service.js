export default function serviceManager ()
{
    const activeButtons =[];
    const serviceSection = document.getElementById('service');
    let buttonArray = serviceSection.getElementsByTagName("button");
    
    for(let element of buttonArray) {                    
      element.addEventListener('click', () => {
        const buttonInArrayIndex = activeButtons.indexOf(element);
        if (buttonInArrayIndex < 0){
        activeButtons.push(element);
        element.classList.add('Active');
        serviceSection.classList.add(element.textContent);
        if (activeButtons.length > 2) {     
            const removedButton = activeButtons[0];               
            serviceSection.classList.remove(removedButton.textContent);
            removedButton.classList.remove('Active');
            activeButtons.shift();
        }
      }
      else {
        buttonInArrayIndex > 0 ? activeButtons.pop() : activeButtons.shift();
        serviceSection.classList.remove(element.textContent);
        element.classList.remove('Active');
      }
      });
    }    
}