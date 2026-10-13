import { Instagram, Facebook } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { FACEBOOK_LINK, INSTAGRAM_LINK, NAV_LINKS, WHATSAPP_LINK } from '../constants'

const socialLinks = [
  { href: INSTAGRAM_LINK, label: 'Instagram da JKMCS', icon: Instagram },
  { href: FACEBOOK_LINK, label: 'Facebook da JKMCS', icon: Facebook },
  { href: WHATSAPP_LINK, label: 'WhatsApp da JKMCS', icon: FaWhatsapp },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0E1013] lg:h-[var(--footer-h)]">
      {/* Traço laranja curvo no canto inferior direito */}
      <svg
        className="pointer-events-none absolute bottom-0 right-0 h-[70px] w-[46%] sm:h-[110px]"
        viewBox="0 0 600 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 110 C 220 104 430 76 600 8 L600 26 C 440 88 240 108 60 110 Z" fill="#FF6A00" />
      </svg>

      <div className="relative z-10 mx-auto flex h-full max-w-container flex-col gap-10 px-6 pb-16 pt-10 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-0">
        <div className="flex items-center gap-6">
          <a href="#inicio" className="logo-crop w-[84px] shrink-0" aria-label="JKMCS Construtora — início">
            <img src="/logo-construtora.png" alt="Logo JKMCS Construtora" />
          </a>
          <div>
            <p className="text-xs font-medium text-text-primary">Engenharia, Construção e Manutenção</p>
            <span aria-hidden="true" className="mt-3 block h-px w-full max-w-[260px] bg-gradient-to-r from-primary to-primary/0" />
            <p className="mt-3 text-[11px] text-text-secondary">
              © {new Date().getFullYear()} JKMCS Construtora. Todos os direitos reservados.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Rodapé">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-text-primary transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-primary transition-colors hover:text-primary"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
