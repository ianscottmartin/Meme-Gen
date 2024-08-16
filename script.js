document
  .getElementById('createMemeButton')
  .addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve values from input fields
    const imageURL = document.getElementById('imageURL').value.trim();
    const topText = document.getElementById('topText').value.trim();
    const bottomText = document.getElementById('bottomText').value.trim();

    // Retrieve error message container
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear any previous error message

    // Check if any field is empty
    if (imageURL === '' || topText === '' || bottomText === '') {
      errorMessage.textContent = 'Please fill in all fields.';
      return; // Stop further execution if fields are missing
    }

    // Proceed with creating the meme if all fields are filled
    createMeme(imageURL, topText, bottomText);

    // Reset form fields
    document.getElementById('memeForm').reset();
  });

function createMeme(imageURL, topText, bottomText) {
  const memeContainer = document.getElementById('memeContainer');

  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme-container-item');

  const memeImgDiv = document.createElement('div');
  memeImgDiv.classList.add('meme');

  const memeImg = document.createElement('img');
  memeImg.src = imageURL;

  const topTextDiv = document.createElement('div');
  topTextDiv.classList.add('top-text');
  topTextDiv.textContent = topText;

  const bottomTextDiv = document.createElement('div');
  bottomTextDiv.classList.add('bottom-text');
  bottomTextDiv.textContent = bottomText;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    memeContainer.removeChild(memeDiv);
  });

  memeImgDiv.appendChild(memeImg);
  memeImgDiv.appendChild(topTextDiv);
  memeImgDiv.appendChild(bottomTextDiv);
  memeDiv.appendChild(memeImgDiv);
  memeDiv.appendChild(deleteButton);

  memeContainer.appendChild(memeDiv);
}
