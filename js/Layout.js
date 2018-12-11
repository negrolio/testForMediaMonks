class Layout1 {
  constructor(container, data) {
    this.container = container;
    this.data = data;
    this.lastElemData = `${Object.keys(data.screens).length - 1}`;
  }

  renderTexts() {
    const { screens } = this.data;
    let arr = [];
    for (const id in screens) {
      const screen = screens[id];
      arr.push(`
      <div class="text${id} text ${id === "0" && 'txt-current-active'}" data-value="${id}">
        <div class="title">
          <p>${id !== this.lastElemData && screen.title}</p>
        </div>
        <div class="little-text">
          <p>${id !== this.lastElemData && screen.paragraph}</p>
        </div>
      </div>`);
    }
    return arr.join(" ");
  }

  renderButtons() {
    const { screens } = this.data;
    const { lastElemData } = this;
    let arr = [];
    for (const id in screens) {
      arr.push(`
      <div class="btn ${id === "0" && 'btn-current-active'}" data-value="${id}">
        ${(id === "0" || id === lastElemData) ? "" : id}
      </div>`);
    }
    return arr.join(" ");
  }

  renderInfoScreen() {
    const { screens } = this.data;
    const { lastElemData } = this;
    return `
    <div class="title-info title">
      <p>${screens[lastElemData].title}</p>
    </div>
    <div class="info-text">
      <p>${screens[lastElemData].paragraph}</p>
      <div class="social">
        <div class="mail-info">
          <div class="mail-logo">
            <img src="./img/mail.png">
          </div>
          <p>Mails ons</p>
        </div>
        <div class="face-info">
          <div class="face-logo">
            <img src="./img/facebook.png">
          </div>
          <p>Facebook</p>
        </div>
        <div class="twitter-info">
          <div class="twitter-logo">
            <img src="./img/twitter.png">
          </div>
          <p>twitter</p>
        </div>
      </div>
    </div>`;
  }

  setLastScreenPosition() {
    this.moveContainer = this.data.screens[this.lastElemData].moveAll;
    switch (this.moveContainer) {
      case 'right':
        this.moveInfo = 'left';
        break;
      case 'left':
        this.moveInfo = 'right';
        break;
      case 'top':
        this.moveInfo = 'bottom';
        break;
      case 'bottom':
        this.moveInfo = 'top';
        break;
      default:
        break;
    }
  }

  renderContainer() {
    this.setLastScreenPosition();
    this.container.innerHTML =
      `<div class='container-layout position-${this.position}' style='background-image: url("${this.data.imgUrl}");${this.moveContainer}:0%'>
        ${this.renderTexts()}
        <div class="buttons-container">
          ${this.renderButtons()}
        </div>
      </div>
      <div class="info" style='${this.moveInfo}: 100%'>
        ${this.renderInfoScreen()}
      </div>`;
  }
}