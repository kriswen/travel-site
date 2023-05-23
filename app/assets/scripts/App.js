import "../styles/styles.css";
import MobileMenu from './modules/MobileMenu';


let mobileMenu = new MobileMenu();


//accept hot reloading if makes sense to accept it
if (module.hot) {
    module.hot.accept()
}
