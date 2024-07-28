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
      element.classList.toggle('hidden');
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

function addEventListeners() {
  const checkAnswerButtons = document.querySelectorAll('.checkAnswerButton');
  const clearButtons = document.querySelectorAll('.clearButton');

  checkAnswerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const inputElement = document.querySelectorAll('.answerInput')[index];
      const userAnswer = inputElement.value;
      const correctAnswer = inputElement.getAttribute('data-answer');
      const resultMessage = document.querySelectorAll('.resultMessage')[index];
      if (userAnswer == correctAnswer) {
        resultMessage.textContent = 'Jawaban benar!';
        resultMessage.classList.remove('text-merah');
        const audioElement2 = document.getElementById('myAudio2');
        audioElement2.play();
        resultMessage.classList.add('text-hijau');
      } else {
        resultMessage.textContent = 'Jawaban salah, coba lagi.';
        const audioElement = document.getElementById('myAudio');
        audioElement.play();
        resultMessage.classList.remove('text-hijau');
        resultMessage.classList.add('text-merah');
      }

      // Menghapus pesan setelah 5 detik
      // setTimeout(() => {
      //   resultMessage.textContent = '';
      // }, 5000);
    });
  });

  clearButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.answerInput')[index].value = '';
      document.querySelectorAll('.resultMessage')[index].textContent = '';
    });
  });
}

// Add event listeners when the document is loaded
document.addEventListener('DOMContentLoaded', addEventListeners);

document.getElementById('checkAnswerButton2').addEventListener('click', function () {
  const inputs = document.querySelectorAll('input[type="text"]');
  let allCorrect = true;
  let allFilled = true;

  inputs.forEach((input) => {
    if (input.value === '') {
      allFilled = false;
    }
    if (input.value !== input.dataset.answer) {
      allCorrect = false;
    }
  });

  const resultMessage2 = document.getElementById('resultMessage2');
  if (!allFilled) {
    resultMessage2.textContent = 'Kamu harus menjawab semuanya!';
    resultMessage2.classList.remove('text-hijau');
    resultMessage2.classList.remove('text-merah');
    resultMessage2.classList.add('text-yellow-400', 'font-semibold');
    const audioElement3 = document.getElementById('myAudio3');
    audioElement3.play();
  } else if (allCorrect) {
    resultMessage2.textContent = 'Jawaban benar!';
    resultMessage2.classList.remove('text-merah');
    const audioElement2 = document.getElementById('myAudio2');
    audioElement2.play();
    resultMessage2.classList.add('text-hijau', 'font-semibold');
  } else {
    resultMessage2.textContent = 'Ada Jawaban yang salah, coba lagi.';
    const audioElement = document.getElementById('myAudio');
    audioElement.play();
    resultMessage2.classList.remove('text-hijau');
    resultMessage2.classList.add('text-merah', 'font-semibold');
  }
});

document.getElementById('clearButton2').addEventListener('click', function () {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach((input) => {
    input.value = '';
  });
  document.getElementById('resultMessage2').textContent = '';
});
