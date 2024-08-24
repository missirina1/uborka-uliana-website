// Получаем все кнопки
const buttons = document.querySelectorAll(".services__btn");

// Проходимся по каждой кнопке и добавляем обработчик событий
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const popupId = button.getAttribute("data-popup");
    const popupOverlay = document.getElementById(popupId);
    popupOverlay.style.display = "block";
  });
});

// Получаем все всплывающие окна и добавляем обработчик закрытия
const popups = document.querySelectorAll(".services__popup-overlay");

popups.forEach((popupOverlay) => {
  const popupContent = popupOverlay.querySelector(".services__popups");

  // Закрытие при клике на затемненный фон
  popupOverlay.addEventListener("click", () => {
    popupOverlay.style.display = "none";
  });

  // Остановка всплытия события при клике на само окно
  popupContent.addEventListener("click", (event) => event.stopPropagation());
});
