document.querySelectorAll('.tanya').forEach((button, index, buttons) => {
  button.addEventListener('click', function () {
    const nextElement = this.nextElementSibling;
    const parent = this.parentElement;
    const nextSibling = parent.nextElementSibling;
    const mariEksplorasi = document.getElementById('mariEksplorasi');

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

    setTimeout(() => {
      if (index === buttons.length - 1) {
        mariEksplorasi.classList.remove('hidden');
        // Scroll to a specific part of the mariEksplorasi element
        mariEksplorasi.window.scrollBy({
          top: 400, // Adjust this value as needed
          behavior: 'smooth',
        });
      }
    }, 2000);
    // Check if this is the last button
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
  const mariBerpikir = document.getElementById('mariBerpikir');
  setTimeout(() => {
    mariMemahami.classList.remove('hidden');
    mariMemahami.scrollIntoView({ behavior: 'smooth' });
    mariBerpikir.classList.remove('hidden');
    mariBerpikir.scrollIntoView({ behavior: 'smooth' });
  }, totalDelay + 2000);
});

function addEventListeners() {
  const checkAnswerButtons = document.querySelectorAll('.checkAnswerButton');
  const clearButtons = document.querySelectorAll('.clearButton');
  const kesimpulan = document.getElementById('Kesimpulan');
  const section2 = document.getElementById('section2');

  function checkAllAnswers() {
    let allCorrect = true;
    document.querySelectorAll('.answerInput').forEach((input, idx) => {
      const correct = input.getAttribute('data-answer');
      if (input.value != correct) {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      kesimpulan.classList.remove('hidden');
      kesimpulan.scrollIntoView({ behavior: 'smooth' });
      section2.classList.remove('hidden');
    }
  }

  checkAnswerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const inputElement = document.querySelectorAll('.answerInput')[index];
      const userAnswer = inputElement.value;
      const correctAnswer = inputElement.getAttribute('data-answer');
      const resultMessage = document.querySelectorAll('.resultMessage')[index];

      if (userAnswer == correctAnswer) {
        resultMessage.textContent = 'Jawaban benar!';
        resultMessage.classList.remove('text-red-400');
        const audioElement2 = document.getElementById('myAudio2');
        audioElement2.play();
        resultMessage.classList.add('text-hijau');
      } else {
        resultMessage.textContent = 'Jawaban salah, coba lagi.';
        const audioElement = document.getElementById('myAudio');
        audioElement.play();
        resultMessage.classList.remove('text-hijau');
        resultMessage.classList.add('text-red-400');
      }

      // Check if all answers are correct
      checkAllAnswers();
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
  const table = document.querySelector('table');

  const inputs = table.querySelectorAll('input[type="text"]');
  let allCorrect = true;
  let allFilled = true;

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      allFilled = false;
    }
    if (input.value.trim() !== input.dataset.answer) {
      allCorrect = false;
    }
  });

  const resultMessage2 = document.getElementById('resultMessage2');
  if (!allFilled) {
    resultMessage2.textContent = 'Kamu harus menjawab semuanya!';
    resultMessage2.classList.remove('text-hijau', 'font-semibold');
    resultMessage2.classList.remove('text-red-400', 'font-semibold');
    resultMessage2.classList.add('text-yellow-400', 'font-semibold');
    const audioElement3 = document.getElementById('myAudio3');
    audioElement3.play();
  } else if (allCorrect) {
    const section3 = document.getElementById('section3');
    const section3anak = document.getElementById('section3anak');
    resultMessage2.textContent = 'Jawaban benar!';
    resultMessage2.classList.remove('text-red-400', 'font-semibold');
    const audioElement2 = document.getElementById('myAudio2');
    audioElement2.play();
    resultMessage2.classList.add('text-hijau', 'font-semibold');
    resultMessage2.classList.remove('text-yellow-400', 'font-semibold');
    setTimeout(() => {
      section3.classList.remove('hidden');
      section3anak.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  } else {
    resultMessage2.textContent = 'Ada Jawaban yang salah, coba lagi.';
    const audioElement = document.getElementById('myAudio');
    audioElement.play();
    resultMessage2.classList.remove('text-hijau', 'font-semibold');
    resultMessage2.classList.add('text-red-400', 'font-semibold');
    resultMessage2.classList.remove('text-yellow-400', 'font-semibold');
  }
});

document.getElementById('clearButton2').addEventListener('click', function () {
  const table = document.querySelector('table');
  const inputs = table.querySelectorAll('input[type="text"]');
  inputs.forEach((input) => {
    input.value = '';
  });
  document.getElementById('resultMessage2').textContent = '';
});

function addEventListenersKegiatan3() {
  var checkAnswerButtons3 = document.querySelectorAll('#kegiatan3 .checkAnswerButton3');
  var clearButtons3 = document.querySelectorAll('#kegiatan3 .clearButton3');

  checkAnswerButtons3.forEach(function (button, index) {
    button.addEventListener('click', function () {
      var inputElements3 = document.querySelectorAll('#kegiatan3 .answerInput3');
      var userAnswer3 = inputElements3[index].value;
      var correctAnswer3 = inputElements3[index].getAttribute('data-answer');
      var resultMessage3 = document.querySelectorAll('#kegiatan3 .resultMessage3')[index];

      if (userAnswer3 === correctAnswer3) {
        resultMessage3.textContent = 'Jawaban benar!';
        resultMessage3.classList.remove('text-red-400', 'font-semibold');
        var audioElement2 = document.getElementById('myAudio2');
        audioElement2.play();
        resultMessage3.classList.add('text-hijau', 'font-semibold');
      } else {
        resultMessage3.textContent = 'Jawaban salah, coba lagi.';
        var audioElement = document.getElementById('myAudio');
        audioElement.play();
        resultMessage3.classList.remove('text-hijau', 'font-semibold');
        resultMessage3.classList.add('text-red-400', 'font-semibold');
      }

      // Menghapus pesan setelah 5 detik
      // setTimeout(function() {
      //   resultMessage3.textContent = '';
      // }, 5000);
    });
  });

  clearButtons3.forEach(function (button, index) {
    button.addEventListener('click', function () {
      var inputElements3 = document.querySelectorAll('#kegiatan3 .answerInput3');
      inputElements3[index].value = '';
      var resultMessage3 = document.querySelectorAll('#kegiatan3 .resultMessage3')[index];
      resultMessage3.textContent = '';
    });
  });
}

addEventListenersKegiatan3();
