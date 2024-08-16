document
  .getElementById('createMemeButton')
  .addEventListener('click', function (event) {
    const imageURL = document.getElementById('imageURL').value;
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;

    if (imageURL !== '') {
      createMeme(imageURL, topText, bottomText);
    } else {
      alert('Please enter an image URL');
    }

    document.getElementById('memeForm').reset();
    document.getElementById('imagePreview').src = 'Blackcat-Lilith.jpg'; // Clear the image preview after generating meme
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
