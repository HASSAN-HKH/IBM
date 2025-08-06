function submitFeedback() {
    let name, age, email, job, designation, productType, feedbackText;
    name = document.getElementById("name").value;
    age = parseInt(document.getElementById("age").value);
    email = document.getElementById("email").value;
    job = document.getElementById("job").value;
    designation = document.getElementById("designation").value;
    productType = document.getElementById("productType").value;
    feedbackText = document.getElementById("feedbackText").value;
    document.getElementById("userName").innerText = name;
    document.getElementById("userAge").innerText = age;
    document.getElementById("userEmail").innerText = email;
    document.getElementById("userJob").innerText = job;
    document.getElementById("userDesignation").innerText = designation;
    document.getElementById("userProductChoice").innerText = productType;
    document.getElementById("userFeedback").innerText = feedbackText;
    alert("Thank you for your valuable feedback");
  }
  
  function onSubmit() {
    submitFeedback();
    document.getElementById("userInfo").style.display = "block";
  }
  
  document.getElementById("submitBtn").addEventListener("click", onSubmit);
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submitFeedback();
      document.getElementById("userInfo").style.display = "block";
    }
  });