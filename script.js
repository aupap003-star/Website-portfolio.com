// =========================
// MENU MOBILE
// =========================

function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    menu.classList.toggle("active");

}


// =========================
// TUTUP MENU SETELAH DIKLIK
// =========================

const links =
    document.querySelectorAll("#navMenu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList
            .remove("active");

    });

});


// =========================
// PROJECT
// =========================

function showProject(name) {

    alert(
        "✨ Project " +
        name +
        " sedang dikembangkan!"
    );

}


// =========================
// TOMBOL KONTAK
// =========================

function sayHello() {

    alert(
        " Terima kasih sudah berkunjung! " +
        "Semoga harimu menyenangkan ☁️"
    );

}