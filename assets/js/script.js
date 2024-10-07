let currentIndex = 0;
const intervalTime = 3000; // Tempo em milissegundos para trocar automaticamente os slides
let autoSlideInterval;
let isSliding = false; // Variável para evitar cliques repetidos durante a transição

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Ajusta o índice para que seja cíclico
  currentIndex = (index + totalSlides) % totalSlides;

  const offset = -currentIndex * 100;
  document.querySelector('.carrossel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  if (isSliding) return; // Impedir cliques repetidos
  isSliding = true;
  showSlide(currentIndex + 1);
  setTimeout(() => isSliding = false, 500); // Definir o tempo da transição de slide
}

function prevSlide() {
  if (isSliding) return; // Impedir cliques repetidos
  isSliding = true;
  showSlide(currentIndex - 1);
  setTimeout(() => isSliding = false, 500); // Definir o tempo da transição de slide
}

// Função para trocar automaticamente os slides
function autoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, intervalTime);
}

// Pausar o carrossel automático ao interagir com os botões
function pauseAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Iniciar o carrossel automático ao carregar a página
window.onload = function() {
  showSlide(currentIndex);
  autoSlide();
};

// Adicionar event listeners para pausar o carrossel ao interagir com os botões
document.querySelector('.next').addEventListener('click', () => {
  pauseAutoSlide();
  nextSlide();
  autoSlide(); // Reiniciar o carrossel automático
});

document.querySelector('.prev').addEventListener('click', () => {
  pauseAutoSlide();
  prevSlide();
  autoSlide(); // Reiniciar o carrossel automático
});

