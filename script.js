
document.addEventListener('DOMContentLoaded',function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte')
    const diminuirFonteBotao = document. getElementById('diminuir-fonte')

    botaoDeAcessibilidade.addEventListener('click', function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

    })

let tamanhoAtualFonte = 1;
aumentaFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte += 0,1;
    document.body.style.fontsize = `${tamanhoAtualFonte} rem`

});

diminuiFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte -= 0,1;
    document.body.style.fontsize = `${tamanhoAtualFonte} rem`;
});

})