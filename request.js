// Array to store request objects
const requests = [];

function submitRequest() {
  
  const descriptionTextarea = document.getElementById('requestDescription');
  const priceInput = document.getElementById("requestPrice");
  const imageInput = document.getElementById('requestImage');

  // Validate user input (consider adding price validation logic)
  if (!validateInput(descriptionTextarea, priceInput)) {
    return;
  }

  const description = descriptionTextarea.value;
  const price = parseFloat(priceInput.value);
  const image = imageInput.files[0];

  // Read image file as data URL (if image is provided)
  if (image) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageData = e.target.result;
      createRequest(description, price, imageData);
      
      
      alert("code reached here")
      document.getElementById("requestPrice").value=""
      document.getElementById("requestDescription").value=""
      document.getElementById("requestImage").value=""
      
    };
    reader.readAsDataURL(image);
  } else {
    createRequest(description, price, null); // No image provided
  }
}

function validateInput(description, price) {
  const errorMessage = "Please enter a description and a price (greater than 0).";
  if (!description.value || !price.value || price.value <= 0) {
    alert(errorMessage);
    return false;
  }
  return true;
}

function createRequest(description, price, imageData) {
  const request = {
    description,
    price,
    imageData,
  };

  requests.push(request);
  displayRequests();

  // Clear form fields after successful submission
  descriptionTextarea.value = "";
  priceInput.value = "";
  imageInput.value = null;
}

function displayRequests() {
  const requestsContainer = document.getElementById('requests');
  requestsContainer.innerHTML = ""; // Clear previous requests

  for (const request of requests) {
    const requestElement = document.createElement('div');
    requestElement.classList.add('request');

    if (request.imageData) {
      const imageElement = document.createElement('img');
      imageElement.src = request.imageData;
      requestElement.appendChild(imageElement);
    }

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('request-description');
    descriptionElement.textContent = request.description;
    requestElement.appendChild(descriptionElement);

    const priceElement = document.createElement('p');
    priceElement.classList.add('request-price');
    priceElement.textContent = `Price: $${request.price.toFixed(2)}`; // Format price with 2 decimal places
    requestElement.appendChild(priceElement);

    // Add elements for seller bidding functionality (optional)
    // ...

    requestsContainer.appendChild(requestElement);
  }
}
