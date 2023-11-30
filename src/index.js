import burgerMenu from "./components/burger.js";
import scoreCheck from "./components/score.js";
import serviceManager from "./components/service.js";
import priceManager from "./components/price.js";
import ContactSelect from "./components/contacts_select.js";

new burgerMenu();
serviceManager();
priceManager();
new ContactSelect();

console.log(scoreCheck());
