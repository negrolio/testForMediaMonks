(()=>{
  window.onload = () => {
    let container = document.getElementsByClassName("layout")[0];
    let Layout = new Layout1(container,data);

    Layout.renderContainer()

    let rightArrow = document.getElementById("rigth-arrow");
    let leftArrow = document.getElementById("left-arrow");
    let containerLayout = document.getElementsByClassName("container-layout")[0];
    let containerLayoutClasses = containerLayout.classList;
    let numberBackgroundPosition = Number(containerLayoutClasses[1].split('-')[1]) || 0;
    let buttonsDivs = document.getElementsByClassName("btn");
    let infoScreen = document.getElementsByClassName("info")[0];
    let texts = document.getElementsByClassName('text');

    //here we set the onclick events to each nav button
    for (let index = 0; index < buttonsDivs.length; index++) {
      const element = buttonsDivs[index];
      element.addEventListener('click', ()=>{
        numberBackgroundPosition = Number(element.getAttribute("data-value"))
        events();
        changePositionBackground(numberBackgroundPosition);
      })
      
    }

    rightArrow.addEventListener('click', ()=>{
      changePositionBackground(numberBackgroundPosition += 1)
      events()
    });

    leftArrow.addEventListener('click', ()=>{
      changePositionBackground(numberBackgroundPosition -= 1)
      events()
    })

    // This function checks if the information screen should be displayed or hidden, arrows and texts too
    function events () {
      numberBackgroundPosition !== 9 && showAndHideInfo(false);
      leftArrow.style.visibility = 'inherit';
      removeAllActiveTxt();
      if (numberBackgroundPosition === 0) leftArrow.style.visibility = 'hidden';
      if (numberBackgroundPosition === 9) showAndHideInfo(true);
      containerLayout.addEventListener("transitionend", ()=>{
        texts[numberBackgroundPosition] && texts[numberBackgroundPosition].classList.add("txt-current-active");
      })
    }

    function changePositionBackground (positionToSet) {
      containerLayout.style.backgroundPosition = `${data.screens[positionToSet].positionX}%`
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

    function showAndHideInfo (show) {
      const last = Layout.lastElemData;
      const moveContainer = data.screens[last].moveAll;
      let moveInfo;
      let positionToContainer;
      let positionToInfo;

      // this is to set how the info screen must appears,
      // with a little improvements you will have the posibilities of show it from the chosen side
      switch (moveContainer) {
        case 'right':
          positionToContainer = '69%';
          positionToInfo = '31%';
          moveInfo = 'left';
          break;
        default:
        break;
      }
      containerLayout.style[moveContainer] = show ? positionToContainer : '0';
      infoScreen.style[moveInfo] = show ? positionToInfo : '100%';
      rightArrow.style.visibility = show ? 'hidden' : 'inherit';
    }
  }
})()