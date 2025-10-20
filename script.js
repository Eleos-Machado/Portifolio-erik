const botaoTema = document.getElementById('modo-tema');
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    botaoTema.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const form = document.getElementById('form-contato');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
    alert('Mensagem enviada com sucesso!');
    form.reset();
});