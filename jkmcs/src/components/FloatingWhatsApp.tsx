import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../constants'

interface FloatingWhatsAppProps {
  hidden?: boolean
}

export default function FloatingWhatsApp({ hidden = false }: FloatingWhatsAppProps) {
  if (hidden) return null

  return (
    <a
      {...{ href: WHATSAPP_LINK }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento grátis pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 md:hidden transition-all duration-300"
    >
      <span className="rounded-full bg-background px-4 py-2 text-sm font-semibold text-text-primary shadow-lg shadow-black/40">
        ORÇAMENTO GRÁTIS
      </span>

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-black/40 transition-transform active:scale-95">
        <FaWhatsapp size={27} aria-hidden="true" />
      </div>
    </a>
  )
}