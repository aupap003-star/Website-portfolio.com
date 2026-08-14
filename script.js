// =========================
// MENU MOBILE
// =========================

function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    menu.classList.toggle("active");

}


// =========================
// TOMBOL KONTAK
// =========================

function showMessage() {

    alert(
        "Halo! 👋 Terima kasih sudah mengunjungi website saya!"
    );

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
            .classList.remove("active");

    });

});