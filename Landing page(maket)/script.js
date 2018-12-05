let getId = id => document.getElementById(id);

let but = getId('but');
let butContact = getId('butContact');

but.addEventListener('mouseover', function () {
    but.style.background = 'red';
    but.style.color = 'white';
})
but.addEventListener('mouseout', function () {
    but.style.background = 'white';
    but.style.color = 'red';
})

butContact.addEventListener('mousedown', function () {
    butContact.style.background = 'blue';
})

butContact.addEventListener('mouseup', function () {
    butContact.style.background = 'red';
})

let li = document.querySelectorAll('.productsMenu li a');

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseover', function () {
        li[i].style.color = 'red';
        li[i].style.transition = '0.3s';
    })
}
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseout', function () {
        li[i].style.color = 'black';
        li[i].style.opacity = '0.7s';
    })
}

let buttSend = getId('buttSend');

buttSend.addEventListener('mouseover', function () {
    buttSend.style.fontSize = '22px';
})

buttSend.addEventListener('mouseout', function () {
    buttSend.style.fontSize = '16px';
})

let fontAwesome = document.querySelectorAll('.footerSigns i');

for (let i = 0; i < fontAwesome.length; i++) {
    fontAwesome[i].addEventListener('mouseover', function () {
        fontAwesome[i].style.transform = 'rotate(360deg)';
    })
}
