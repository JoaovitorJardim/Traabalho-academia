function myFunction() {
    var x = document.getElementById("exemplosenha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }