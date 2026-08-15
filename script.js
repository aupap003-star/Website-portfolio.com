/* =================================
   MENU MOBILE
================================= */

function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    menu.classList.toggle("active");

}


/* =================================
   TUTUP MENU SAAT LINK DIKLIK
================================= */

const navLinks =
    document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            document
                .getElementById("navMenu")
                .classList
                .remove("active");

        }
    );

});


/* =================================
   BUNGA JATUH
================================= */

const flowerContainer =
    document.getElementById("flowers");

const flowerSymbols = [
    "🌸",
    "🌷",
    "🌺",
    "✿",
    "❀"
];


function createFlower() {

    const flower =
        document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML =
        flowerSymbols[
            Math.floor(
                Math.random() *
                flowerSymbols.length
            )
        ];

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        (12 + Math.random() * 18) + "px";

    const duration =
        7 + Math.random() * 8;

    flower.style.animationDuration =
        duration + "s";

    flower.style.opacity =
        0.4 + Math.random() * 0.6;

    flowerContainer.appendChild(flower);


    setTimeout(function() {

        flower.remove();

    }, duration * 1000);

}


/* Membuat bunga setiap beberapa saat */

setInterval(
    createFlower,
    700
);


/* Bunga pertama */

for (let i = 0; i < 8; i++) {

    setTimeout(
        createFlower,
        i * 300
    );

}


/* =================================
   PROJECT BUTTON
================================= */

function projectMessage(projectName) {

    alert(
        "🌸 Project: " +
        projectName +
        "\n\nProject ini sedang dalam proses pengembangan. ☁️"
    );

}


/* =================================
   TOMBOL KONTAK
================================= */

function sayHello() {

    alert(
        "💗 Senyuman berhasil dikirim!\n\n" +
        "Semoga harimu menyenangkan ☁️🌸"
    );

}