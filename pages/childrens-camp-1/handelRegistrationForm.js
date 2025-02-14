document.getElementById('registrationForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form submission

    if (!document.getElementById('privacy_information').checked) {
        displayMessage('Please read and agree to the privacy policy.', 'danger');
        return;
    }

    // TODO: If the validation is successful, send a POST request to the API
    if (!this.checkValidity()) {
        displayMessage('Please fill out all required fields.', 'danger');
        return;
    }

    const formData = new FormData();
    formData.append('attending_as', 'child'); // hidden field
    formData.append('first_name', document.getElementById('first_name').value);
    formData.append('sahaj_name', document.getElementById('sahaj_name').value);
    formData.append('surname', document.getElementById('last_name').value);
    formData.append('date_of_birth', document.getElementById('birth_date').value);
    formData.append('gender', document.getElementById("gender").value);
    formData.append('country_of_residence', document.getElementById('country_residence').value);
    formData.append('place_of_birth', document.getElementById('place_of_birth').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('alternative_arival_date', document.getElementById('arrival_date').value);
    formData.append('alternative_departure_date', document.getElementById('departure_date').value);
    formData.append('dietary_restrictions', document.getElementById('dietary_restrictions').value);
    formData.append('comments', document.getElementById('comments').value);
    formData.append('share_contact_details', document.getElementById('share_contact_details').checked);
    formData.append('can_child_swim', document.getElementById('siwm').checked);
    formData.append('camping_on_the_mountains', document.getElementById('2_day_hike').checked);
    formData.append('view_and_share_pictures_after_the_camp', document.getElementById('private_share_picture').checked);
    formData.append('share_pictures_for_promotional_purposes', document.getElementById('share_pictures').checked);
    // formData.append('camp', null);

    const haccp = document.getElementById('haccp');
    if (haccp) {
        const haccpFile = haccp.files[0];
        formData.append('haccp', haccpFile);
    }

    console.log([...formData.entries()]);

    try {
        const response = await axios.post('http://127.0.0.1:8000/person/create_person/', formData);
        displayMessage(response.data.message, 'success');
    } catch (error) {
        const message = error.response?.data?.error || 'An error occurred.';
        displayMessage(message, 'danger');
    }
});

// document.getElementById('uploadForm').addEventListener('submit', async function (e) {
//   e.preventDefault(); // Prevent form submission

//   const formData = new FormData();
//   const name = document.getElementById('name').value;
//   const surname = document.getElementById('surname').value;

//   if (!name || !surname) {
//     displayMessage('Please fill out both fields.', 'danger');
//     return;
//   }

//   // Convert data to CSV format
//   const csvContent = `Name,Surname\n${name},${surname}`;

//   // Create a Blob from the CSV content
//   const csvBlob = new Blob([csvContent], { type: 'text/csv' });
//   formData.append('file', csvBlob, 'data.csv'); // Append the CSV file

//   try {
//     // Send POST request to the new API endpoint
//     const response = await axios.post('http://127.0.0.1:8000/camp_registration/generate-pdf/', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     displayMessage(response.data.message, 'success');
//   } catch (error) {
//     const message = error.response?.data?.error || 'An error occurred.';
//     displayMessage(message, 'danger');
//   }
// });

function displayMessage(message, type) {
    // const responseDiv = document.getElementById('responseMessage');
    // responseDiv.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}