'use client'
import { useEffect } from 'react'
import AOS from 'aos'

export default function Aos() {
  useEffect(() => {
    AOS.init()
  }, [])
  return null
}
