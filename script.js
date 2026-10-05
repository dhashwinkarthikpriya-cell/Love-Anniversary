// ==========================================
// LOVE ANNIVERSARY WEBSITE - MAIN JAVASCRIPT
// ==========================================


// Start Our Journey button
function startJourney() {

    const storySection = document.getElementById("memories");

    if (storySection) {
        const targetPosition =
            storySection.getBoundingClientRect().top +
            window.scrollY -
            40;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
}


// Continue button
function nextSection() {

    const journeySection = document.querySelector(".journey");

    if (journeySection) {
        journeySection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// =========================================
// ROSE MILK MEMORY
// =========================================

let roseMilkTimers = [];

function clearRoseMilkTimers() {
    roseMilkTimers.forEach((timer) => clearTimeout(timer));
    roseMilkTimers = [];
}

function openMemory(memoryName) {

    if (memoryName === "roseMilk") {

        const scene = document.getElementById("roseMilkScene");

        if (!scene) return;

        scene.classList.add("active");

        document.body.style.overflow = "hidden";

        playRoseMilkScene();

    }

    else if (memoryName === "firstILoveYou") {

        const scene =
            document.getElementById("firstILoveYouScene");

        if (!scene) return;

        scene.classList.add("active");

        document.body.style.overflow = "hidden";

        playFirstLoveScene();
    }
}

function playRoseMilkScene() {

    clearRoseMilkTimers();

    const lines = document.querySelectorAll(
        "#roseMilkText .story-line"
    );
    const replayButton = document.querySelector(
        "#roseMilkScene .scene-replay"
    );

    if (!lines.length || !replayButton) {
        return;
    }

    lines.forEach((line) => {
        line.style.display = "none";
        line.style.animation = "none";
    });

    replayButton.style.opacity = "0";

    const timings = [
        1000,
        3500,
        6500,
        9500,
        12500,
        15500,
        18500,
        22000
    ];

    lines.forEach((line, index) => {
        const timer = setTimeout(() => {
            line.style.display = "block";
            line.style.animation = "textReveal 1s ease forwards";
        }, timings[index]);

        roseMilkTimers.push(timer);
    });

    roseMilkTimers.push(setTimeout(() => {
        replayButton.style.opacity = "1";
    }, 23000));
}

function closeMemoryScene() {

    const scene = document.getElementById("roseMilkScene");

    if (!scene) {
        return;
    }

    scene.classList.remove("active");
    document.body.style.overflow = "";

    clearRoseMilkTimers();
}


// ==========================================
// SCROLL REVEAL ANIMATION 
// ==========================================

const revealElements = document.querySelectorAll(
    ".memory-content, .journey, .journey-list div, .ending"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});


// ==========================================
// MOUSE / TOUCH PARALLAX EFFECT
// ==========================================

document.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    document.querySelectorAll(".light").forEach((light, index) => {

        const speed = (index + 1) * 0.5;

        light.style.transform =
            `translate(${x * speed}px, ${y * speed}px)`;

    });

});


// ==========================================
// HEART CLICK EFFECT
// ==========================================

document.addEventListener("click", (event) => {

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.fontSize = "20px";

    heart.style.animation = "clickHeart 1s ease forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

});


// ==========================================
// ADD CLICK HEART ANIMATION
// ==========================================

const heartStyle = document.createElement("style");

heartStyle.innerHTML = `
@keyframes clickHeart {

    0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0.5);
    }

    50% {
        opacity: 1;
        transform: translate(-50%, -100px) scale(1.2);
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -180px) scale(0.8);
    }

}
`;

document.head.appendChild(heartStyle);


// ==========================================
// 09 OCTOBER - FIRST I LOVE YOU MEMORY
// ==========================================

let firstLoveTimers = [];

function clearFirstLoveTimers() {

    firstLoveTimers.forEach(
        (timer) => clearTimeout(timer)
    );

    firstLoveTimers = [];
}


