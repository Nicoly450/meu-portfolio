"use strict";


const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', function() {
    // Alterna a classe na tag body para mudar as variáveis CSS
    document.body.classList.toggle('tema-escuro');
});


const formContato = document.getElementById('form-contato');

formContato.addEventListener('submit', function(evento) {
   
    evento.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

   
    if (nome === '' || email === '' || mensagem === '') {
        alert('Erro: Por favor, preencha todos os campos antes de enviar.');
        return; 
    }

    
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Erro: O endereço de e-mail informado não é válido.');
        return;
    }

    
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
    formContato.reset();
});
