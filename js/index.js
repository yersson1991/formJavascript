const form = document.getElementById('form');
const inputs = document.querySelectorAll('#formInput');

const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	tel: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	user: false,
	name: false,
	password: false,
	email: false,
	tel: false
}

const 
validateForm = (e) => {
	switch (e.target.name) {
		case "user":
			validateField(expressions.user, e.target, 'user');
		break;
		case "name":
			validateField(expressions.name, e.target, 'name');
		break;
		case "password":
			validateField(expressions.password, e.target, 'password');
			
validatePassword2();
		break;
		case "password2":
			
validatePassword2();
		break;
		case "email":
			validateField(expressions.email, e.target, 'email');
		break;
		case "tel":
			validateField(expressions.tel, e.target, 'tel');
		break;
	}
}

const validateField = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`group${campo}`).classList.remove('formGroupIncorrect');
		document.getElementById(`group${campo}`).classList.add('formGroupCorrect');
		document.querySelector(`#group${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#group${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#group${campo} .formInputError`).classList.remove('formInputError-active');
		campos[campo] = true;
	} else {
		document.getElementById(`group${campo}`).classList.add('formGroupIncorrect');
		document.getElementById(`group${campo}`).classList.remove('formGroupCorrect');
		document.querySelector(`#group${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#group${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group${campo} .formInputError`).classList.add('formInputError-active');
		campos[campo] = false;
	}
}

const 
validatePassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`groupPassword2`).classList.add('formGroupIncorrect');
		document.getElementById(`groupPassword2`).classList.remove('formGroupCorrect');
		document.querySelector(`#groupPassword2 i`).classList.add('fa-times-circle');
		document.querySelector(`#groupPassword2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#groupPassword2 .formInputError`).classList.add('formInputError-active');
		campos['password'] = false;
	} else {
		document.getElementById(`groupPassword2`).classList.remove('formGroupIncorrect');
		document.getElementById(`groupPassword2`).classList.add('formGroupCorrect');
		document.querySelector(`#groupPassword2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#groupPassword2 i`).classList.add('fa-check-circle');
		document.querySelector(`#groupPassword2 .formInputError`).classList.remove('formInputError-active');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', 
validateForm);
	input.addEventListener('blur', 
validateForm);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const terms = document.getElementById('terms');
	if(campos.user && campos.name && campos.password && campos.email && campos.tel && terms.checked ){
		form.reset();

		document.getElementById('formMessageSuccess').classList.add('formMessageSuccess-active');
		setTimeout(() => {
			document.getElementById('formMessageSuccess').classList.remove('formMessageSuccess-active');
		}, 5000);

		document.querySelectorAll('.formGroupCorrect').forEach((icono) => {
			icono.classList.remove('formGroupCorrect');
		});
	} else {
		document.getElementById('formMessage').classList.add('formMessageSuccess-active');
	}
}); 