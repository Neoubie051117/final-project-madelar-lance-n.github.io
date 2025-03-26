document.addEventListener('DOMContentLoaded', function () {
    // Image preview
    document.getElementById('imageUpload').addEventListener('change', function (event) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById('imagePreview').src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    // Form reset
    document.getElementById('clearForm').addEventListener('click', function () {
        document.querySelectorAll('input, select, textarea').forEach(field => {
            if (field.type === 'radio' || field.type === 'checkbox') {
                field.checked = false;
            } else if (field.type === 'file') {
                field.value = '';
                document.getElementById('imagePreview').src = '';
            } else {
                field.value = '';
            }
        });
    });

    // Email validation
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Submit button validation
    document.querySelector('.submit-btn').addEventListener('click', function () {
        const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
            }
        });

        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            isValid = false;
        }

        const imageUploaded = document.getElementById('imageUpload').files.length > 0;
        if (!imageUploaded) {
            isValid = false;
        }

        const emailField = document.querySelector('input[type="email"]');
        if (!validateEmail(emailField.value)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        if (isValid) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });

    // Populate birthdate dropdowns
    function populateBirthdate() {
        const monthSelect = document.getElementById('month');
        const daySelect = document.getElementById('day');
        const yearSelect = document.getElementById('year');

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        months.forEach((month, i) => {
            let option = document.createElement("option");
            option.value = i + 1;
            option.text = month;
            monthSelect.appendChild(option);
        });

        for (let i = 1; i <= 31; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;
            daySelect.appendChild(option);
        }

        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= 1900; i--) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;
            yearSelect.appendChild(option);
        }
    }

    populateBirthdate();
});