//let CarrouselBackground = require('./CarrouselBackground.js');

(()=>{
  window.onload = () => {
    let rightArrow = document.getElementById("rigth-arrow");
    let leftArrow = document.getElementById("left-arrow");
    let containerHome = document.getElementsByClassName("container-home")[0];
    let containerHomeClasses = containerHome.classList;
    let numberBackgroundPosition = Number(containerHomeClasses[1][8]);
    let buttonsDivs = document.getElementsByClassName("btn");
    let infoClasses = document.getElementsByClassName("info")[0].classList;
    let texts = document.getElementsByClassName('text');
    
    let Carru = new CarrouselBackground('./img/background.jpg',leftArrow,rightArrow,containerHome,data);
    console.log(Carru)


    for (let index = 0; index < buttonsDivs.length; index++) {
      const element = buttonsDivs[index];
      element.addEventListener('click', ()=>{
        numberBackgroundPosition = Number(element.getAttribute("data-value"))
        events();
        changePositionByClass(numberBackgroundPosition);
      })
      
    }

    rightArrow.addEventListener('click', ()=>{
      changePositionByClass(numberBackgroundPosition += 1)
      events()
    });

    leftArrow.addEventListener('click', ()=>{
      changePositionByClass(numberBackgroundPosition -= 1)
      events()
    })


    function events () {
      numberBackgroundPosition !== 9 && hideInfo();
      leftArrow.style.visibility = 'inherit';
      removeAllActiveTxt();
      if (numberBackgroundPosition === 0) leftArrow.style.visibility = 'hidden';
      if (numberBackgroundPosition === 9) showInfo();
      containerHome.addEventListener("transitionend", ()=>{
        texts[numberBackgroundPosition] && texts[numberBackgroundPosition].classList.add("txt-current-active");
      })
    }
    function changePositionByClass (positionToSet) {
      containerHomeClasses.remove(containerHomeClasses[1]);
      containerHomeClasses.add(`position${positionToSet}`);
      updateBackColorBtn()
    }
    function updateBackColorBtn () {
      for (let index = 0; index < buttonsDivs.length; index++) {
        const element = buttonsDivs[index];
        element.classList.remove('btn-current-active');
        if (index === numberBackgroundPosition) element.classList.add('btn-current-active');
      }
    }
    function removeAllActiveTxt () {
      for (let index = 0; index < texts.length; index++) {
        const element = texts[index];
        element.classList.remove("txt-current-active")
      }
    }
    function showInfo () {
      containerHomeClasses.add("container-home-end");
      infoClasses.add("info-show");
      rightArrow.style.visibility = 'hidden';
    }
    function hideInfo () {
      infoClasses.remove("info-show");
      containerHomeClasses.remove("container-home-end");
      rightArrow.style.visibility = 'inherit';
    }
  }
})()