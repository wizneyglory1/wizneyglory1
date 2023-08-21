// click to copy feature on account number
// Get the element that contains the text to be copied
var copyText = document.getElementById("copyText");

// Add a click event listener to the element
copyText.addEventListener("click", function () {
  // Create a new text area element
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = copyText.innerText;

  // Append the text area to the body
  document.body.appendChild(tempTextArea);

  // Select the text in the textarea
  tempTextArea.select();

  // Use the Clipboard API to copy the selected text
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);

  // Provide some visual feedback (optional)
  copyText.innerText = "Account Number Copied!";
  setTimeout(function () {
    copyText.innerText = "8136288921";
  }, 1500); // Reset the text after 1.5 seconds
});

//--------- -Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//--------- adds ... to long text cut short
const div = document.getElementById("product-description");
const content = div.innerHTML;
const truncatedContent = content.slice(0, -4) + "...";
div.innerHTML = truncatedContent;

// bespoke popup
function showPopup() {
  var popup = document.getElementById("bespoke-popup");
  popup.style.display = "block";
}

function redirectToPage(href) {
  window.location.href = href;
}

// add thousand dividers to number
const numberElement = document.getElementById("number");
const number = parseInt(numberElement.textContent, 10);
const formattedNumber = number.toLocaleString();
numberElement.textContent = formattedNumber;

// measurement appointment split page
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".booking-container");

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);

// smoothscrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
