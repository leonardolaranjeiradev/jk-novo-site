import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { Instagram, Facebook } from 'lucide-react'
import { FACEBOOK_LINK, INSTAGRAM_HANDLE, INSTAGRAM_LINK, WHATSAPP_LINK } from '../constants'

const CITIES = ['Registro - SP', 'Pariquera-Açu - SP', 'Jacupiranga - SP', 'Cajati - SP']

const contactLinkClass =
  'flex items-center gap-3 text-sm font-medium text-text-primary transition-colors hover:text-primary'

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-background pb-16 pt-24 lg:flex lg:min-h-[calc(100svh-var(--footer-h))] lg:items-center lg:pb-20 lg:pt-24">
      {/* Paisagem do Vale do Ribeira ao entardecer (direita), fundindo para o grafite */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-full bg-cover bg-center opacity-40 lg:w-[62%] lg:opacity-100"
        style={{
          backgroundImage:
            'url(/contato-vale.png), radial-gradient(ellipse at 78% 70%, rgba(255,106,0,0.35), transparent 55%)',
        }}
      />
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[62%] bg-gradient-to-r from-background via-background/60 to-background/10 lg:block" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E1013] to-transparent" />


      <div className="relative z-10 mx-auto grid w-full max-w-container gap-12 px-6 lg:grid-cols-[1.25fr_1fr_auto] lg:items-center lg:gap-10 lg:px-10">
        <div>
          <p className="section-heading-eyebrow">Vamos conversar?</p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.15] text-text-primary sm:text-[2.5rem]">
            Venha transformar seu
            <br />
            <span className="text-primary">projeto em realidade</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-primary/90">
            Receba seu orçamento personalizado em até 48 horas!
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 px-6 py-3 normal-case tracking-normal"
          >
            <FaWhatsapp size={18} aria-hidden="true" />
            Quero meu orçamento
          </a>
        </div>

        {/* Área de atendimento, emoldurada pelo traço laranja diagonal */}
        <div className="relative pl-8 pt-6">
          <span aria-hidden="true" className="absolute left-6 right-0 top-0 h-px bg-primary/80" />
          <span aria-hidden="true" className="absolute left-6 top-0 h-full w-px origin-top rotate-[14deg] bg-gradient-to-b from-primary/80 to-transparent" />

          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Atendemos em todo o Vale do Ribeira
          </p>
          <ul className="mt-4 space-y-2.5">
            {CITIES.map((city) => (
              <li key={city} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                <FaMapMarkerAlt className="h-4 w-4 text-primary" aria-hidden="true" />
                {city}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] leading-relaxed text-text-primary/85">
            Demais localidades: a combinar,
            <br />
            mediante consulta prévia e avaliação.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:pt-10">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
            <Instagram size={20} aria-hidden="true" />
            {INSTAGRAM_HANDLE}
          </a>
          <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
            <Facebook size={20} aria-hidden="true" />
            JKMCS Construtora
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
            <FaWhatsapp size={20} aria-hidden="true" />
            (13) 97800-2673
          </a>
        </div>
      </div>
    </section>
  )
}
