// clients area counter function


const client = document.querySelector(".counter")
const day  = document.querySelector(".days")
const award  = document.querySelector(".awards")

let start = 0

const update = setInterval(function(){
    start++;
    client.textContent=start;
    if(start>=134){
        clearInterval(update)
        client.style.color="gold"
    }
})

const dayupdate = setInterval(function(){
    start++;
    day.textContent=start;
    if(start>=1000){
        clearInterval(dayupdate)
        day.style.color="gold"
    }
})

const awardupdate = setInterval(function(){
    start++;
    award.textContent=start;
    if(start>=34){
        clearInterval(awardupdate)
        award.style.color="gold"
    }
})
