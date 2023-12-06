export default class Metal {
  constructor(options) {
    this.element = options.element
    this.mediaWrapper = document.querySelector('.home_strategy_media_wrapper ')
    this.addEventListeners()
  }

  onClick() {
    const metalAttribute = this.element.getAttribute('data-metal')
    this.mediaWrapper.className = `home_strategy_media_wrapper has_${metalAttribute}`

    //   if (metalAttribute === 'cu') {
    //     animateCe()
    //   } else if (metalAttribute === 'fe') {
    //     animateFe()
    //   } else if (metalAttribute === 'rc') {
    //     animateRe()
    //   }
  }

  // animateFe(){

  // }

  addEventListeners() {
    this.element.addEventListener('click', this.onClick.bind(this))
  }
}
