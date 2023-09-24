document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    console.log("test");
    emailjs.init("GS-LkbWjOfNwNVSLD");

    const params = {
        from_email: email,
        from_name: name, 
        subject: subject,
        message: message
    };

    if (!subject) {
        const result = confirm ("Subject is empty. Are you sure you want to send the email?");
        if (result === true) {
            sendEmail();
        } else {
            // Do not send the email!
            // Note: You do not need the else, you can omit it.
        }
    } else {
        sendEmail();
    }
    
    // Fucntion to sent the email
    function sendEmail() {
    // Here you are using the EmailJS library to send the request (the email)
    // The fir param is your Service ID ()
        emailjs.send("service_168u6ef", "template_575umkm",params).then(function (response){
            alert("Email was successfully sent!");
            form.reset(); 

        }, function (error) {
            alert("Error sending email");
        });

    
    }

});