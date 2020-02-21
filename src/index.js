import {feedback} from "./services/forms";
import Siema from 'siema';
import "./styles/style.scss"

const feedbackForm = document.querySelector('.feedback-form');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');

feedbackForm.onsubmit = (event) => {
    event.preventDefault();
    const data = {
        name: nameField.value,
        email: emailField.value
    };
    feedback(data)
        .then(() => alert("ок"))
        .catch((err) => alert(err));
    nameField.value = '';
    emailField.value = '';
};

const processItems = document.querySelector('.process__items');
const processCounter = document.querySelectorAll('.process__counter');

for (let i=1; i<=processItems.children.length; i++) {
    const test = `${i}`.padStart(3, '0');
    processCounter[i-1].innerHTML = `${test}`;
}

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

const mySiema = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
});















