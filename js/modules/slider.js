function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
  //slider
  const 
    slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    cardWidth = 650,
    visibleCards = 1;

    
    (slidesField.style.width = 100 * slides.length + "%");
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";
  slidesWrapper.style.overflow = "hidden";

  let currentSlide = 0;
  total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;

  updateCurrentCounter();
  updateSlider();

  next.addEventListener("click", () => {
    if (currentSlide >= slides.length - visibleCards) {
      currentSlide = 0; // перейти к началу
    } else {
      currentSlide++;
    }
    updateSlider();
    updateCurrentCounter();
    updateActiveDot(currentSlide);
  });

  prev.addEventListener("click", () => {
    if (currentSlide <= 0) {
      currentSlide = slides.length - visibleCards; // перейти к концу
    } else {
      currentSlide--;
    }
    updateSlider();
    updateCurrentCounter();
    updateActiveDot(currentSlide);
  });

  function updateSlider() {
    const offset = -currentSlide * cardWidth;
    slidesField.style.transform = `translateX(${offset}px)`;
  }

  function updateCurrentCounter() {
    const currentNumber = currentSlide + 1;
    current.textContent =
      currentNumber < 10 ? `0${currentNumber}` : currentNumber;
  }

  const indicators = document.createElement("div");
  indicators.classList.add("carousel-indicators");
  slider.style.position = "relative";

  //dots

  // Создаем точки для каждого слайда
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    // Обработчик клика по точке
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
      updateCurrentCounter();
      updateActiveDot(index);
    });

    indicators.appendChild(dot); // добавляем точку в контейнер
  });

  // Добавляем контейнер с точками в слайдер
  slider.appendChild(indicators);

  // Функция для обновления активной точки
  function updateActiveDot(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.style.opacity = "1"; // активная точка
      } else {
        dot.style.opacity = "0.5"; // неактивные точки
      }
    });
  }
  // Инициализируем активную точку
  updateActiveDot(currentSlide);
}

export default slider;