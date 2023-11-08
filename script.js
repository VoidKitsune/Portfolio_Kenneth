const Sobre = document.getElementById("SobreLink");
let showBarsobre = 'on';

Sobre.addEventListener("click", function () {
    if (showBarsobre === 'on') {
        document.querySelector(".barraEsquerdaSobre").style.animationName = 'Rsobrebar';
        document.querySelector(".barraEsquerdaProjetos").style.animationName = 'projetos';
        document.querySelector(".barraEsquerdaContato").style.animationName = 'contato';

        showBarsobre = 'off';
    } else {
        document.querySelector(".barraEsquerdaSobre").style.animationName = 'sobrebar';
        showBarsobre = 'on';
    }
});


const projetos = document.getElementById("ProjetosLink");
let showBarProjetos = 'on';

projetos.addEventListener("click", function () {
    if (showBarProjetos === 'on') {
        document.querySelector(".barraEsquerdaProjetos").style.animationName = 'Rprojetos';
        document.querySelector(".barraEsquerdaSobre").style.animationName = 'sobrebar';
        document.querySelector(".barraEsquerdaContato").style.animationName = 'contato';

        showBarProjetos = 'off';
    } else {
        document.querySelector(".barraEsquerdaProjetos").style.animationName = 'projetos';
        showBarProjetos = 'on';
    }
});


const contato = document.getElementById("ContatoLink");
let showBarContato = 'on';

contato.addEventListener("click", function () {
    if (showBarContato === 'on') {
        document.querySelector(".barraEsquerdaContato").style.animationName = 'Rcontato';
        document.querySelector(".barraEsquerdaSobre").style.animationName = 'sobrebar';
        document.querySelector(".barraEsquerdaProjetos").style.animationName = 'projetos';

        showBarContato = 'off';
    } else {
        document.querySelector(".barraEsquerdaContato").style.animationName = 'contato';
        showBarContato = 'on';
    }
});


/* mobile menu */

const OpenAndCloserMenu = document.querySelector(".menu")
let animation = 'on'

OpenAndCloserMenu.addEventListener("click", function () {
    if (animation === "on") {
        document.querySelector(".div1").style.animationName = 'Rcima';
        document.querySelector(".div2").style.animationName = 'Rmeio';
        document.querySelector(".div3").style.animationName = 'Rbaixo';

        
        document.querySelector(".barraEsquerdaSobre").style.animationName = 'sobrebar'
        document.querySelector(".barraEsquerdaProjetos").style.animationName = 'projetos'
        document.querySelector(".barraEsquerdaContato").style.animationName = 'contato'

        document.querySelector(".MobileNavBar").style.animationName = 'OffMobileNavBar'

        animation = 'off';
    } else if (animation === 'off') {
        document.querySelector(".div1").style.animationName = 'cima';
        document.querySelector(".div2").style.animationName = 'meio';
        document.querySelector(".div3").style.animationName = 'baixo';

        document.querySelector(".MobileNavBar").style.animationName = 'OnMobileNavBar'

        animation = 'on';
    }
})

const MobileSobreLink = document.getElementById("MobileSobreLink")
let MobileSobreBar = 'on'

MobileSobreLink.addEventListener("click", function () {
    if (MobileSobreBar === 'on') {
        document.querySelector(".barraEsquerdaSobre").style.animationName = 'Rsobrebar'
        document.querySelector(".barraEsquerdaProjetos").style.animationName = 'projetos'
        document.querySelector(".barraEsquerdaContato").style.animationName = 'contato'

        MobileSobreBar = 'off'

    } else {
        document.querySelector(".barraEsquerdaSobre").style.animationName = 'sobrebar'

        MobileSobreBar = 'on'

    }
})


const MobileProjetosLink = document.getElementById("MobileProjetosLink")
let MobileProjetosBar = 'on'

MobileProjetosLink.addEventListener("click", function () {
    if (MobileProjetosBar === 'on') {
        document.querySelector(".barraEsquerdaProjetos").style.animationName = 'Rprojetos'
        document.querySelector(".barraEsquerdaSobre").style.animationName = 'sobrebar'
        document.querySelector(".barraEsquerdaContato").style.animationName = 'contato'

        MobileProjetosBar = 'off'

    } else {
        document.querySelector(".barraEsquerdaProjetos").style.animationName = 'projetos'

        MobileProjetosBar = 'on'

    }
})

const MobileContatoLink = document.getElementById("MobileContatoLink")
let MobileContatoBar = 'on'

MobileContatoLink.addEventListener("click", function () {
    if (MobileContatoBar === 'on') {
        document.querySelector(".barraEsquerdaContato").style.animationName = 'Rcontato'
        document.querySelector(".barraEsquerdaSobre").style.animationName = 'sobrebar'
        document.querySelector(".barraEsquerdaProjetos").style.animationName = 'projetos'

        MobileContatoBar = 'off'

    } else {
        document.querySelector(".barraEsquerdaContato").style.animationName = 'contato'

        MobileContatoBar = 'on'

    }
})