import { ShieldCheck, Users, Clock, User } from 'lucide-react'
import { WHATSAPP_LINK } from '../constants'
import { FaWhatsapp } from 'react-icons/fa'

const differentiators = [
  { icon: ShieldCheck, label: 'Qualidade Garantida' },
  { icon: Users, label: 'Equipe Qualificada' },
  { icon: Clock, label: 'Compromisso com Prazos' },
  { icon: User, label: 'Atendimento Próximo' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden bg-background pb-32 pt-28 lg:pb-28 lg:pt-24"
    >
      {/* Foto da residência ocupando a direita, com fusão suave para o fundo escuro */}
      <div className="absolute inset-0 lg:left-auto lg:w-[68%]">
        <img
          src="/casa-luxo.png"
          alt="Residência construída pela JKMCS Empreendimentos"
          className="h-full w-full object-cover object-[55%_58%] opacity-45 lg:opacity-100"
          loading="eager"
        />
        <div className="absolute inset-y-0 left-0 hidden w-[45%] bg-gradient-to-r from-background via-background/70 to-transparent lg:block" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-container px-6 lg:px-10">
        <div className="animate-fadeUp max-w-[560px]">
          <p className="section-heading-eyebrow">Do plano à realização</p>

          <h1 className="mt-5 font-heading text-[2.15rem] font-extrabold uppercase leading-[1.12] tracking-tight text-text-primary sm:text-5xl lg:text-[3.05rem]">
            Construindo sonhos com <span className="text-primary">qualidade e compromisso.</span>
          </h1>

          <p className="mt-6 max-w-[470px] text-[15px] leading-relaxed text-text-primary/90 lg:text-base">
            Projetos, construções, reformas e manutenções residenciais e comerciais. A inteligência da
            engenharia aplicada com pontualidade, transparência e respeito ao seu investimento.
          </p>

          <div className="mt-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 text-[13px]">
              <FaWhatsapp size={17} aria-hidden="true" />
              Fazer Orçamento
            </a>
          </div>

          <ul className="mt-12 grid max-w-[540px] grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {differentiators.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col gap-2.5">
                <Icon size={22} strokeWidth={1.75} className="text-primary" aria-hidden="true" />
                <span className="max-w-[110px] text-[13px] font-medium leading-snug text-text-primary/90">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recorte orgânico para a seção clara "Sobre", com o traço laranja da referência */}
      <svg
        className="pointer-events-none absolute inset-x-0 -bottom-px z-10 h-[70px] w-full sm:h-[110px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 52 C 260 34 520 64 780 92 C 1000 114 1220 108 1440 80 L1440 120 L0 120 Z" fill="#F4F2EF" />
        <path d="M1090 106 C 1240 100 1350 82 1440 52 L1440 76 C 1340 98 1230 110 1090 106 Z" fill="#FF6A00" />
      </svg>
    </section>
  )
}
