/* ADVANCED SECTION */

// only showing advanced section should user be intermediate or advanced
let advbscollapse = new bootstrap.Collapse("#advancedsection", 
    { toggle: false 
    }
);

document.getElementById("skill").addEventListener("change", function () {

    let advancedsectionitems = document.querySelectorAll(".advanceditem");

    if (this.value == "Advanced" || this.value == "Intermediate") {
        advbscollapse.show();

        for (let advanceditem of advancedsectionitems) {
            advanceditem.setAttribute("required", "required");
            }
    }

    else {  // hides section if user selects beginner 

        advbscollapse.hide();

        for (let advanceditem of advancedsectionitems) {
            advanceditem.removeAttribute("required");
            document.getElementById("performance").selectedIndex = 0;
            document.getElementById("experience").value = "";

        }
    }
});

let advancedsection = document.getElementById("advancedsection");

// if user reloads page, saved data still applies the hide/unhide

if (document.getElementById("skill").value == "Advanced" || (document.getElementById("skill").value == "Intermediate")) {

    advancedsection.classList.remove("d-none");
    for (let advanceditem of advancedsectionitems) {
        advanceditem.setAttribute("required", "required");
    }
}

/* INSTRUMENT SECTION */

let orchinstruments = document.getElementById("instrument");
let orchsections = document.getElementById("section");

// list of instruments and corresponding section

let listofinstruments = [
    { name: "Violin", section: "Strings" },
    { name: "Viola", section: "Strings" },
    { name: "Cello", section: "Strings" },
    { name: "Double Bass", section: "Strings" },
    { name: "Flute", section: "Woodwind" },
    { name: "Clarinet", section: "Woodwind" },
    { name: "Oboe", section: "Woodwind" },
    { name: "Bassoon", section: "Woodwind" },
    { name: "Snare Drum", section: "Percussion" },
    { name: "Timpani", section: "Percussion" },
    { name: "Bass Drum", section: "Percussion" },
    { name: "Cymbals", section: "Percussion" }
];

// function to make the array of instruments into selections for dropdown

function addinstruments(instrumentslist) {
    orchinstruments.innerHTML = '<option value="">Choose your instrument</option>';

    for (let i of instrumentslist) {
        let option = document.createElement("option");
        option.value = i.name;
        option.textContent = i.name;
        orchinstruments.appendChild(option);
    }
}

addinstruments(listofinstruments)

// filters array of instruments depending on selected section and in turn selections for dropdown

orchsections.addEventListener("change", function () {
    let selectedsection = orchsections.value;

    if (selectedsection == "") {
        // if no section selected, show all
        addinstruments(listofinstruments);
    }

    else {
        // filters based on selection
        let filteredList = [];

        for (let instrument of listofinstruments) {
            if (instrument.section == selectedsection) {
                filteredList.push(instrument);
            }
        }

        addinstruments(filteredList);
    }
});

orchinstruments.addEventListener("change", function () {

    let selectedinstrument = orchinstruments.value;

    if (selectedinstrument == "") {
        orchsections.value = "";
    }

    // find section that matches instrument
    for (let instrument of listofinstruments) {
        if (instrument.name == selectedinstrument) {
            orchsections.value = instrument.section;
        }
    }
});