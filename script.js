const dayEl = document.getElementById("day")
const monthEl = document.getElementById("month")
const yearEl = document.getElementById("year")

const yearsRes = document.getElementById("evSzam")
const monthsRes = document.getElementById("hoSzam")
const daysRes = document.getElementById("napSzam")

const btn = document.getElementById("buttonnyil")

btn.addEventListener("click", ()=>{
    let day = dayEl.value * 1;
    let month = monthEl.value * 1;
    let year = yearEl.value * 1;

    const inputDate = new Date(`${year}-${month}-${day}`);
    console.log(inputDate);

    const actualDate = new Date()

    let milisec = actualDate - inputDate

    let resday = Math.floor(milisec / 1000 / 60 / 60 / 24)
    let resmonth = resday / 30
    resday = Math.floor(resday % 30)

    let resyear = Math.floor(resmonth / 12)
    resmonth = Math.floor(resmonth % 12)

    yearsRes.innerText= resyear
    monthsRes.innerText= resmonth
    daysRes.innerText= resday
})