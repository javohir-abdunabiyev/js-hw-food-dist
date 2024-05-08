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





// timer
const deadline = "2024-05-09 00:00"
const confeti = document.querySelector('.promotion__timer')

function getRemainingTime(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
    days =  Math.floor((t / 1000) / 60 / 60 / 24),
    hours =  Math.floor((t / 1000) / 60 / 60 % 24),
    minutes =  Math.floor((t / 1000) / 60 % 60),
    seconds =  Math.floor((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }

}

function setTimer(endTime, selector) {
    const t = document.querySelector(selector),
    days = t.querySelector('#days'),
    hours = t.querySelector('#hours'),
    minutes = t.querySelector('#minutes'),
    seconds = t.querySelector('#seconds'),
    interval = setInterval(updateTimer, 1000)
    
    function updateTimer() {
        const t = getRemainingTime(endTime)

        if(t.t <= 0) {
            clearInterval(interval)
        }
        
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds
    }

}

setTimer(deadline, '.timer')




// потребность в каллориях

// calc

const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')

const user = {
    gender: "woman",

}


genderBtns.forEach((btn) => {
    btn.onclick = () => {
        const g = btn.getAttribute('data-gender')
        user.gender = g

        genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }
})


inputs.forEach(inp => {
    inp.oninput = () => {
        user[inp.name] = inp.value
    }
})


act_btns.forEach((btn) => {
    btn.onclick = () => {
        const act = +btn.getAttribute('data-act')
        const kk_result = document.querySelector('.kkal')

        if(user.gender === 'woman') {
            const result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age)

            let primer = Math.round(result * act)
            kk_result.innerText = primer
        } else {
            const result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age)

            let primer = Math.round(result * act)
            kk_result.innerText = primer
        }
        act_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }
})


// Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) - (4,676 × возраст в годах);
// Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,775 × возраст в годах).





const order_console_log = document.querySelectorAll('.order__input')
const order_btn = document.querySelector('#btn_console_log')

let inpValue = {}

order_console_log.forEach(inp => {
    inp.oninput = () => {
            inpValue[inp.name] = inp.value
    }
})


// order_btn.onclick = () => {
//     console.log(inpValue);
// }