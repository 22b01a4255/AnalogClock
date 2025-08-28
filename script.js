function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate the angles for each hand
    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;

    // Rotate the hands
    document.querySelector('.second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initial call to set the clock instantly
updateClock();
