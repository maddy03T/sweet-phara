console.log("Surprise loaded! 💙");

// Optional: specific behavior if needed
document.addEventListener('DOMContentLoaded', () => {
    // Ensure audio volumes are safe
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.volume = 0.8;
    });
});
