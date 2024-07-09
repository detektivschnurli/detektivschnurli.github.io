const root = document.querySelector(':root');
const container = document.getElementById('container');
const elementsInfo = document.querySelectorAll("#info1, #info2, #info3, #info4, #info5, #info6, #info7, #info8, #info9")
let page = 1;
let totalMinutes = 30;

function updateScale(transition) {
    let minuteHeight = window.innerHeight / totalMinutes;
    if (transition) {
        container.classList.add('transition');
    }
    root.style.setProperty('--minute', minuteHeight + "px");
}

function updateVisibility() {
    for (let i = 0; i < elementsInfo.length; i++) {
        elementsInfo[i].classList.add('hidden');
    }
    const currentInfo = document.getElementById(`info${page}`);
    if (currentInfo) {
        currentInfo.classList.remove('hidden');
    }
}

function next() {
    page += 1;
    if (page == 2) {
        totalMinutes += 15;
        updateScale(true);
    } else if (page == 3) {
        totalMinutes += 10;
        updateScale(true);
    } else if (page == 4) {
        totalMinutes += 35;
        updateScale(true);
    } else if (page == 5) {
        totalMinutes += 8;
        updateScale(true);
    } else if (page == 6) {
        totalMinutes += 20;
        updateScale(true);
    } else if (page == 7) {
        totalMinutes += 5;
        updateScale(true);
    } else if (page == 8) {
        totalMinutes += 12;
        updateScale(true);
    } else if (page == 9) {
        totalMinutes += 540;
        updateScale(true);
    }
    if (page < 9) {
        updateVisibility();
    } else if (page == 9) {
        document.getElementById('next').innerHTML = "zurück zum Start"
    } else {
        location.reload();
    }
}

window.addEventListener('resize', () => {
    container.classList.remove('transition');
    updateScale();
});

updateScale();
updateVisibility();
