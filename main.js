function ScrollUp() {
    window.scrollTo(0, 0);
}

function ScrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
}

function Forever() {
    while (true){
        var a = element.scrollTop;
        var b = element.scrollHeight - element.clientHeight;
        var c = a / b;
        
        if (c == 0){
            document.getElementById('top').classList.add = 'active';
            document.getElementById('bottom').classList.remove = 'active';
        }
        else {
            document.getElementById('top').classList.remove = 'active';
            document.getElementById('bottom').classList.add = 'active';
        }
    }
}
