import "./styles/style.scss"
import {feedback} from "./services/forms";

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
        .catch(() => alert("не ок"));

    nameField.value = '';
    emailField.value = '';
};







