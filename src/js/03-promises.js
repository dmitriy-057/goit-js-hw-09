// import Notiflix from 'notiflix';



const form = document.querySelector('.form')
console.log(form)
const firstDelay = document.querySelector('[name=delay]')
console.log(firstDelay)
const delayStep = document.querySelector("input[name=step]")
const amount = document.querySelector("input[name=amount]")
const btn = document.querySelector("button")
btn.addEventListener("click", onBtnClick)

function onBtnClick(e) {
  e.preventDefault()
  for(let position = 0; position <= amount.value; position+=1) {
    let del = delayStep.value;
    console.log(del);

    createPromise(position, delayStep.value)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  }

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setInterval(() => {
    return new Promise((resolve, reject) => {
  
    if (shouldResolve) {
      // Fulfill
    return true
    } else {
      // Reject
      return false
    }
})
  }, delayStep.value);
 


}

