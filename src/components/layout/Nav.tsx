'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ThemeToggle } from './ThemeToggle'

const SECTION_LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

function MenuToggleIcon({ open }: { open: boolean }) {
  const reducedMotion = useReducedMotion()
  const transition = { duration: reducedMotion ? 0 : 0.3, ease: 'easeInOut' as const }

  return (
    <span className="relative block h-4 w-[18px]" aria-hidden="true">
      <motion.span
        className="absolute inset-x-0 top-0 h-[1.6px] rounded-full bg-fg"
        animate={{ y: open ? 7 : 0, rotate: open ? 45 : 0 }}
        transition={transition}
      />
      <motion.span
        className="absolute inset-x-0 top-[7px] h-[1.6px] rounded-full bg-fg"
        animate={{ opacity: open ? 0 : 1, scale: open ? 0.5 : 1 }}
        transition={transition}
      />
      <motion.span
        className="absolute inset-x-0 bottom-0 h-[1.6px] rounded-full bg-fg"
        animate={{ y: open ? -7 : 0, rotate: open ? -45 : 0 }}
        transition={transition}
      />
    </span>
  )
}

export function Nav() {
  const pathname = usePathname()
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const underlineDuration = reducedMotion ? 0 : 0.25

  useEffect(() => {
    const sections = SECTION_LINKS.map((link) =>
      document.getElementById(link.id),
    ).filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <header className="sticky top-4 z-30 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="bg-surface hidden items-center gap-0.5 rounded-pill p-[6px] md:flex"
      >
        {SECTION_LINKS.map((link) => (
          <Link
            key={link.id}
            href={`/#${link.id}`}
            className="relative inline-flex h-[38px] items-center whitespace-nowrap rounded-pill px-4 text-sm text-fg no-underline hover:bg-[rgb(var(--overlay-rgb)_/_0.06)]"
          >
            {link.label}
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-4 bottom-[6px] h-[2px] rounded-full bg-accent"
              initial={false}
              animate={{
                scaleX: active === link.id ? 1 : 0,
                opacity: active === link.id ? 1 : 0,
              }}
              transition={{ duration: underlineDuration, ease: 'easeOut' }}
              style={{ transformOrigin: 'center' }}
            />
          </Link>
        ))}
        <span className="mx-1.5 h-5 w-px bg-[rgb(var(--overlay-rgb)_/_0.1)]" />
        <ThemeToggle />
      </nav>
      <div className="relative w-full max-w-[440px] md:hidden">
        <nav
          aria-label="Primary"
          className="bg-surface flex items-center justify-between gap-2 rounded-pill py-[5px] pr-[5px] pl-5"
        >
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-[46px] items-center justify-center rounded-pill border border-[rgb(var(--overlay-rgb)_/_0.12)] bg-transparent px-5 text-fg transition-colors hover:bg-[rgb(var(--overlay-rgb)_/_0.06)]"
          >
            <MenuToggleIcon open={menuOpen} />
          </button>
          <div className="flex items-center gap-1.5">
            <ThemeToggle size="mobile" />
          </div>
        </nav>
        {menuOpen && (
          <div className="bg-surface absolute inset-x-0 top-[66px] flex flex-col rounded-[24px] p-2">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={active === link.id ? 'page' : undefined}
                className={`relative flex min-h-[52px] items-center rounded-2xl px-4 text-[17px] no-underline hover:bg-[rgb(var(--overlay-rgb)_/_0.05)] ${
                  active === link.id ? 'bg-[rgb(var(--overlay-rgb)_/_0.05)] font-medium text-fg' : 'text-fg'
                }`}
              >
                {active === link.id && (
                  <span
                    aria-hidden="true"
                    className="bg-accent absolute top-1/2 left-1.5 h-5 w-[3px] -translate-y-1/2 rounded-full"
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
