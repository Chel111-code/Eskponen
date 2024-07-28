// document.querySelectorAll('.tanya').forEach((button) => {
//   button.addEventListener('click', function () {
//     const nextElement = this.nextElementSibling;
//     if (nextElement) {
//       nextElement.classList.remove('hidden');
//       this.classList.add('hidden');
//     }
//   });
// });

document.querySelectorAll('.tanya').forEach((button) => {
  button.addEventListener('click', function () {
    const nextElement = this.nextElementSibling;
    const parent = this.parentElement;
    const nextSibling = parent.nextElementSibling;
    setTimeout(() => {
      if (nextSibling) {
        nextSibling.classList.remove('hidden');
        this.classList.add('hidden');
      }
    }, 2000);

    if (nextElement) {
      nextElement.classList.remove('hidden');
      this.classList.add('hidden');
    }
  });
});

const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function () {
  const hiddenElements = document.querySelectorAll('#bakteri .flex.hidden');
  const jadiBakteri = document.getElementById('jadiBakteri');

  toggleButton.classList.add('cursor-not-allowed', 'opacity-40');
  document.getElementById('tunjukplay').classList.add('hidden');

  hiddenElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.remove('hidden');
    }, index * 500); // Adjust the timing (500ms) as needed
  });

  // Calculate total delay
  const totalDelay = hiddenElements.length * 500;

  // Remove 'hidden' class from 'jadiBakteri' after all elements are shown
  setTimeout(() => {
    jadiBakteri.classList.remove('hidden');
  }, totalDelay);

  const mariMemahami = document.getElementById('mariMemahami');
  setTimeout(() => {
    mariMemahami.classList.remove('hidden');
    mariMemahami.scrollIntoView({ behavior: 'smooth' });
  }, totalDelay + 2000);
});
