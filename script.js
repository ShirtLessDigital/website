console.log("Website Loaded");
console.log("Blog Page Loaded");
console.log("Tips Page Loaded");
console.log("Resources Page Loaded");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for contacting us! We will get back to you soon.");
});
