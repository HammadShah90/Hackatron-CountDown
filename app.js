// -------------Lets Start--------->>>>>
// ----------Get Element from HTML-----------


const organizeDayTime = document.getElementsByTagName('span')[1];
console.log(organizeDayTime.innerHTML);


const countDownTimer = document.querySelector('.countDownTimer');
console.log(countDownTimer);

// countDownTimer.children[1].childNodes[0].textContent = 525;



// -----------Create Variables----------


let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]    
// console.log(days);

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]    
// console.log(months);

const hackathonDate = new Date("2023-05-21T09:00")
console.log(hackathonDate.getTime());


organizeDayTime.innerHTML = `${days[hackathonDate.getDay()]}, ${hackathonDate.getDate()} ${months[hackathonDate.getMonth()]} ${hackathonDate.getFullYear()}, ${hackathonDate.getHours()}:${hackathonDate.getMinutes()}0AM`;



// -----------Create Function----------


const beginHackathon = () => {
    const createDivElement = document.createElement("div")
    const createH3Element = document.createElement("h3")
    createDivElement.setAttribute("class", "letsBegin")
    createH3Element.innerHTML = `Let's Begin The "<span style="color: #079626;">Mini Hackathon</span>"`;
    console.log(createDivElement);
    createDivElement.appendChild(createH3Element);
    countDownTimer.replaceWith(createDivElement);
}

// beginHackathon();

const hackathonCountDown = () => {
    
    const todayDate = new Date()
    // console.log(todayDate);

    const hackathonRemainingTime = hackathonDate.getTime() - todayDate.getTime();
    // console.log(hackathonRemainingTime);

    if (hackathonRemainingTime > 0) {
        
        countDownTimer.children[0].childNodes[0].textContent = Math.floor(hackathonRemainingTime / 1000 / 60 / 60 / 24);

        countDownTimer.children[1].childNodes[0].textContent = (Math.floor(hackathonRemainingTime / 1000 / 60 / 60) - Math.floor(hackathonRemainingTime / 1000 / 60 / 60 / 24) * 24);

        countDownTimer.children[2].childNodes[0].textContent = (Math.floor(hackathonRemainingTime / 1000 / 60) - Math.floor(hackathonRemainingTime / 1000 / 60 / 60) * 60);

        countDownTimer.children[3].childNodes[0].textContent = (Math.floor(hackathonRemainingTime / 1000) - Math.floor(hackathonRemainingTime / 1000 / 60) * 60);
    } else {

        countDownTimer.innerHTML = beginHackathon();

    }

}

setInterval(hackathonCountDown, 1000);