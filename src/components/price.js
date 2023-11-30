export default function priceManager() {
    const priceObject = document.getElementById('priceList');
    const baseElements = Array.from(priceObject.getElementsByTagName('h5'));
    let activeElement = null;
    for (const headerElement of baseElements) {
        headerElement.addEventListener('click', () => {
            const liElement = headerElement.parentElement;
            const isActive = liElement.classList.contains('Active');
            if (activeElement) {
                activeElement.classList.remove('Active');
                activeElement = null;
            }
            if (!isActive) {
                liElement.classList.add('Active');
                activeElement = liElement;
            }
        })
    }

};