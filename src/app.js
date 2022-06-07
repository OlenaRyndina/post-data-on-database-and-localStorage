import { Question } from './question';
import { isValid, createModal } from './utils';
import { getAuthForm, authWithEmailAndPassword } from './auth';

import './styles.css';

const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');
const modalBtm = document.getElementById('modal-btn');

window.addEventListener('load', Question.renderList);
form.addEventListener('submit', submitFormHandler);
modalBtm.addEventListener('click', openModal);
input.addEventListener('input', () => {
	submitBtn.disabled = !isValid(input.value);
})

function submitFormHandler (event) {
	event.preventDefault();
	
    if(isValid(input.value)) {
    	const question = {
    		text: input.value.trim(),
    		date: new Date().toJSON()
    	}

    	submitBtn.disabled = true;

    	//Async request to server to save question
    	Question.create(question).then(() => {
    		input.value = '';
    	    input.className = '';
    	    submitBtn.disabled = false;
    	});
    }
}

function openModal() {

	createModal('Авторизация', getAuthForm());
	document.getElementById('auth-form')
	        .addEventListener('submit', authFormHandler, {once: true})
}

function authFormHandler(event) {
	event.preventDefault();

	const btn = event.target.querySelector('button');
	const email = event.target.querySelector('#email').value;
	const password = event.target.querySelector('#password').value;

	btn.disabled = true;
	authWithEmailAndPassword(email, password)
	    .then(token => {
	    	return Question.fetch(token)
	    })
	    .then(renderModalAfterAuth)
	    .then(() => btn.disabled = false)
}

function renderModalAfterAuth(content) {
    if(typeof content === 'string') {
        createModal('Ошибка!', content)
    } else {
        createModal('Список вопросов', Question.listToHTML(content))
    }
}