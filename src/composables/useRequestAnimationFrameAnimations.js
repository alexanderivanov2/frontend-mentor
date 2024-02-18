function animateCounter(selector, start, end, duration) {
    const element = document.querySelector(selector);
    let startTime = null;

    // The animation function
    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const nextNumber = Math.min(start + (end - start) * (elapsedTime / duration), end);

        element.textContent = Math.floor(nextNumber);

        if (elapsedTime < duration) {
            requestAnimationFrame(animation);
        } else {
            element.textContent = end; // Ensure it ends on the exact number
        }
    }

    requestAnimationFrame(animation);
}


export {
    animateCounter
}