let modal = document.getElementById('myModal');

let modalContent = document.querySelector('.modal-content');

let btn = document.querySelectorAll('.links li');
btn.forEach(a => {
  a.addEventListener('click', () => {
    let elem = document.querySelector('img');
    if (elem) {
      elem.parentNode.removeChild(elem);
    }

    let imageSrc = a.getAttribute('data-src');
    console.log(imageSrc);

    let image = document.createElement('img');
    image.src = imageSrc;

    console.log(image);

    modalContent.append(image);
    modal.style.display = 'block';
  });
});

let span = document.getElementsByClassName('close')[0];

span.onclick = () => (modal.style.display = 'none');

window.onclick = evt => {
  if (evt.target == modal) {
    modal.style.display = 'none';
  }
};
