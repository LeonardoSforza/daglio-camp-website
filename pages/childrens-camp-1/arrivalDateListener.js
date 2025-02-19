document.addEventListener('DOMContentLoaded', function () {
    // Arrival Date Exception
    const arrivalCheckbox = document.getElementById('arrival_date_exception');
    const alternateArrivalDateField = document.getElementById('alternate_arrival_date_field');
    const arrivalDateInput = document.getElementById('arrival_date');

    alternateArrivalDateField.style.display = 'none';
    arrivalCheckbox.addEventListener('change', function () {
        if (arrivalCheckbox.checked) {
            alternateArrivalDateField.style.display = 'block';
            arrivalDateInput.setAttribute('required', true); // Add required attribute
        } else {
            alternateArrivalDateField.style.display = 'none';
            arrivalDateInput.removeAttribute('required'); // Remove required attribute
        }
    });

    // Departure Date Exception
    const departureCheckbox = document.getElementById('departure_date_exception');
    const alternateDepartureDateField = document.getElementById('alternate_departure_date_field');
    const departureDateInput = document.getElementById('departure_date');

    alternateDepartureDateField.style.display = 'none';
    departureCheckbox.addEventListener('change', function () {
        if (departureCheckbox.checked) {
            alternateDepartureDateField.style.display = 'block';
            departureDateInput.setAttribute('required', true); // Add required attribute
        } else {
            alternateDepartureDateField.style.display = 'none';
            departureDateInput.removeAttribute('required'); // Remove required attribute
        }
    });
});
