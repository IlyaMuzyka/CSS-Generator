const rangeTopLeft = document.getElementById('top-left-input'),
      rangeTopRight = document.getElementById('top-right-input'),
      rangeBottomLeft = document.getElementById('bottom-left-input'),
      rangeBottomRight = document.getElementById('bottom-right-input');

const ranges = document.querySelectorAll('.generator__input');

const resultTopLeft = document.getElementById('top-left-result'),
      resultTopRight = document.getElementById('top-right-result'),
      resultBottomLeft = document.getElementById('bottom-left-result'),
      resultBottomRight = document.getElementById('bottom-right-result');

const cube = document.getElementById('cube');
const btn = document.getElementById('btn');
const totalResult = document.getElementById('total-result');

const changeRadius = () => {
    resultTopLeft.innerHTML = rangeTopLeft.value;
    resultTopRight.innerHTML = rangeTopRight.value;
    resultBottomLeft.innerHTML = rangeBottomLeft.value;
    resultBottomRight.innerHTML = rangeBottomRight.value;

    cube.style.borderRadius = `${rangeTopLeft.value}px ${rangeTopRight.value}px ${rangeBottomRight.value}px ${rangeBottomLeft.value}px`;
};

const setTotalResult = () => {
    totalResult.innerHTML = `${rangeTopLeft.value}px ${rangeTopRight.value}px ${rangeBottomRight.value}px ${rangeBottomLeft.value}px`;
};

for(let range of ranges) {
    range.addEventListener('input', changeRadius);
}

btn.addEventListener('click', setTotalResult);

