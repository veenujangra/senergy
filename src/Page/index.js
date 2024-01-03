import { each, map } from 'lodash'
import Title from '../animations/title'
import Description from '../animations/description'
import ImageAnimation from '../animations/image'
import SlideUp from '../animations/slideup'
import Accordion from '../animations/accordion'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'
import Metal from '../animations/metal'
import HeroAnimation from '../animations/heroAnimation'

export default class Page {
  constructor(options) {
    this.element = options.element
    this.animationElement = {
      title: '[data-animation = title]',
      description: '[data-animation = description]',
      slideUp: '[data-animation = slideup]',
      image: '[data-animation = image]',
      accordion: '[data-accordion = wrapper]',
      metal: '[data-metal]',
      heroAnimation: '[data-heroAnimation-wrapper]',
    }
  }

  create() {
    this.elements = {}
    each(this.animationElement, (item, index) => {
      if (item instanceof window.HTMLElement || item instanceof window.NodeList || Array.isArray(item)) {
        this.elements[index] = item
      } else {
        this.elements[index] = document.querySelectorAll(item)
        if (this.elements[index].length === 0) {
          this.elements[index] = null
        } else if (this.elements[index].length === 1) {
          this.elements[index] = document.querySelectorAll(item)
        }
      }
    })
    this.createAnimations()
  }

  createSmoothScroll() {
    this.lenis = new Lenis({
      lerp: 0.075,
      smoothTouch: true,
      syncTouchLerp: 0.075,
    })
    this.update()
  }

  update(time) {
    this.lenis.raf(time)
    requestAnimationFrame(this.update.bind(this))
  }

  createAnimations() {
    this.animations = []

    this.animationTitles = map(this.elements.title, (element) => {
      return new Title({ element })
    })
    this.animations.push([...this.animationTitles])

    this.animationDescription = map(this.elements.description, (element) => {
      return new Description({ element })
    })
    this.animations.push([...this.animationDescription])

    this.animationImage = map(this.elements.image, (element) => {
      return new ImageAnimation({ element })
    })
    this.animations.push([...this.animationImage])

    this.animationSlideup = map(this.elements.slideUp, (element) => {
      return new SlideUp({ element })
    })
    this.animations.push([...this.animationSlideup])

    this.animationAccordion = map(this.elements.accordion, (element) => {
      return new Accordion({ element })
    })
    this.animations.push([...this.animationAccordion])

    this.animationMetal = map(this.elements.metal, (element) => {
      return new Metal({ element })
    })
    this.animations.push([...this.animationMetal])

    this.animationHeroMedia = map(this.elements.heroAnimation, (element) => {
      return new HeroAnimation({ element })
    })
    this.animations.push([...this.animationHeroMedia])
  }

  show(animation) {
    return new Promise((resolve) => {
      if (animation) {
        this.animateIn = animation
      } else {
        this.animateIn = gsap.timeline()

        this.animateIn.fromTo(
          this.element,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            ease: 'Power1.easeIn',
          }
        )
      }
      this.animateIn.call((_) => {
        // this.createSmoothScroll()
        // this.addEventListeners()
        resolve()
      })
    })
  }

  addEventListeners() {
    // window.addEventListener('scroll', this.onScroll.bind(this))
  }

  onScroll() {
    if (this.lenis.direction === -1) {
      document.documentElement.classList.add('scroll-up')
      document.documentElement.classList.remove('scroll-down')
    } else if (this.lenis.direction === 1) {
      document.documentElement.classList.remove('scroll-up')
      document.documentElement.classList.add('scroll-down')
    }
  }

  onResize() {}
}
