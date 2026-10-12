'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from '@/i18n/navigation'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import LiquidGlass from 'liquid-glass-react'

const SECTION_IDS = ['experience', 'projects', 'skills', 'contact'] as const

export function Nav() {
  const t = useTranslations('Nav')
  const [active, setActive] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const underlineDuration = reducedMotion ? 0 : 0.25

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
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
  }, [])

  const links = SECTION_IDS.map((id) => ({ id, label: t(id) }))

  return (
    <header className="sticky top-4 z-30 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="bg-surface hidden items-center gap-0.5 rounded-pill p-[6px] md:flex"
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={`/#${link.id}`}
            className="relative inline-flex h-[38px] items-center whitespace-nowrap rounded-pill px-4 text-sm text-fg no-underline hover:bg-[rgb(var(--overlay-rgb)_/_0.06)] hover:text-white"
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
        <LanguageToggle />
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
            onClick={() => setMenuOpen((open) => !open)}
            className="h-[46px] rounded-pill border border-[rgb(var(--overlay-rgb)_/_0.12)] bg-transparent px-5 text-sm text-fg"
          >
            {menuOpen ? t('menuClose') : t('menuOpen')}
          </button>
          <div className="flex items-center gap-1.5">
            <LanguageToggle size="mobile" />
            <ThemeToggle size="mobile" />
          </div>
        </nav>
        {menuOpen && (
          <div className="bg-surface absolute inset-x-0 top-[66px] flex flex-col rounded-[24px] p-2">
            {links.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[52px] items-center rounded-2xl px-4 text-[17px] text-fg no-underline hover:bg-[rgb(var(--overlay-rgb)_/_0.05)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
