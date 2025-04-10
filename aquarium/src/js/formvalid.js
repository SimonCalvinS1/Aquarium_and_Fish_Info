function validateForm(event) {
    event.preventDefault(); //prevent from submission
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("ph").value.trim();
    var email = document.getElementById("email").value.trim();
    var phonePattern = /^[0-9]{10}$/; //10 digits
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //email format
    if (name === "") {
      alert("Please enter your name");
      return false;
    }
    if (!phone.match(phonePattern)) {
      alert("Phone number must be numbers only and exactly 10 digits");
      return false;
    }
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address");
      return false;
    }
    alert("Form submitted successfully!");
    document.getElementById("subscribeForm").submit(); //submit the form
}