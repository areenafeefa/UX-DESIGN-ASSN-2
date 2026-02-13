let formData = location.search;
formData = formData.substring(1);

// removes plus signs from url
while (formData.indexOf("+") !== -1) {
    formData = formData.replace("+", " ");
}

//decodes url
formData = unescape(formData);

// splits up each question:value pair
let formArray = formData.split("&");

let listofdata = [];

// splits the formarray pair and pushes value to listofdata. 
for (let i = 0; i < formArray.length; i++) {
    let fulldata = formArray[i].split("=");
    if (fulldata[1] !== "") { // if value isnt empty
        let data = fulldata[1];
        listofdata.push(data);

    }
}

// hiding advanced section when user is beginner 
let advsectionparts =  document.querySelectorAll("#advancedsection .advres");
if (listofdata.length < 12) {
    document.getElementById("advancedsection").classList.add("d-none");
    
    for (let advsection of advsectionparts) {
        advsection.classList.remove("formres");
    }
}

let formresults = document.querySelectorAll(".formres");

// assigning the data to each result in the website
for (let i = 0; i < listofdata.length; i++) {
    formresults[i].textContent = listofdata[i];
}