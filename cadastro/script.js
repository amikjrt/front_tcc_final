document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o redirecionamento imediato

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const telefone = document.getElementById('telefone').value;
        const cep = document.getElementById('cep').value;
        const cpf = document.getElementById('cpf').value;
        const datan = document.getElementById('datan').value;

        const usuario = {
            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone,
            cep: cep,
            cpf: cpf,
            datan: datan
        };

        localStorage.setItem('usuario', JSON.stringify(usuario));

        alert('Cadastro realizado com sucesso!');

        // Redireciona para a página de login
        window.location.href = "../login/login.html";
    });
});
