const btn = document.querySelector('.dice')
const id = document.querySelector('.id')
const advice = document.querySelector('.adviceText')

const fetchAdvice = async () =>{
    const request = await fetch("https://api.adviceslip.com/advice")
    const response = await request.json()
    console.log(response)
    id.textContent = response.slip.id
    advice.textContent = `"${response.slip.advice}"`
}

fetchAdvice()


btn.addEventListener('click', fetchAdvice)