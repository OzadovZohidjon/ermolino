// RANGE - START

var minSlider = document.getElementById('min');
var maxSlider = document.getElementById('max');

var outputMin = document.getElementById('min-value');
var outputMax = document.getElementById('max-value');

outputMin.innerHTML = `от <b>${minSlider.value}</b>`;
outputMax.innerHTML = `до <b>${maxSlider.value}</b>`;

minSlider.oninput = function(){
 outputMin.innerHTML= `от <b>${this.value}</b>`;    
}

maxSlider.oninput = function(){
 outputMax.innerHTML= `до <b>${this.value}</b>`;    
}

// RANGE - END

// ACTIVE BTN - START

const btns = document.querySelectorAll('.btns__group-btn');

btns.forEach(item => {
  item.addEventListener('click', function(){
    btns.forEach(el => el.classList.remove('active'));

    item.classList.add('active')
  })
})

// ACTIVE BTN - END