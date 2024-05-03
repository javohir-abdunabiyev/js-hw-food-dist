const modal_show_btn = document.querySelectorAll('[data-modal]')
const modal_close = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')



function modalTrigger(arr, action) {
    arr.forEach((btn) => {
        btn.onclick = () => {
            modal.classList[action]('show', 'fade')
        }
    })
}

modalTrigger(modal_show_btn, 'add')
modalTrigger(modal_close, 'remove')


const slides = document.querySelectorAll('.offer__slide')
const prev_btn = document.querySelector('.offer__slider-prev')
const next_btn = document.querySelector('.offer__slider-next')

let slide_index = 0

function showSlides(n) {
    if(n > slides.length - 1) {
        slide_index = 0
    }
    
    if(slide_index < 0) {
        slide_index = slides.length - 1
    }
    
    slides.forEach((slide) => slide.classList.add('hide'))
    slides[slide_index].classList.remove('hide')
}
showSlides()

next_btn.onclick = () => {
    showSlides(++slide_index)
}

prev_btn.onclick = () => {
    showSlides(--slide_index)
}


const total_slides = document.querySelector('#total')
const slide_num = document.querySelector('#current')


total_slides.innerText = slides.length










const tab_btns = document.querySelectorAll('.tabheader__item')
const tab_img = document.querySelectorAll('.tab_img')




tab_img.forEach((img) => img.classList.add('hide'));

tab_img.forEach((img, idx) => {
    if(idx === 0) {
        img.classList.remove('hide')
    }
}) 



function changeImg(btn, imgs) {
    btn.forEach((btns, idx) => {
        btns.onclick = () => {
            tab_img.forEach((img) => img.classList.add('hide'))
            imgs[idx].classList.remove('hide')
        }
    }) 
}

changeImg(tab_btns, tab_img)