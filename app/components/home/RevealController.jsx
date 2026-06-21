'use client'

import { useEffect } from 'react'

// Ports the scroll behavior from the Todd Albert.dc.html design handoff:
//   • [data-reveal] elements fade + rise into view via IntersectionObserver
//   • [data-count] numbers count up (easeOutCubic) the first time they appear
//   • prefers-reduced-motion (and ?nomotion) shows everything immediately
// Mounted once on the homepage. Server markup stays fully visible until this
// runs, so no-JS visitors and crawlers always get the complete page.
export default function RevealController() {
  useEffect(() => {
    const root = document.documentElement

    const setFinal = (el) => {
      const to = parseFloat(el.getAttribute('data-count'))
      const suf = el.getAttribute('data-suffix') || ''
      const dec = parseInt(el.getAttribute('data-dec') || '0', 10)
      el.textContent = (dec ? to.toFixed(dec) : Math.round(to)) + suf
    }

    const runCount = (el) => {
      if (el.dataset.ran) return
      el.dataset.ran = '1'
      const to = parseFloat(el.getAttribute('data-count'))
      const suf = el.getAttribute('data-suffix') || ''
      const dec = parseInt(el.getAttribute('data-dec') || '0', 10)
      const dur = 1100
      let start = null
      const step = (ts) => {
        if (!start) start = ts
        const p = Math.min(1, (ts - start) / dur)
        const e = 1 - Math.pow(1 - p, 3)
        const val = to * e
        el.textContent = (dec ? val.toFixed(dec) : Math.round(val)) + suf
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const counters = Array.from(document.querySelectorAll('[data-count]'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      counters.forEach(setFinal)
      return
    }

    root.classList.add('reveal-ready')
    const reveals = Array.from(document.querySelectorAll('[data-reveal]'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            entry.target.querySelectorAll('[data-count]').forEach(runCount)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    reveals.forEach((e) => io.observe(e))

    return () => {
      io.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])

  return null
}
