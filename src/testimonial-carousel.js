const reviewBox = document.querySelector(".review-box");
const reviewsContainer = document.querySelector(".reviews-container");
const reviewersImage = document.querySelector(".reviewers-image");
const review = document.querySelector(".review-text");
const reviewersName = document.querySelector(".reviewers-name");

const reviews = [
  {
    name: "— Ben Cook",
    photo: "images/clients/ben.jpg",
    text: " Horizon is, in my opinion, the easiest platform out there in the crypto investment space. I've been using it since 2019 and havenever had any problems. The Horizon quick updates are in real time and leave you rest assured.",
  },
  {
    name: "— John Doe",
    photo: "images/clients/customer-5.jpg",
    text: "esse ipsa sed repellat nisi deserunt vero eligendi, assumenda nulla dignissimos quaerat omnis commodi cum hic laudantium provident.Dignissimos, libero?",
  },
  {
    name: "— Steve White",
    photo: "images/clients/steve.jpg",
    text: "Lorem whefiwue esse ipsa sed repellat nisi deserunt vero eligendi, aignissimos, libero?",
  },
  {
    name: "— Arem Frickle",
    photo: "images/clients/customer-3.jpg",
    text: "Whaydneoufne kjhweie ewlkv esse ipsa sed repellat nisi deserunt vero eligendi, assumenda nulla dignissimos quaerat omnis commodi cum hic laudantium provident.Dignissimos, libero?",
  },

  {
    name: "— Darn Bluth",
    photo: "images/clients/customer-5.jpg",
    text: "esse ipsa sed repellat nisi deserunt vero eligendi, assumenda nulla dignissimos quaerat omnis commodi cum hic laudantium provident.Dignissimos, libero?",
  },
  {
    name: "— Justine Bernet",
    photo: "images/clients/customer-6.jpg",
    text: "esse ipsa sed repellat nisi deserunt vero eligendi, assumenda nulla dignissimos quaerat omnis commodi cum hic laudantium provident.Dignissimos, libero?",
  },
];
let idx = 1;

function updatereview() {
  const { name, photo, text } = reviews[idx];

  review.innerHTML = text;
  reviewersImage.src = photo;
  reviewersName.innerHTML = name;

  idx++;
  if (idx > reviews.length - 1) {
    idx = 0;
  }
}

setInterval(updatereview, 10000);

const reviewBox2 = document.querySelector(".review-box2");
const reviewsContainer2 = document.querySelector(".reviews-Container2");
const reviewersImage2 = document.querySelector(".reviewers-image2");
const review2 = document.querySelector(".review-text2");
const reviewersName2 = document.querySelector(".reviewers-name2");

const reviews2 = [
  {
    name2: "— John Doe",
    photo2: "images/clients/customer-5.jpg",
    text2:
      "esse ipsa sed repellat nisi deserunt vero eligendi, assumenda nulla dignissimos quaerat omnis commodi cum hic laudantium provident.Dignissimos, libero?",
  },
  {
    name2: "— Steve White",
    photo2: "images/clients/steve.jpg",
    text2:
      "Lorem whefiwue esse ipsa sed repellat nisi deserunt vero eligendi, aignissimos, libero?",
  },
  {
    name2: "— Ben Cook",
    photo2: "images/clients/ben.jpg",
    text2:
      " Horizon is, in my opinion, the easiest platform out there in the crypto investment space. I've been using it since 2019 and havenever had any problems. The Horizon quick updates are in real time and leave you rest assured.",
  },

  {
    name2: "— Justine Bernet",
    photo2: "images/clients/customer-6.jpg",
    text2:
      "esse ipsa sed repellat nisi deserunt vero eligendi, assumenda nulla dignissimos quaerat omnis commodi cum hic laudantium provident.Dignissimos, libero?",
  },
  {
    name2: "— Arem Frickle",
    photo2: "images/clients/customer-3.jpg",
    text2:
      "Whaydneoufne kjhweie ewlkv esse ipsa sed repellat nisi deserunt vero eligendi, assumenda nulla dignissimos quaerat omnis commodi cum hic laudantium provident.Dignissimos, libero?",
  },
  {
    name2: "— Darn Bluth",
    photo2: "images/clients/customer-5.jpg",
    text2:
      "esse ipsa sed repellat nisi deserunt vero eligendi, assumenda nulla dignissimos quaerat omnis commodi cum hic laudantium provident.Dignissimos, libero?",
  },
];
let idx2 = 1;

function updatereview2() {
  const { name2, photo2, text2 } = reviews2[idx2];

  review2.innerHTML = text2;
  reviewersImage2.src = photo2;
  reviewersName2.innerHTML = name2;

  idx2++;
  if (idx2 > reviews2.length - 1) {
    idx2 = 0;
  }
}

setInterval(updatereview2, 10000);
