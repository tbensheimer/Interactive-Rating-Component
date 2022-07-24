const btns = document.querySelectorAll(".btn")
const submit = document.querySelector(".submit");
let container = document.querySelector(".container")

btns.forEach(btn => {
    btn.addEventListener("click", e => {
let active = document.querySelector(".active");
if (active) {
active.classList.remove("active")
e.currentTarget.classList.add("active")
} else {
    e.currentTarget.classList.add("active")
}
    })
})

submit.addEventListener("click", () => {
    let rate = document.querySelector(".active");
    container.innerHTML = `
    <div class="thanks-container">
    
    <img class="thanks-img" src="images/illustration-thank-you.svg" alt="Thank you" />
    
    
    <h2 class="rating">You selected ${rate.textContent} out of 5</h2>
    
    <h1 class="thank-you">Thank you!</h1>
    
    <p class="thanks-description">We appreciate you taking the time to give a rating. If you ever need more support, 
    don't hesitate to get in touch!</p>
    
    </div>
    `
})


