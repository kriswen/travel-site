import "../styles/styles.css";
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from "./modules/RevealOnScroll";

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

let mobileMenu = new MobileMenu();

//accept hot reloading if makes sense to accept it
if (module.hot) {
    module.hot.accept()
}
