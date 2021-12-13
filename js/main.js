$(document).ready(function () {
  var currentFloor = 2; // переменная с текущим этажом
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG

  // функция при наведении мышью на этаж

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс этаж
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });

  // отслеживаем клик по кнопке вверх

  counterUp.on("click", function () {
    //проверяем значение этажа, не больше 18
    if (currentFloor < 18) {
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // форматируем переменную с этажом
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  // отслеживаем клик по кнопке вниз

  counterDown.on("click", function () {
    //проверяем значение этажа, не меньше 2
    if (currentFloor > 2) {
      currentFloor--; // убавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // форматируем переменную с этажом
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });
});
