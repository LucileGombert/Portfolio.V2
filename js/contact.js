// Contact form
function checkInputs() {
  let btnSubmit = document.getElementById("btn_submit");

  btnSubmit.addEventListener('click',function(e) {
    let name = document.getElementById('name');
    let nameMissing = document.getElementById('nameMissing');
    let nameValidation = /^[a-zA-ZéèêàçîïÉÈÎÏ]{2,}([-'\s][a-zA-ZéèêàçîïÉÈÎÏ]{2,})?/;

    if (name.validity.valueMissing) {
      e.preventDefault();

      nameMissing.textContent = 'Ce champ est obligatoire';
      nameMissing.style.color = 'red';

      setTimeout(function() {
        nameMissing.textContent = '';
      },5000);

    } else if (nameValidation.test(name.value) == false) {
      e.preventDefault();

      nameMissing.textContent = 'Format de saisie invalide';
      nameMissing.style.color = 'orange';

      setTimeout(function() {
        nameMissing.textContent = '';
      },5000);

    } else {
      nameMissing.textContent = '';
    }

    
    let email = document.getElementById('email');
    let emailMissing = document.getElementById('emailMissing');
    let emailValidation = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}/;

    if (email.validity.valueMissing) {
      e.preventDefault();

      emailMissing.textContent = 'Ce champ est obligatoire';
      emailMissing.style.color = 'red';

      setTimeout(function() {
        emailMissing.textContent = '';
      },5000);

    } else if (emailValidation.test(email.value) == false) {
      e.preventDefault();

      emailMissing.textContent = 'Format de saisie invalide';
      emailMissing.style.color = 'orange';

      setTimeout(function() {
        emailMissing.textContent = '';
      },5000);

    } else {
      emailMissing.textContent = '';
    }

    let message = document.getElementById('message');
    let messageMissing = document.getElementById('messageMissing');
    let messageValidation = /^[^><%#$/(){}]{5,400}$/;

    if (message.validity.valueMissing) {
      e.preventDefault();

      messageMissing.textContent = 'Ce champ est obligatoire';
      messageMissing.style.color = 'red';

      setTimeout(function() {
        messageMissing.textContent = '';
      },5000);

    } else if (messageValidation.test(message.value) == false) {
      e.preventDefault();

      messageMissing.textContent = 'Votre message doit contenir entre 5 et 400 caractères sans caractères spéciaux';
      messageMissing.style.color = 'orange';

      setTimeout(function() {
        messageMissing.textContent = '';
      },5000);

    } else {
      messageMissing.textContent = '';
    }
  });
}


function validateMessage() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message"); 
  let formContent = document.getElementById("form_content");
  let formResponse = document.querySelector(".form_response");

  formContent.addEventListener("submit", function (e) {
    e.preventDefault();
    
    sendEmail(name.value, email.value, message.value);

    formResponse.innerHTML = "Votre message a bien été envoyé à Lucile !";
    
    setTimeout(function() {
      formResponse.innerHTML = "";
    },8000);

    document.getElementById("name").value = "";
    document.getElementById("email").value= "";
    document.getElementById("message").value= "";
  });
}


function sendEmail(name, email, message) { 
  emailjs.send('service_5r0twke', 'template_x9brcpp', {
    from_name: name,
    message: message
  });
}


checkInputs();
validateMessage();