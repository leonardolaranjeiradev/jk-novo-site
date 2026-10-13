import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { NAV_LINKS, WHATSAPP_LINK } from '../constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Destaca no menu a seção que está no centro da tela
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (el): el is Element => el !== null,
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/5 bg-background/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-container items-center justify-between px-6 lg:px-10">
        <a href="#inicio" className="logo-crop w-[78px]" aria-label="JKMCS Construtora — início">
          <img src="/logo-construtora.png" alt="Logo JKMCS" />
        </a>

        <nav className="hidden items-center gap-12 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-text-primary'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-0 h-[3px] rounded-full bg-primary transition-all duration-300 ${
                    isActive ? 'w-6' : 'w-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(255,106,0,0.75)] transition-colors hover:bg-primary-dark lg:inline-flex"
        >
          <FaWhatsapp size={17} aria-hidden="true" />
          Faça seu Orçamento
        </a>

        <button
          type="button"
          className="text-text-primary lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/5 bg-background px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base font-medium hover:text-text-primary ${
                  activeHref === link.href ? 'text-primary' : 'text-text-secondary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full"
            >
              <FaWhatsapp size={18} aria-hidden="true" />
              SOLICITAR ORÇAMENTO
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
