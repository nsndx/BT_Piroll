// header
var x = document.querySelector('.header_content .nav')
var y = document.querySelector('.header_content .fa-list')
var z = document.querySelector('.header_content .fa-xmark')
var btn = document.querySelector('.header_content .btn')
btn.onclick = function(){
    if(x.style.display == 'flex'){
        x.style.display = 'none'
        y.style.display = 'block'
        z.style.display = 'none'
    }else{
        x.style.display = 'flex'
        y.style.display = 'none'
        z.style.display = 'block'
    }
}

// banner_text
var text1 = document.querySelector('.banner_text .list .text1')
var text2 = document.querySelector('.banner_text .list .text2')
var text3 = document.querySelector('.banner_text .list .text3')
var col1 = document.querySelector('.banner_text .row .col1')
var col2 = document.querySelector('.banner_text .row .col2')
var col3 = document.querySelector('.banner_text .row .col3')
text1.onclick = function(){
    col1.style.display = 'block'
    col2.style.display = 'none'
    col3.style.display = 'none'
    text1.classList.add('active')
    text2.classList.remove('active')
    text3.classList.remove('active')
}
text2.onclick = function(){
    col1.style.display = 'none'
    col2.style.display = 'block'
    col3.style.display = 'none'
    text1.classList.remove('active')
    text2.classList.add('active')
    text3.classList.remove('active')
}
text3.onclick = function(){
    col1.style.display = 'none'
    col2.style.display = 'none'
    col3.style.display = 'block'
    text1.classList.remove('active')
    text2.classList.remove('active')
    text3.classList.add('active')
}