function playFirstLoveScene() {

    clearFirstLoveTimers();

    const lines =
        document.querySelectorAll(
            "#firstILoveYouScene .first-line"
        );

    const replayButton =
        document.querySelector(
            "#firstILoveYouScene .first-love-replay"
        );

    if (!lines.length || !replayButton) {
        return;
    }

    // Reset text
    lines.forEach((line) => {

        line.style.display = "none";

        line.style.animation = "none";

    });

    replayButton.style.opacity = "0";


    // Story timing
    const timings = [
        1000,
        3500,
        6000,
        9000,
        12500,
        15500,
        18500,
        21500,
        25000
    ];


    lines.forEach((line, index) => {

        const timer = setTimeout(() => {

            line.style.display = "block";

            line.style.animation =
                "textReveal 1s ease forwards";

        }, timings[index]);

        firstLoveTimers.push(timer);

    });


    // Replay button
    firstLoveTimers.push(

        setTimeout(() => {

            replayButton.style.opacity = "1";

        }, 28500)

    );
}


// Close 09 October scene
function closeFirstLoveScene() {

    const scene =
        document.getElementById(
            "firstILoveYouScene"
        );

    if (!scene) return;

    scene.classList.remove("active");

    document.body.style.overflow = "";

    clearFirstLoveTimers();
}


// ==========================================
// FINAL ANNIVERSARY CINEMATIC REVEAL
// ==========================================

const finaleElements = document.querySelectorAll(
    ".finale-label, .finale-title, .finale-divider, " +
    ".finale-subtitle, .love-letter, .final-promise, " +
    ".ultimate-heart, .finale-last-message, .finale-signature"
);

finaleElements.forEach((element) => {
    element.classList.add("finale-hidden");
});

const finaleObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const element = entry.target;

            element.classList.remove("finale-hidden");
            element.classList.add("finale-show");

            finaleObserver.unobserve(element);
        });

    },
    {
        threshold: 0.15
    }
);

finaleElements.forEach((element) => {
    finaleObserver.observe(element);
});

// ==========================================
// FLOATING LOVE PARTICLES
// ==========================================

function createLoveParticle() {

    const finale =
        document.querySelector(".anniversary-finale");

    if (!finale) return;

    const particle =
        document.createElement("span");

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "✨",
        "🌸"
    ];

    particle.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    particle.classList.add(
        "floating-love-particle"
    );

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    particle.style.fontSize =
        (10 + Math.random() * 15) + "px";

    finale.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Create particles continuously

setInterval(
    createLoveParticle,
    700
);


// ==========================================
// 🎵 LOVE MUSIC CONTROL
// ==========================================

const loveMusic = document.getElementById("loveMusic");
const musicBtn = document.getElementById("musicBtn");

async function toggleMusic() {

    if (!loveMusic || !musicBtn) return;

    if (loveMusic.paused) {

        try {
            await loveMusic.play();
            musicBtn.innerHTML = "🎶";
            musicBtn.classList.add("playing");
        } catch (error) {
            console.error("Unable to play the background music:", error);
        }

    } else {

        loveMusic.pause();

        musicBtn.innerHTML = "🎵";
        musicBtn.classList.remove("playing");
    }
}


// ==========================================
// ❤️ ENTER OUR STORY
// ==========================================

// ==========================================
// ❤️ ENTER OUR STORY + START MUSIC
// ==========================================

function enterStory() {

    const openingScreen =
        document.getElementById("openingScreen");

    const loveMusic =
        document.getElementById("loveMusic");

    const musicBtn =
        document.getElementById("musicBtn");

    if (!openingScreen) return;

    // Start music after user interaction
    if (loveMusic) {

        loveMusic.play()
            .then(() => {

                if (musicBtn) {
                    musicBtn.innerHTML = "🎶";
                    musicBtn.classList.add("playing");
                }

            })
            .catch(() => {

                // If browser blocks it,
                // user can still use the music button.
                console.log("Music needs manual play.");
            });
    }

    // Hide opening screen
    openingScreen.classList.add("opening-hide");

    setTimeout(() => {

        openingScreen.style.display = "none";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);
}
/* =========================================
   HERO FLOATING LOVE PARTICLES
========================================= */

function createHeroParticle() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const particle = document.createElement("span");

    const symbols = ["♡", "❤️", "💕", "✨", "🌸"];

    particle.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.classList.add("hero-particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        (10 + Math.random() * 14) + "px";

    particle.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    hero.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 11000);
}

