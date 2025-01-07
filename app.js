//side-bar funcionlidade para abrir e fechar a side bar//

document.getElementById("open-btn").addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("open-sidebar");
    document.querySelector("main").classList.toggle("shifter");
    document.querySelector("footer").classList.toggle("shifter-footer");
});
function selectorItem(clickedItem) {
  // Remove a classe 'active' de todos os itens
  document.querySelectorAll('.side-item').forEach(item => {
      item.classList.remove('active');
  });

  // Adiciona a classe 'active' apenas no item clicado
  clickedItem.classList.add('active');
}




// bottom-bar(moblie) adiciona classe com estilizações com cores diferentes//
function activateItem(clickedItem) {
    // Remove a classe 'active' de todos os itens
    document.querySelectorAll('.bottom-item').forEach(item => {
        item.classList.remove('active1');
    });

    // Adiciona a classe 'active' apenas no item clicado
    clickedItem.classList.add('active1');
}

const carrosselStates = {};

function moveSlide(carrosselId, step) {
  const carrossel = document.querySelector(`#${carrosselId}`);
  const slides = carrossel.querySelector('.slides');
  const totalSlides = slides.children.length;

  carrosselStates[carrosselId].currentIndex += step;

  if (carrosselStates[carrosselId].currentIndex < 0) {
    carrosselStates[carrosselId].currentIndex = totalSlides - 1;
  } else if (carrosselStates[carrosselId].currentIndex >= totalSlides) {
    carrosselStates[carrosselId].currentIndex = 0;
  }

  updateCarrossel(carrosselId);
}

function currentSlide(carrosselId, index) {
  carrosselStates[carrosselId].currentIndex = index;
  updateCarrossel(carrosselId);
}

function updateCarrossel(carrosselId) {
  const carrossel = document.querySelector(`#${carrosselId}`);
  const slides = carrossel.querySelector('.slides');
  const dots = carrossel.querySelectorAll('.dot');

  const index = carrosselStates[carrosselId].currentIndex;
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function startCarrossel(carrosselId) {
  const carrossel = document.querySelector(`#${carrosselId}`);
  const slides = carrossel.querySelector('.slides');
  const indicators = carrossel.querySelector('.indicators');
  const totalSlides = slides.children.length;

  carrosselStates[carrosselId] = { currentIndex: 0 };

  indicators.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.setAttribute('onclick', `currentSlide('${carrosselId}', ${i})`);
    indicators.appendChild(dot);
  }

  updateCarrossel(carrosselId);

  // Adiciona transição automática
  setInterval(() => {
    moveSlide(carrosselId, 1);
  }, 5000); // Altere o tempo conforme necessário
}

// Inicializa todos os carrosséis
document.querySelectorAll('.carrosel').forEach(carrossel => {
  startCarrossel(carrossel.id);
});

 /* Swal.fire({
    icon: "success",
    title: "Enviado com sucesso",
    showConfirmButton: false,
    timer: 1500
  });*/
  





 
