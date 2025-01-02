document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-link").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  });

  var n = 0;
  document.getElementById("navimg").addEventListener("click", function () {
    if (n == 0) {
      console.log(n);
      document.getElementById("ul").style.display = 'block';
      n = 1;
    } else {
      console.log(n);
      document.getElementById("ul").style.display = 'none';
      n = 0;
    }
  });
});