setInterval(createHeroParticle, 900);
/* =========================================
   TIMELINE CINEMATIC REVEAL
========================================= */

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("timeline-visible");

            timelineObserver.unobserve(entry.target);

        });

    },
    {
        threshold: 0.18
    }
);

timelineItems.forEach((item) => {
    timelineObserver.observe(item);
});
/* =========================================
   OUR JOURNEY REVEAL
========================================= */

const journeyCards = document.querySelectorAll(".journey-card");

const journeyObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");

            journeyObserver.unobserve(entry.target);

        });

    },
    {
        threshold: 0.15
    }
);

journeyCards.forEach((card) => {
    journeyObserver.observe(card);
});

/* =================================
   OPEN OUR MEMORIES PAGE
================================= */

function openOurMemories() {
    window.location.href = "memories.html";
}
/* =================================
   LOVE QUESTION ANSWER
================================= */

function answerLove(answer) {

    const section = document.getElementById("wouldYouLove");

    if (!section) return;

    let message = "";

    if (answer === "yes") {

        message = `
            <div class="love-answer-screen">
                <div class="answer-heart">❤️</div>

                <p class="answer-small">
                    MY HEART ALREADY KNEW...
                </p>

                <h2>
                    Love you,
                    <span>Papa. ❤️</span>
                </h2>

                <p class="answer-message">
                    If I had to live it all again,
                    <br>
                    I would still choose you.
                </p>
            </div>
        `;

    } else if (answer === "choose") {

        message = `
            <div class="love-answer-screen">
                <div class="answer-heart">💕</div>

                <p class="answer-small">
                    THANK YOU...
                </p>

                <h2>
                    Thanks for your
                    <span>memories, Papa. ❤️</span>
                </h2>

                <p class="answer-message">
                    Every little moment with you
                    <br>
                    will always have a place in my heart.
                </p>
            </div>
        `;
    }

    section.innerHTML = message;

    section.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
function answerLove(answer) {

    const section = document.getElementById("wouldYouLove");

    if (!section) return;

    if (answer === "yes") {

        section.innerHTML = `
            <div class="love-answer-screen">
                <div class="answer-heart">❤️</div>

                <p class="answer-small">
                    MY HEART ALREADY KNEW...
                </p>

                <h2>
                    Love you,
                    <span>Papa. ❤️</span>
                </h2>

                <p class="answer-message">
                    If I had to live it all again,
                    <br>
                    I would still choose you.
                </p>
            </div>
        `;

    }

    else if (answer === "choose") {

        section.innerHTML = `
            <div class="love-answer-screen">
                <div class="answer-heart">💕</div>

                <p class="answer-small">
                    THANK YOU...
                </p>

                <h2>
                    Thanks for your
                    <span>memories, Papa. ❤️</span>
                </h2>

                <p class="answer-message">
                    Every little moment with you
                    <br>
                    will always have a place in my heart.
                </p>
            </div>
        `;

    }

    section.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
document.addEventListener("DOMContentLoaded", function () {

    const yesButton = document.querySelector(".yes-button");
    const chooseButton = document.querySelector(".choose-button");

    if (yesButton) {
        yesButton.addEventListener("click", function () {
            answerLove("yes");
        });
    }

    if (chooseButton) {
        chooseButton.addEventListener("click", function () {
            answerLove("choose");
        });
    }

});
function answerLove(answer) {

    const section = document.getElementById("anniversary");

    if (!section) return;

    if (answer === "yes") {

        section.innerHTML = `
            <div class="love-answer-screen">

                <div class="answer-heart">
                    ❤️
                </div>

                <p class="answer-small">
                    MY HEART ALREADY KNEW...
                </p>

                <h2>
                    Love you,
                    <span>Papa. ❤️</span>
                </h2>

                <p class="answer-message">
                    If I had to live it all again,
                    <br>
                    I would still choose you.
                </p>

            </div>
        `;

    }

    if (answer === "choose") {

        section.innerHTML = `
            <div class="love-answer-screen">

                <div class="answer-heart">
                    💕
                </div>

                <p class="answer-small">
                    THANK YOU...
                </p>

                <h2>
                    Thanks for your
                    <span>memories, Papa. ❤️</span>
                </h2>

                <p class="answer-message">
                    Every little moment with you
                    <br>
                    will always have a place in my heart.
                </p>

            </div>
        `;

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}