document.addEventListener('DOMContentLoaded', () => {
    const alien = document.getElementById('alien');
    const body = document.getElementById('body');
    //Declaração do tamanho da Tela;
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (alien) {
        alien.addEventListener('mouseover', () => {
            body.style.backgroundImage = "url('Imagens/BG.jpg')";
            if (screenWidth <= 450) {
                body.style.backgroundImage = "url('Imagens/Mobile.jpg')";
                body.style.backgroundPosition = "center";
            } else if (screenWidth > 450 || screenWidth <= 1200) {
                body.style.backgroundPosition = "center";
            } else {
                body.style.backgroundPosition = "center";
            }
        });

        alien.addEventListener('mouseleave', () => {
            body.style.backgroundImage = 'radial-gradient(circle, #181818, #000)';
        })

        alien.addEventListener('click', () => {
            const voz = "Eiiii, você está convocado para uma jornada inimaginável pelos confins do universo. ...";
            //Testar gerador de Voz;
            const synthesis = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(voz);
            utterance.rate = 0.8;
            synthesis.speak(utterance);
        });
    } else {
        console.log('O elemento Alien não existe!');
    }
});

