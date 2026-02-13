document.onload="document.body.style.opacity='1'"

/* HOME NAVBAR SCRIPTS */

let homenavlinks = document.querySelectorAll("#homenavbar .nav-link");
let sections = document.querySelectorAll("section")
let smallhomenavlinks = document.querySelectorAll("#homenavbarsmall .nav-link");
let smallnavbartext = document.getElementById("smallnavbartext")

/* collapses bootstrap navbar */
let bscollapse = new bootstrap.Collapse(smallnavbarlinks, {
  toggle: false
})

let clickonlyactive = function (homenavlinks) { // function to make only the clicked section of home navbar have the class "active"

  for (let link of homenavlinks) {

    link.onclick = function () {

      for (i of homenavlinks) {
        i.classList.remove("active");
      }

      link.classList.add("active");

      // collapsing navbar on click of section for small screens 

      bscollapse.hide();
      smallnavbartext.textContent = link.textContent;

    }
  }
}

clickonlyactive(homenavlinks)
clickonlyactive(smallhomenavlinks)

// changes name of small navbar as you scroll and adds active class to navlink of section you are

window.addEventListener("scroll", function () {
  let newnavname;

  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];

    if (window.scrollY >= section.offsetTop - 90) {

      newnavname = section.getAttribute("data-name");

      for (let i of homenavlinks) {
        i.classList.remove("active");
      }

      for (let i of smallhomenavlinks) {
        i.classList.remove("active");
      }

      homenavlinks[i].classList.add("active");
      smallhomenavlinks[i].classList.add("active");

    }
  }

  if (newnavname && smallnavbartext.textContent !== newnavname) {
    smallnavbartext.textContent = newnavname;
  }
});

/* ACHIEVEMENTS SECTION SCRIPTS */

let carousel = document.getElementById("achievementcarousel");
let desctitle = document.getElementById("carouselcaptiontitle");
let desctext = document.getElementById("carouselcaption");

// changes description below carousel slide when it switches 

carousel.addEventListener("slide.bs.carousel", function(e) {
  desctitle.textContent = e.relatedTarget.getAttribute("data-title");
  desctext.textContent = e.relatedTarget.getAttribute("data-caption");
})