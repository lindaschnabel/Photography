window.addEventListener("load", function () {
  document.getElementById("my-form").addEventListener("submit", function (e) {
    e.preventDefault(); 
      
      let firstname = document.forms["my-form"]["firstname"].value;
      let lastname = document.forms["my-form"]["lastname"].value;
 
    sessionStorage.setItem("firstname", document.forms["my-form"]["firstname"].value);
    sessionStorage.setItem("lastname", document.forms["my-form"]["lastname"].value);
    sessionStorage.setItem("email", document.forms["my-form"]["email"].value);
 thanks.innerHTML+= "Thanks for submitting!";
});
});

