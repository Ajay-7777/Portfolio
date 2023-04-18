(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
// Add event listener to "Download CV" button
document.getElementById("download-cv").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
  
    var link = document.createElement("a"); // Create a new link element
    link.href = this.href; // Set the href of the link to the href of the button
    link.download = this.download; // Set the download attribute of the link to the download attribute of the button
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Click the link to trigger the download
    document.body.removeChild(link); // Remove the link from the body
  });
  
