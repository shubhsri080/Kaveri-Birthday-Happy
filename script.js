/* =========================================
   OPEN SURPRISE
========================================= */

function openSurprise() {
    createStars();
    createConfetti();

    const button = document.querySelector(".surprise-button");
    const song = document.getElementById("birthdaySong");

    button.innerHTML = "Opening... ✨";
    button.disabled = true;

    // Start Sapphire 🎵
    song.volume = 0.45;
    song.play().catch(error => {
        console.log("Music could not start:", error);
    });

    setTimeout(() => {

        document.querySelector(".story-slide").scrollIntoView({
            behavior: "smooth"
        });

        button.innerHTML = "Ready for the next surprise →";
        button.disabled = false;

    }, 1200);
}   


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    for (let i = 0; i < 90; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add("confetti");


        /*
           Random position
        */

        piece.style.left =
            Math.random() * 100 + "%";


        /*
           Random size
        */

        const size =
            Math.random() * 6 + 5;

        piece.style.width =
            size + "px";

        piece.style.height =
            size * 1.4 + "px";


        /*
           Random animation speed
        */

        piece.style.animationDuration =
            (Math.random() * 1.5 + 2) + "s";


        /*
           Random delay
        */

        piece.style.animationDelay =
            Math.random() * 0.5 + "s";


        /*
           Random rotation
        */

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        /*
           Different shapes
        */

        piece.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";


        /*
           Random opacity
        */

        piece.style.opacity =
            Math.random() * 0.5 + 0.5;


        container.appendChild(piece);


        /*
           Remove after animation
        */

        setTimeout(() => {

            piece.remove();

        }, 4000);

    }

}

function createStars() {

    const container = document.getElementById("star-container");

    // Clear previous stars
    container.innerHTML = "";

    // Create stars
    for (let i = 0; i < 100; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        // Random star size
        const sizeType = Math.random();

        if (sizeType > 0.85) {
            star.classList.add("large");
        } else if (sizeType < 0.35) {
            star.classList.add("small");
        }

        // Random position
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        // Slightly different animation timing
        star.style.animationDelay = Math.random() * 0.4 + "s";

        container.appendChild(star);
    }


    // Create shooting stars
    for (let i = 0; i < 3; i++) {

        const shootingStar = document.createElement("div");

        shootingStar.classList.add("shooting-star");

        shootingStar.style.left = (60 + Math.random() * 35) + "%";
        shootingStar.style.top = (5 + Math.random() * 35) + "%";

        shootingStar.style.animationDelay = (0.2 + i * 0.25) + "s";

        container.appendChild(shootingStar);
    }


    // Remove stars after animation
    setTimeout(() => {
        container.innerHTML = "";
    }, 2200);
}