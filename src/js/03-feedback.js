
import { save, load } from "./storage.js";

const _ = require("lodash");

const form = document.querySelector(".feedback-form");
let email = document.querySelector('input[type="email"]');
let message = document.querySelector('textarea[name="message"]');
const key = "feedback-form-state";

let usuario = load(key);

if (usuario != null) {
  email.defaultValue = usuario.email;
  message.defaultValue = usuario.message;
  
}

form.addEventListener("submit", (e) => {
  
  e.preventDefault();

  email = email.value || usuario.email;
  message = message.value || usuario.message;

  if (email.length >= 1 && message.length >= 1) {
    
    usuario = {
      email: email,
      message: message,
    };
    save(key, usuario);
  }

  limpiar();
  
});

function limpiar() {
  form.reset();
}

