function saveFormData() {
    const formData = {
        first_name: document.getElementById('first_name').value,
        sahaj_name: document.getElementById('sahaj_name').value,
        surname: document.getElementById('last_name').value,
        date_of_birth: document.getElementById('birth_date').value,
        gender: document.getElementById('gender').value,
        country_of_residence: document.getElementById('country_residence').value,
        place_of_birth: document.getElementById('place_of_birth').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        alternative_arival_date: document.getElementById('arrival_date').value,
        alternative_departure_date: document.getElementById('departure_date').value,
        dietary_restrictions: document.getElementById('dietary_restrictions').value,
        comments: document.getElementById('comments').value,
        share_contact_details: document.getElementById('share_contact_details').checked,
        can_child_swim: document.getElementById('siwm').checked,
        camping_on_the_mountains: document.getElementById('2_day_hike').checked,
        view_and_share_pictures_after_the_camp: document.getElementById('private_share_picture').checked,
        share_pictures_for_promotional_purposes: document.getElementById('share_pictures').checked,
        privacy_information: document.getElementById('privacy_information').checked,
    };

    // Save to localStorage
    localStorage.setItem('registrationFormData', JSON.stringify(formData));
}

// Attach event listeners to form fields to save data on change
document.querySelectorAll('#registrationForm input, #registrationForm select, #registrationForm textarea').forEach(element => {
    element.addEventListener('input', saveFormData);
    element.addEventListener('change', saveFormData);
});