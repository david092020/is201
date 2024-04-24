<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Example validation: check if any field is empty
    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    
    // replace with submisssion code once server is)
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        
        // Example validation: check if any field is empty
        if (!name || !email || !message) {
            alert("Please fill in all fields");
            return;
        }
        
        // Construct the request body
        var formData = {
            name: name,
            email: email,
            message: message
        };
        
        // Make an AJAX request to your server
        fetch('your-server-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            // Handle successful form submission
            alert("Form submitted successfully!");
            document.getElementById("contactForm").reset(); // Reset form after submission
        })
        .catch(function(error) {
            // Handle errors
            console.error('There was a problem with the form submission:', error);
        });
    });
    
});
</script>