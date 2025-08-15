var tablinks = document.querySelectorAll(".tab-links");
var contents = document.querySelectorAll(".content");

function opentab (event ,tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove ("active-link");
    }
    for (let content of contents) {
       content.classList.remove ("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
