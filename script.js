'use strict'
const slipId = document.querySelector('#advice-id');
const slipAdvice = document.querySelector('#advice-slip')
const dice = document.querySelector('#dice')


const renderAdvice = function(data){
    slipId.innerText = `ADVICE ${data.slip.id}`
    slipAdvice.innerText = `"${data.slip.advice}"`
}

const renderError = function(error){
    slipAdvice.innerText = `"${error.message}"`
}
const getAdvice = async function(){
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        if(!response.ok){
                throw new Error (`${response.status} We couldn't fetch this advice`)
            }
        const data = await response.json()

            console.log(data)
            renderAdvice(data)
        
    } catch(err){
        console.error(`${err}`)
        renderError(err)
    }
}
getAdvice()
setInterval(getAdvice, 7000)
dice.addEventListener('click', getAdvice)