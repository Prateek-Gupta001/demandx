document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.signup-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values
        const username = document.getElementById('signup_username').value.trim();
        const email = document.getElementById('signup_email').value.trim();
        const password = document.getElementById('signup_password').value.trim();
        const confirmPassword = document.getElementById('signup_confirm_password').value.trim();

        // Validate input values
        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Perform further validation (e.g., password strength, email format)

        // If all validations pass, you can proceed with form submission or other actions
        // For now, let's just log the input values
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        // Optionally, you can submit the form programmatically
        // form.submit();
    });
});
