// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

if (accordeon) {
    accordeon.querySelectorAll("details").forEach((det) => {
        det.open = false;
    });
}
