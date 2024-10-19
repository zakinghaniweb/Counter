// ============= Dom Select Start =============
let inputBox = document.querySelectorAll('.input-box');
let counterInput = document.querySelectorAll('.counter-input');
let result = document.querySelectorAll('.result');
let counterStartBtn = document.querySelector('.counter-start-btn');
let counterTitle = document.querySelectorAll('.counter-title-total');
// ============= Dom Select End =============
// ============= Counter Js Start =============
// ============= Counter  Js Start =============
let addCounter = (item)=>{
    counterTitle[item].innerHTML = counterInput[item].value
    result[item].dataset.count = counterInput[item].value
    result[item].innerHTML = result[item].dataset.count
    counterInput[item].value   = ''
}
result.forEach((item)=>{
    counterStartBtn.addEventListener('click',()=>{
        if (item.dataset.count == 0 || item.dataset.count == "") {
            inputBox.forEach((inputBox)=>{
                inputBox.style = 'outline: 3px dashed #FF0000;'
            })
        }
        else {
            if (counterStartBtn.innerHTML == "Start") {
                inputBox.forEach((inputBox)=>{
                    inputBox.style = 'outline: 3px dashed #00B7FF;'
                })
                let number = 0;
                function startCounter(){
                    number++
                    item.innerHTML = number
                    if (number == item.dataset.count) {
                        clearInterval(startCount)
                    }
                }
                let startCount = setInterval(() => {
                    startCounter()
                }, 100);
            }
            else {
                clearInterval(startCount)
                result.forEach((item)=>{
                    item.dataset.count = 0
                    item.innerHTML = 0
                })
            }
        }
    })
})
// ============= Counter Js Start =============