import './nav.js'
import '../css/formulario-pagamento.css'





document.querySelector('card-number.number').oninput = () =>{
    document.querySelector('.number').innerText = document.querySelector('card-number.number').value;
  }