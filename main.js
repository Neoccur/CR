function scrollUp() {
    window.scrollTo(0, 0);
};

function scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
};

function colorSwitching() {

    let a = document.documentElement.scrollTop;
    //let b = document.body.clientHeight
    //let c = a / b;

    //// FIXME: Classes aren't working
    if (a > 1050){
        document.getElementById('contact').classList.add = 'active';
        document.getElementById('accueil').classList.remove = 'active';
    }
    else {
        document.getElementById('accueil').classList.remove = 'active';
        document.getElementById('contact').classList.add = 'active';
    };
    //console.log(a, document.getElementById('contact').classList.length, document.getElementById('accueil').classList.length)
};
