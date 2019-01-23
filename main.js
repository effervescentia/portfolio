var APP_EL = document.getElementById('app');
var TRACER_CURSOR_EL = document.querySelector('.tracer--cursor');
var TRACER_XY_EL = document.querySelector('.tracer--x-y');
var TRACER_X_EL = document.querySelector('.tracer--x');
var TRACER_Y_EL = document.querySelector('.tracer--y');

var centerPoint = [-1, -1];

function renderDots(n, start) {
  var container = document.createDocumentFragment();
  container + 3;

  for (var i = 0; i < n; i++) {
    var el = document.createElement('span');
    el.classList.add('dot', 'dot--' + (start + i));

    container.appendChild(el);
  }

  return container;
}

function calculateDotCount() {
  return Math.floor(APP_EL.clientWidth / 80);
}

function getCurrentDotCount() {
  return APP_EL.getElementsByClassName('dot').length;
}

function calculateCenterPoint() {
  return [APP_EL.clientWidth / 2, APP_EL.clientHeight / 2];
}

var handleResize = (function() {
  var resizing = false;

  return function() {
    if (resizing) return;
    resizing = true;

    var nextDotCount = calculateDotCount();
    var currDotCount = getCurrentDotCount();

    if (nextDotCount > currDotCount) {
      var nextDots = renderDots(nextDotCount - currDotCount, currDotCount);
      APP_EL.appendChild(nextDots);
    } else if (currDotCount > nextDotCount) {
      for (var i = currDotCount; i > nextDotCount; i--) {
        APP_EL.querySelector('.dot--' + (i - 1)).remove();
      }
    }

    centerPoint = calculateCenterPoint();
    resizing = false;
  };
})();

function handleMouseMove(e) {
  var x = e.clientX;
  var y = e.clientY;

  TRACER_XY_EL.style.right = TRACER_X_EL.style.right = TRACER_Y_EL.style.left = TRACER_CURSOR_EL.style.left =
    x + 'px';

  TRACER_XY_EL.style.bottom = TRACER_X_EL.style.top = TRACER_Y_EL.style.bottom = TRACER_CURSOR_EL.style.top =
    y + 'px';
}

// main

APP_EL.appendChild(renderDots(calculateDotCount(), 0));

window.addEventListener('resize', handleResize);
window.addEventListener('mousemove', handleMouseMove);
