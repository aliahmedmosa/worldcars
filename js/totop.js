//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down window height from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};


// scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}