function muteAdAndSkip() {
    let video = document.querySelector("video");
    let skipButton = document.querySelector(".ytp-skip-ad-button");

    if (document.querySelector(".ad-showing")) {
        if (video) {
            video.muted = true;  // Mute when ad is playing
        }
    } else {
        if (video) {
            video.muted = false;  // Unmute after ad
        }
    }

    if (skipButton) {
        skipButton.click();  // Click skip ad button
    }
}

// Run the function every second to check for ads
setInterval(muteAdAndSkip, 500);
