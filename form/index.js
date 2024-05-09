const form = document.forms.namedItem('application')
const inps = document.querySelectorAll('.inps')
let inp_obj = {}

form.onsubmit = (event) => {
    event.preventDefault();   
}

inps.forEach(inp => {
    inp.oninput = () => {
        inp_obj[inp.name] = inp.value
        inp_obj[inp.named] = inp.value
    }
})
console.log(inp_obj);