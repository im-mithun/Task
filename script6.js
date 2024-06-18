document
  .getElementById("validationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var hobbies = document.getElementById("hobbies").value;
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("hobbiesError").textContent = "";
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
    }
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required";
    }
    if (password === "") {
      document.getElementById("passwordError").textContent =
        "Password is required";
    }
    if (hobbies === "") {
      document.getElementById("hobbiesError").textContent =
        "Hobbies selection is required";
    }
    if (name !== "" && email !== "" && password !== "" && hobbies !== "") {
      alert("Form submitted successfully!");
    }
  });
