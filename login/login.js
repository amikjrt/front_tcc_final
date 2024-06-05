document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o redirecionamento imediato

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const manterConectado = document.getElementById('checkSquare2').checked;

        const usuario = JSON.parse(localStorage.getItem('usuario'));

        if (usuario && usuario.email === email && usuario.senha === senha) {
            alert('Login realizado com sucesso!');
            if (manterConectado) {
                localStorage.setItem('logado', 'true');
            }
            window.location.href = "../logado/logado.html";
        } else {
            alert('E-mail ou senha incorretos.');
        }
    });

    // Verifica se o usuário já está logado
    if (localStorage.getItem('logado') === 'true') {
        window.location.href = "../logado/logado.html";
    }
});
