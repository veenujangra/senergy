import gsap from 'gsap'
import { each, map } from 'lodash'

export default class Accordion {
  constructor(options) {
    this.element = options.element

    this.create()
    this.setProperties()
  }

  create() {
    this.accordionItems = this.element.querySelectorAll('[data-accordion="item"]')

    this.accordionItems = map(this.accordionItems, (item, index) => {
      this.item = {
        header: item.querySelector('[data-accordion="header"]'),
        body: item.querySelector('[data-accordion="body"]'),
        status: true,
      }
      return this.item
    })

    each(this.accordionItems, (item, index) => {
      this.handleClick(index)
    })
  }

  setProperties() {
    this.resetAccordion()
    this.accordionOpen(this.accordionItems[0].body, 0)
  }

  handleClick(index) {
    const header = this.accordionItems[index].header
    const body = this.accordionItems[index].body

    header.addEventListener('click', () => {
      const status = this.accordionItems[index].status
      if (status === true) {
        this.accordionClose(body, index)
      } else {
        this.accordionOpen(body, index)
      }
    })
  }

  accordionOpen(body, index) {
    this.tl = gsap.timeline({
      onStart: () => {
        this.resetAccordion()
        this.accordionItems[index].status = true
        this.accordionItems[index].header.setAttribute('aria-expanded', 'true')
      },
    })

    this.tl.fromTo(
      body,
      {
        height: 0,
      },
      {
        height: 'auto',
        duration: 0.3,
      }
    )
  }

  accordionClose(body, index) {
    this.tl = gsap.timeline({
      onStart: () => ((this.accordionItems[index].status = false), this.accordionItems[index].header.setAttribute('aria-expanded', 'false')),
    })

    this.tl.to(body, {
      height: 0,
      duration: 0.3,
    })
  }

  resetAccordion() {
    each(this.accordionItems, (item, index) => {
      if (item.status === true) {
        this.accordionClose(item.body, index)
      }
    })
  }

  addEventListeners() {}
}
