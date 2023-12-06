import './style.scss'
import Page from './src/Page'

class App {
  constructor(options) {
    this.element = options.main

    this.createPage()
    this.addEventListeners()
  }

  async createPage() {
    this.fontLoaded = await document.fonts.ready

    document.documentElement.classList.add('loaded')

    this.page = new Page({
      element: this.element,
    })

    this.page.create()
    this.page.show()
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize() {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
  }
}

new App({ main: '.main' })
