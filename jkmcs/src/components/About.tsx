import { ArrowRight } from 'lucide-react'
import { INSTAGRAM_LINK } from '../constants'

export default function About() {
  return (
    <section
      id="sobre"
      className="relative z-10 flex min-h-svh flex-col justify-center overflow-hidden bg-light pb-24 pt-24 lg:block lg:pb-0 lg:pt-0"
    >
      <div className="relative mx-auto w-full max-w-container px-6 lg:flex lg:min-h-svh lg:items-center lg:px-10">
        <div className="relative z-10 max-w-[470px] lg:w-[42%]">
          <p className="section-heading-eyebrow eyebrow-dark">Sobre</p>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.15] text-ink sm:text-[2.6rem]">
            Construindo
            <br />
            <span className="text-primary">com propósito</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
            A <strong className="font-semibold text-ink">JKMCS Empreendimentos</strong> atua no segmento da
            construção civil oferecendo soluções completas para obras residenciais, comerciais, reformas,
            ampliações e gerenciamento de obras.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Atendemos todo o Vale do Ribeira com foco em qualidade, transparência e compromisso com os
            resultados.
          </p>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-8 text-ink"
          >
            Saiba mais sobre nós
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Card inclinado (paralelogramo com cantos arredondados) que sangra pela direita */}
      <div className="relative mt-12 h-[280px] pl-10 sm:h-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:flex lg:h-auto lg:w-[56%] lg:items-center lg:pl-0">
        <div className="relative h-full w-full lg:h-[66%]">
          {/* Faixa laranja acompanhando a borda inclinada */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 -left-2.5 right-[-12%] origin-bottom-left -skew-x-[14deg] rounded-[28px] bg-gradient-to-b from-primary via-primary/80 to-primary/30"
          />
          {/* Acento laranja no canto inferior direito */}
          <div
            aria-hidden="true"
            className="absolute -bottom-5 right-0 h-16 w-[42%] origin-bottom-left -skew-x-[14deg] rounded-l-[22px] bg-primary"
          />

          <div className="absolute inset-y-0 left-0 right-[-12%] origin-bottom-left -skew-x-[14deg] overflow-hidden rounded-[28px] bg-[#0E1013] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
            {/* Conteúdo endireitado (desfaz a inclinação) */}
            <div className="absolute inset-y-0 -left-[30%] right-0 origin-bottom-left skew-x-[14deg]">
              <img
                src="/sobre-capacete.png"
                alt="Capacete branco sobre plantas de projeto"
                className="absolute inset-0 h-full w-full object-cover object-[100%_55%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0E1013]/90 via-[#0E1013]/45 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_44%_42%,rgba(14,16,19,0.8),transparent_50%)]" />
              <div className="absolute left-[29%] top-[42%] w-[30%] max-w-[300px] -translate-y-1/2 drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]">
                <span className="logo-crop w-full">
                  <img src="/logo-construtora.png" alt="Logo JKMCS Construtora" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recorte orgânico para a seção escura "Serviços", com o traço laranja à direita */}
      <svg
        className="pointer-events-none absolute inset-x-0 -bottom-px z-10 h-[50px] w-full sm:h-[80px]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 70 C 180 40 380 62 620 66 C 900 70 1180 52 1440 22 V100 H0 Z" fill="#121417" />
        <path d="M1040 58 C 1220 50 1340 34 1440 10 L1440 30 C 1330 54 1210 64 1040 58 Z" fill="#FF6A00" />
      </svg>
    </section>
  )
}
