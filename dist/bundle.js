/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calc() {\r\n// Calculator\r\n\r\n    const result = document.querySelector('.calculating__result span');\r\n    \r\n    let sex, height, weight, age, ratio;\r\n\r\n    if (localStorage.getItem('sex')) {\r\n        sex = localStorage.getItem('sex');\r\n    } else {\r\n        sex = 'female';\r\n        localStorage.setItem('sex', 'female');\r\n    }\r\n\r\n    if (localStorage.getItem('ratio')) {\r\n        ratio = localStorage.getItem('ratio');\r\n    } else {\r\n        ratio = 1.375;\r\n        localStorage.setItem('ratio', 1.375);\r\n    }\r\n\r\n    function calcTotal() {\r\n        if (!sex || !height || !weight || !age || !ratio) {\r\n            result.textContent = '____';\r\n            return;\r\n        }\r\n        if (sex === 'female') {\r\n            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);\r\n        } else {\r\n            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);\r\n        }\r\n    }\r\n\r\n    calcTotal();\r\n\r\n    function initLocalSettings(selector, activeClass) {\r\n        const elements = document.querySelectorAll(selector);\r\n\r\n        elements.forEach(elem => {\r\n            elem.classList.remove(activeClass);\r\n            if (elem.getAttribute('id') === localStorage.getItem('sex')) {\r\n                elem.classList.add(activeClass);\r\n            }\r\n            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {\r\n                elem.classList.add(activeClass);\r\n            }\r\n        });\r\n    }\r\n\r\n    initLocalSettings('#gender div', 'calculating__choose-item_active');\r\n    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');\r\n\r\n    function getStaticInformation(selector, activeClass) {\r\n        const elements = document.querySelectorAll(selector);\r\n\r\n        elements.forEach(elem => {\r\n            elem.addEventListener('click', (e) => {\r\n                if (e.target.getAttribute('data-ratio')) {\r\n                    ratio = +e.target.getAttribute('data-ratio');\r\n                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));\r\n                } else {\r\n                    sex = e.target.getAttribute('id');\r\n                    localStorage.setItem('sex', e.target.getAttribute('id'));\r\n                }\r\n    \r\n                elements.forEach(elem => {\r\n                    elem.classList.remove(activeClass);\r\n                });\r\n    \r\n                e.target.classList.add(activeClass);\r\n    \r\n                calcTotal();\r\n            });\r\n        });\r\n    }\r\n\r\n    getStaticInformation('#gender div', 'calculating__choose-item_active');\r\n    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');\r\n\r\n    function getDynamicInformation(selector) {\r\n        const input = document.querySelector(selector);\r\n\r\n        input.addEventListener('input', () => {\r\n            if (input.value.match(/\\D/g)) {\r\n                input.style.border = \"1px solid red\";\r\n            } else {\r\n                input.style.border = 'none';\r\n            }\r\n            switch(input.getAttribute('id')) {\r\n                case \"height\":\r\n                    height = +input.value;\r\n                    break;\r\n                case \"weight\":\r\n                    weight = +input.value;\r\n                    break;\r\n                case \"age\":\r\n                    age = +input.value;\r\n                    break;\r\n            }\r\n\r\n            calcTotal();\r\n        });\r\n    }\r\n\r\n    getDynamicInformation('#height');\r\n    getDynamicInformation('#weight');\r\n    getDynamicInformation('#age');\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://food_dist/./js/modules/calc.js?\n}");

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction cards() {\r\n  // Используем классы для создание карточек меню\r\n\r\n  class MenuCard {\r\n    constructor(src, alt, title, descr, price, parentSelector, ...classes) {\r\n      this.src = src;\r\n      this.alt = alt;\r\n      this.title = title;\r\n      this.descr = descr;\r\n      this.price = price;\r\n      this.classes = classes;\r\n      this.parent = document.querySelector(parentSelector);\r\n      this.transfer = 3;\r\n      this.changeToBYN();\r\n    }\r\n\r\n    changeToBYN() {\r\n      this.price = this.price * this.transfer;\r\n    }\r\n\r\n    render() {\r\n      const element = document.createElement(\"div\");\r\n\r\n      if (this.classes.length === 0) {\r\n        this.classes = \"menu__item\";\r\n        element.classList.add(this.classes);\r\n      } else {\r\n        this.classes.forEach((className) => element.classList.add(className));\r\n      }\r\n\r\n      element.innerHTML = `\r\n                <img src=${this.src} alt=${this.alt}>\r\n                <h3 class=\"menu__item-subtitle\">${this.title}</h3>\r\n                <div class=\"menu__item-descr\">${this.descr}</div>\r\n                <div class=\"menu__item-divider\"></div>\r\n                <div class=\"menu__item-price\">\r\n                    <div class=\"menu__item-cost\">Цена:</div>\r\n                    <div class=\"menu__item-total\"><span>${this.price}</span> BYN/день</div>\r\n                </div>\r\n            `;\r\n      this.parent.append(element);\r\n    }\r\n  }\r\n\r\n  axios.get(\"http://localhost:3000/menu\").then((response) => {\r\n    response.data.forEach(({ img, altimg, title, descr, price }) => {\r\n      new MenuCard(\r\n        img,\r\n        altimg,\r\n        title,\r\n        descr,\r\n        price,\r\n        \".menu .container\"\r\n      ).render();\r\n    });\r\n  });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);\n\n//# sourceURL=webpack://food_dist/./js/modules/cards.js?\n}");

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ \"./js/services/services.js\");\n\r\n\r\n\r\nfunction forms(formSelector, modalTimerId) {\r\n  // Forms\r\n\r\n  const forms = document.querySelectorAll(formSelector);\r\n\r\n  const message = {\r\n    loading: \"img/form/spinner.svg\",\r\n    success: \"Спасибо! Скоро мы с вами свяжемся\",\r\n    failure: \"Что-то пошло не так...\",\r\n  };\r\n\r\n  forms.forEach((item) => {\r\n    bindPostData(item);\r\n  });\r\n\r\n  function bindPostData(form) {\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n\r\n      let statusMessage = document.createElement(\"img\");\r\n      statusMessage.src = message.loading;\r\n      statusMessage.style.cssText = `\r\n                display: block;\r\n                margin: 0 auto;\r\n            `;\r\n\r\n      form.insertAdjacentElement(\"afterend\", statusMessage);\r\n\r\n      const formData = new FormData(form);\r\n\r\n      const json = JSON.stringify(Object.fromEntries(formData.entries()));\r\n\r\n      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)(\"http://localhost:3000/requests\", json)\r\n        .then((data) => {\r\n          console.log(data);\r\n          showThanksModal(message.success);\r\n          form.reset();\r\n          statusMessage.remove();\r\n        })\r\n        .catch((error) => {\r\n          console.log(error, \"НУ ЧТО ОПЯТЬ!!!\");\r\n          showThanksModal(message.failure);\r\n        })\r\n        .finally(() => {\r\n          form.reset();\r\n        });\r\n    });\r\n  }\r\n\r\n  function showThanksModal(message) {\r\n    const prevModalDialog = document.querySelector(\".modal__dialog\");\r\n\r\n    prevModalDialog.classList.add(\"hide\");\r\n    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);\r\n\r\n    const thanksModal = document.createElement(\"div\");\r\n    thanksModal.classList.add(\"modal__dialog\");\r\n    thanksModal.innerHTML = `\r\n            <div class=\"modal__content\">\r\n                <div class=\"modal__close\" data-close>×</div>\r\n                <div class=\"modal__title\">${message}</div>\r\n            </div>\r\n        `;\r\n    document.querySelector(\".modal\").append(thanksModal);\r\n    setTimeout(() => {\r\n      thanksModal.remove();\r\n      prevModalDialog.classList.add(\"show\");\r\n      prevModalDialog.classList.remove(\"hide\");\r\n      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');\r\n    }, 4000);\r\n  }\r\n\r\n  // fetch('http://localhost:3000/menu')\r\n  // .then(data => data.json())\r\n  // .then(res => console.log(res))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://food_dist/./js/modules/forms.js?\n}");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n  function closeModal(modalSelector) {\r\n    const modal = document.querySelector(modalSelector);\r\n    modal.classList.add(\"hide\");\r\n    modal.classList.remove(\"show\");\r\n    document.body.style.overflow = \"\";\r\n  }\r\n\r\n  function openModal(modalSelector, modalTimerId) {\r\n    const modal = document.querySelector(modalSelector);\r\n    modal.classList.add(\"show\");\r\n    modal.classList.remove(\"hide\");\r\n    document.body.style.overflow = \"hidden\";\r\n\r\n    console.log(modalTimerId)\r\n    if (modalTimerId) {\r\n      clearInterval(modalTimerId);\r\n    }\r\n  }\r\n\r\n  function modal(triggerSelector, modalSelector, modalTimerId) {\r\n\r\n  const modalTrigger = document.querySelectorAll(triggerSelector),\r\n        modal = document.querySelector(modalSelector),\r\n        modalCloseBtn = document.querySelector(\"[data-close]\");\r\n\r\n  modalTrigger.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => openModal(modalSelector, modalTimerId));\r\n  });\r\n\r\n  modalCloseBtn.addEventListener(\"click\", () => closeModal(modalSelector));\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (e.target === modal) {\r\n      closeModal(modalSelector);\r\n    }\r\n  });\r\n\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    if (e.code === \"Escape\" && modal.classList.contains(\"show\")) {\r\n      closeModal(modalSelector);\r\n    }\r\n  });\r\n\r\n  function showModalByScroll() {\r\n    if (\r\n      window.pageYOffset + document.documentElement.clientHeight >=\r\n      document.documentElement.scrollHeight\r\n    ) {\r\n      openModal(modalSelector, modalTimerId);\r\n      window.removeEventListener(\"scroll\", showModalByScroll);\r\n    }\r\n  }\r\n  window.addEventListener(\"scroll\", showModalByScroll);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\r\n\r\n\n\n//# sourceURL=webpack://food_dist/./js/modules/modal.js?\n}");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {\r\n  //slider\r\n  const \r\n    slides = document.querySelectorAll(slide),\r\n    slider = document.querySelector(container),\r\n    prev = document.querySelector(prevArrow),\r\n    next = document.querySelector(nextArrow),\r\n    total = document.querySelector(totalCounter),\r\n    current = document.querySelector(currentCounter),\r\n    slidesWrapper = document.querySelector(wrapper),\r\n    slidesField = document.querySelector(field),\r\n    cardWidth = 650,\r\n    visibleCards = 1;\r\n\r\n    \r\n    (slidesField.style.width = 100 * slides.length + \"%\");\r\n  slidesField.style.display = \"flex\";\r\n  slidesField.style.transition = \"0.5s all\";\r\n  slidesWrapper.style.overflow = \"hidden\";\r\n\r\n  let currentSlide = 0;\r\n  total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;\r\n\r\n  updateCurrentCounter();\r\n  updateSlider();\r\n\r\n  next.addEventListener(\"click\", () => {\r\n    if (currentSlide >= slides.length - visibleCards) {\r\n      currentSlide = 0; // перейти к началу\r\n    } else {\r\n      currentSlide++;\r\n    }\r\n    updateSlider();\r\n    updateCurrentCounter();\r\n    updateActiveDot(currentSlide);\r\n  });\r\n\r\n  prev.addEventListener(\"click\", () => {\r\n    if (currentSlide <= 0) {\r\n      currentSlide = slides.length - visibleCards; // перейти к концу\r\n    } else {\r\n      currentSlide--;\r\n    }\r\n    updateSlider();\r\n    updateCurrentCounter();\r\n    updateActiveDot(currentSlide);\r\n  });\r\n\r\n  function updateSlider() {\r\n    const offset = -currentSlide * cardWidth;\r\n    slidesField.style.transform = `translateX(${offset}px)`;\r\n  }\r\n\r\n  function updateCurrentCounter() {\r\n    const currentNumber = currentSlide + 1;\r\n    current.textContent =\r\n      currentNumber < 10 ? `0${currentNumber}` : currentNumber;\r\n  }\r\n\r\n  const indicators = document.createElement(\"div\");\r\n  indicators.classList.add(\"carousel-indicators\");\r\n  slider.style.position = \"relative\";\r\n\r\n  //dots\r\n\r\n  // Создаем точки для каждого слайда\r\n  slides.forEach((slide, index) => {\r\n    const dot = document.createElement(\"div\");\r\n    dot.classList.add(\"dot\");\r\n\r\n    // Обработчик клика по точке\r\n    dot.addEventListener(\"click\", () => {\r\n      currentSlide = index;\r\n      updateSlider();\r\n      updateCurrentCounter();\r\n      updateActiveDot(index);\r\n    });\r\n\r\n    indicators.appendChild(dot); // добавляем точку в контейнер\r\n  });\r\n\r\n  // Добавляем контейнер с точками в слайдер\r\n  slider.appendChild(indicators);\r\n\r\n  // Функция для обновления активной точки\r\n  function updateActiveDot(index) {\r\n    const dots = document.querySelectorAll(\".dot\");\r\n    dots.forEach((dot, i) => {\r\n      if (i === index) {\r\n        dot.style.opacity = \"1\"; // активная точка\r\n      } else {\r\n        dot.style.opacity = \"0.5\"; // неактивные точки\r\n      }\r\n    });\r\n  }\r\n  // Инициализируем активную точку\r\n  updateActiveDot(currentSlide);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://food_dist/./js/modules/slider.js?\n}");

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {\r\n  \r\n  let tabs = document.querySelectorAll(tabsSelector),\r\n    tabsContent = document.querySelectorAll(tabsContentSelector),\r\n    tabsParent = document.querySelector(tabsParentSelector);\r\n\r\n  function hideTabContent() {\r\n    tabsContent.forEach((item) => {\r\n      item.classList.add(\"hide\");\r\n      item.classList.remove(\"show\", \"fade\");\r\n    });\r\n\r\n    tabs.forEach((item) => {\r\n      item.classList.remove(activeClass);\r\n    });\r\n  }\r\n\r\n  function showTabContent(i = 0) {\r\n    tabsContent[i].classList.add(\"show\", \"fade\");\r\n    tabsContent[i].classList.remove(\"hide\");\r\n    tabs[i].classList.add(activeClass);\r\n  }\r\n\r\n  hideTabContent();\r\n  showTabContent();\r\n\r\n  tabsParent.addEventListener(\"click\", function (event) {\r\n    const target = event.target;\r\n    if (target && target.classList.contains(tabsSelector.slice(1))) {\r\n      tabs.forEach((item, i) => {\r\n        if (target == item) {\r\n          hideTabContent();\r\n          showTabContent(i);\r\n        }\r\n      });\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://food_dist/./js/modules/tabs.js?\n}");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timer(id, deadline) {\r\n\r\n  function getTimeRemaining(endtime) {\r\n    const t = Date.parse(endtime) - Date.parse(new Date()),\r\n      days = Math.floor(t / (1000 * 60 * 60 * 24)),\r\n      seconds = Math.floor((t / 1000) % 60),\r\n      minutes = Math.floor((t / 1000 / 60) % 60),\r\n      hours = Math.floor((t / (1000 * 60 * 60)) % 24);\r\n\r\n    return {\r\n      total: t,\r\n      days: days,\r\n      hours: hours,\r\n      minutes: minutes,\r\n      seconds: seconds,\r\n    };\r\n  }\r\n\r\n  function getZero(num) {\r\n    if (num >= 0 && num < 10) {\r\n      return \"0\" + num;\r\n    } else {\r\n      return num;\r\n    }\r\n  }\r\n\r\n  function setClock(selector, endtime) {\r\n    const timer = document.querySelector(selector),\r\n      days = timer.querySelector(\"#days\"),\r\n      hours = timer.querySelector(\"#hours\"),\r\n      minutes = timer.querySelector(\"#minutes\"),\r\n      seconds = timer.querySelector(\"#seconds\"),\r\n      timeInterval = setInterval(updateClock, 1000);\r\n\r\n    updateClock();\r\n\r\n    function updateClock() {\r\n      const t = getTimeRemaining(endtime);\r\n\r\n      days.innerHTML = getZero(t.days);\r\n      hours.innerHTML = getZero(t.hours);\r\n      minutes.innerHTML = getZero(t.minutes);\r\n      seconds.innerHTML = getZero(t.seconds);\r\n\r\n      if (t.total <= 0) {\r\n        clearInterval(timeInterval);\r\n      }\r\n    }\r\n  }\r\n\r\n  setClock(id, deadline);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://food_dist/./js/modules/timer.js?\n}");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ \"./js/modules/tabs.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./js/modules/timer.js\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ \"./js/modules/cards.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ \"./js/modules/calc.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ \"./js/modules/forms.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  \n  const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 300000);\n  \n  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"[data-modal]\",'.modal', modalTimerId);\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.timer', '2026-01-01');\n  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('form', modalTimerId);\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    container: \".offer__slider\",\n    nextArrow: \".offer__slider-next\",\n    prevArrow: \".offer__slider-prev\",\n    totalCounter: \"#total\",\n    currentCounter: \"#current\",\n    wrapper: \".offer__slider-wrapper\",\n    field: \".offer__slider-inner\",\n    slide: \".offer__slide\"\n  });\n  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\".tabheader__item\", \".tabcontent\", \".tabheader__items\", \"tabheader__item_active\" );\n});\n\n\n\n\n//# sourceURL=webpack://food_dist/./js/script.js?\n}");

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postData: () => (/* binding */ postData)\n/* harmony export */ });\nconst postData = async (url, data) => {\r\n  const res = await fetch(url, {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-type\": \"application/json\",\r\n    },\r\n    body: data,\r\n  });\r\n\r\n  return await res.json();\r\n};\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://food_dist/./js/services/services.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;