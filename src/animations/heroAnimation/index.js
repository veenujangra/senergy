import gsap from 'gsap'

export default class HeroAnimation {
  constructor(options) {
    this.element = options.element
    this.medias = this.element.querySelectorAll('[data-heroMedia]')

    this.create()
    this.animate()
  }

  create() {
    gsap.set(this.medias[3], {
      autoAlpha: 0,
    })
  }

  animate() {
    const Y = 12
    const X = 10

    this.tl = gsap.timeline({ delay: 2, repeat: -1 })

    this.tl
      .fromTo(
        this.medias[0],
        {
          y: '0rem',
          x: '0rem',
          autoAlpha: 1,
        },
        {
          y: `-${Y}rem`,
          x: `-${X}rem`,
          autoAlpha: 0,
          duration: 2,
          onComplete: () => {
            gsap.set(this.medias[0], {
              y: `${Y + 3 * 8}rem`,
              x: `-${X}rem`,
            })
          },
        }
      )
      .fromTo(
        this.medias[1],
        {
          y: '0rem',
          x: `${X}rem`,
        },
        {
          y: `-${Y}rem`,
          x: '0rem',
          duration: 2,
        },
        '<0'
      )
      .fromTo(
        this.medias[2],
        {
          y: '0rem',
          x: '0rem',
        },
        {
          y: `-${Y}rem`,
          x: `${X}rem`,
          duration: 2,
        },
        '<0'
      )
      .fromTo(
        this.medias[3],
        {
          y: '0rem',
          x: `-${X}rem`,
        },
        {
          y: `-${Y}rem`,
          x: '0rem',
          autoAlpha: 1,
          duration: 2,
        },
        '<0'
      )
      .to(this.medias[1], {
        y: `-${Y + 1 * 8}rem`,
        x: `-${X}rem`,
        autoAlpha: 0,
        duration: 2,
        onComplete: () => {
          gsap.set(this.medias[1], {
            y: `${Y + 2 * 8}rem`,
            x: `-${X}rem`,
          })
        },
      })
      .to(
        this.medias[2],
        {
          y: `-${Y + 1 * 8}rem`,
          x: '0rem',
          duration: 2,
        },
        '<0'
      )
      .to(
        this.medias[3],
        {
          y: `-${Y + 8}rem`,
          x: `${X}rem`,
          duration: 2,
        },
        '<0'
      )
      .to(
        this.medias[0],
        {
          y: `${Y + 2 * 8}rem`,
          x: '0rem',
          autoAlpha: 1,
          duration: 2,
        },
        '<0'
      )
      .to(
        this.medias[2],
        {
          y: `-${Y + 8}rem`,
          x: '-0rem',
          duration: 2,
        },
        '<0'
      )
      .to(this.medias[2], {
        y: `-${Y + 3 * 8}rem`,
        x: `-${X}rem`,
        autoAlpha: 0,
        duration: 2,
        onComplete: () => {
          gsap.set(this.medias[2], {
            y: `${Y}rem`,
            x: `-${X}rem`,
          })
        },
      })
      .to(
        this.medias[3],
        {
          y: `-${Y + 3 * 8}rem`,
          x: '0rem',
          duration: 2,
        },
        '<0'
      )
      .to(
        this.medias[0],
        {
          y: `${Y}rem`,
          x: `${X}rem`,
          duration: 2,
        },
        '<0'
      )
      .to(
        this.medias[1],
        {
          y: `${Y}rem`,
          x: '0rem',
          autoAlpha: 1,
          duration: 2,
        },
        '<0'
      )
      .to(
        this.medias[3],
        {
          y: `-${Y + 3 * 8}rem`,
          x: '0rem',
          duration: 2,
        },
        '<0'
      )
      .to(this.medias[3], {
        y: `-${Y + 4.5 * 8}rem`,
        x: `-${X}rem`,
        autoAlpha: 0,
        duration: 2,
      })
      // Initial State
      .to(
        this.medias[0],
        {
          y: `0rem`,
          x: '0rem',
          duration: 2,
        },
        '<0'
      )
      .to(
        this.medias[1],
        {
          y: `0rem`,
          x: `${X}rem`,
          duration: 2,
        },
        '<0'
      )
      .to(
        this.medias[2],
        {
          y: `0rem`,
          x: `0rem`,
          autoAlpha: 1,
          duration: 2,
        },
        '<0'
      )
  }
}
