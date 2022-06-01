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