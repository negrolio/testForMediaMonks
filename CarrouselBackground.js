class CarrouselBackground {
  constructor (
    bckImg,
    btnGoLeft,
    btnGoRight,
    container,
    data
  ) {
    this.bckImg = bckImg;
    this.btnGoLeft = btnGoLeft;
    this.btnGoRight = btnGoRight;
    this.container = container;
    this.data = data; 
    // example of data 
    // { 
    //   texts: {
    //     title:'',
    //     paragraph:''
    //   },
    //   positions: {
    //     1: 15%,
    //     2: 30%,
    //     3: 45%
    //   }
    // }
    this.setPosition()
  }
  setPosition (position = 0) {
    this.position = position;
  }
  getPosition () {
    return this.position;
  }
  renderContainer () {
    this.container.innerHTML = 
    `<div class='container-home position-${this.position}'>
      hola
    </div>`
  }
}

//module.exports = CarrouselBackground;
