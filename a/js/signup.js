(() => {
    'use strict'
    // Get the form 
    const form = document.querySelector('#signup_form');
    const signupSection = document.querySelector('#signup_section');
    const welcomeSection = document.querySelector('#welcome_section');

    // When submitting form
    form.addEventListener('submit', event => {
        // Stop the default form submission
        event.preventDefault();

        // Check validity of the form
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
        } else {
            // Get the data from the inputs of the user
            const form_data = {
                name: document.querySelector("#full_name").value,
                email: document.querySelector("#email").value,
                contact_number: document.querySelector("#contact_number").value,
                class: document.querySelector("#class_name").value, 
                school: document.querySelector("#school").value,
                diploma: document.querySelector("#diploma").value,
                skill: document.querySelector("#skill").value,
            };

            // Adds the form details to the welcome section
            document.querySelector('#display_name').textContent = form_data.name;
            document.querySelector('#display_email').textContent = form_data.email;
            document.querySelector('#display_contact').textContent = form_data.contact_number;
            document.querySelector('#display_class').textContent = form_data.class;
            document.querySelector('#display_school').textContent = form_data.school;
            document.querySelector('#display_diploma').textContent = form_data.diploma;
            document.querySelector('#display_skill').textContent = form_data.skill;

            // Remove signup and replace with the welcome section
            signupSection.classList.add('d-none');
            welcomeSection.classList.remove('d-none');
        }
    });
})();
