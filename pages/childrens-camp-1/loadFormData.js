// Load form data from localStorage
function loadFormData() {
    const savedData = localStorage.getItem('registrationFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);

        // Populate form fields
        document.getElementById('first_name').value = formData.first_name || '';
        document.getElementById('sahaj_name').value = formData.sahaj_name || '';
        document.getElementById('last_name').value = formData.surname || '';
        document.getElementById('birth_date').value = formData.date_of_birth || '';
        document.getElementById('gender').value = formData.gender || '';
        document.getElementById('country_residence').value = formData.country_of_residence || '';
        document.getElementById('place_of_birth').value = formData.place_of_birth || '';
        document.getElementById('email').value = formData.email || '';
        document.getElementById('arrival_date').value = formData.alternative_arival_date || '';
        document.getElementById('departure_date').value = formData.alternative_departure_date || '';
        document.getElementById('dietary_restrictions').value = formData.dietary_restrictions || '';
        document.getElementById('comments').value = formData.comments || '';
        document.getElementById('share_contact_details').checked = formData.share_contact_details || false;
        document.getElementById('siwm').checked = formData.can_child_swim || false;
        document.getElementById('2_day_hike').checked = formData.camping_on_the_mountains || false;
        document.getElementById('private_share_picture').checked = formData.view_and_share_pictures_after_the_camp || false;
        document.getElementById('share_pictures').checked = formData.share_pictures_for_promotional_purposes || false;
        document.getElementById('privacy_information').checked = formData.privacy_information || false;
    }
}

// Load form data when the page loads
window.addEventListener('load', loadFormData);