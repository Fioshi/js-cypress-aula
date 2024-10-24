function gerarStringAleatoria(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[indice];
    }

    return resultado;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://127.0.0.1:5500/cadastrar-prod.html')

        const nomeProduto = gerarStringAleatoria(10);
        const precoProduto = gerarNumeroAleatorio(1, 100);
        const quantidadeProduto = gerarNumeroAleatorio(1, 100);

        cy.get('#prodName').type(nomeProduto);
        cy.get('#prodPrice').type(precoProduto);
        cy.get('#prodSize').type(quantidadeProduto);

        cy.get('#btn-cadastrar-prod').click();
    });
});
