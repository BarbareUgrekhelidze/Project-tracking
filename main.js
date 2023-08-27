document.querySelector('.menu-btn').addEventListener('click', open);
document.querySelector('.close-btn').addEventListener('click', close);

function open(e){
    document.querySelector('.menu-btn').classList.add('disappear');
    document.querySelector('.close-btn').classList.add('show');
    document.querySelector('.menu').classList.add('show');
}

function close(e){
    document.querySelector('.menu-btn').classList.remove('disappear');
    document.querySelector('.close-btn').classList.remove('show');
    document.querySelector('.menu').classList.remove('show');
}