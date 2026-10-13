import { Hammer, ClipboardList, } from 'lucide-react'
import { useState } from 'react'
import { WHATSAPP_NUMBER } from '../constants'

const services = [
  {
    id: 'manutencao',
    icon: Hammer,
    title: 'Manutenção e Serviços',
    description:
      'Manutenções, pequenos reparos, pintura, impermeabilização, instalações e serviços técnicos para residências e comércios.',
  },
  {
    id: 'construcao',
    icon: ClipboardList,
    title: 'Construção e Gerenciamento',
    description:
      'Construção residencial e comercial, reformas completas, gerenciamento e execução de obras.',
  },
]

const allServices = {
  'Serviços Rápidos e Manutenção': [
    'Manutenção Residencial e Comercial',
    'Lavagem e Limpeza Técnica de Telhados',
    'Impermeabilização e Reparo de Lajes/Telhados',
    'Pintura Residencial e Comercial',
    'Pequenos Reparos e Reformas Express',
  ],

  'Serviços Elétricos': [
    'Troca e Instalação de Tomadas e Interruptores',
    'Instalação de Chuveiros e Torneiras Elétricas',
    'Instalação de Luminárias e Pendentes',
    'Troca de Disjuntores e Reparos no Quadro',    
    'Instalação de Ventiladores de Teto e Exaustores',
    'Serviços Gerais de Eletricidade',
    'Instalação de Câmeras de Segurança',
  ],

  'Construção e Gestão Estrutural': [
    'Construção Residencial (Chave na Mão)',
    'Construção Comercial',
    'Reformas Globais',
    'Cotação e Compra Estratégica de Materiais',    
    ],
}


export default function Services() {  
  const createWhatsAppLink = (category: string, service: string) => {
    const message = `Olá! Vim pelo site da JKMCS e gostaria de solicitar um orçamento para ${category} - ${service}.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  const [openCard, setOpenCard] = useState<string | null>(null)

    return (
        <section id="servicos" className="relative border-t border-border-subtle bg-background-secondary pt-24 pb-20 lg:pt-24 lg:pb-20">   

          <img
            src="/bg-services2.png"
            alt="Imagem decorativa"
            className="hidden md:block absolute right-20 top-[67%] w-[1200px] -translate-y-1/2 opacity-[0.25] pointer-events-none">

              
              
          </img>   
            

          <div className="relative z-10 mx-auto max-w-container px-6 lg:px-10">
            <div className="max-w-xl">
              <p className="section-heading-eyebrow">Serviços</p>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
                O que fazemos
              </h2>
            </div>

            <p className="mt-4 text-base leading-relaxed text-text-primary lg:text-lg">
              Atendemos desde pequenos reparos até a execução completa de obras residenciais e comerciais.
            </p>

            <div className="mt-14 grid items-start gap-6 sm:grid-cols-2">
              {services.map(({ id, icon: Icon, title, description }) => (
                <div
                  key={title}
                  onClick={() => setOpenCard(openCard === id ? null : id)}
                  className="cursor-pointer rounded-lg border border-border-subtle bg-background p-8 transition-colors duration-200 hover:border-primary/60"
                >
                  <Icon size={26} className="text-primary" aria-hidden="true" />


                 <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                  {title}
                </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-primary">{description}</p>

                  <div className="mt-6 border-t border-border-subtle pt-4">
                    <p className="text-sm font-semibold text-primary">
                      SELECIONE UM SERVIÇO {openCard === id ? '↑' : '↓'}
                    </p>
                  </div>
                  {openCard === id && (
                  <div className="mt-4">

                    {(id === 'manutencao'
                      ? [
                      ...allServices['Serviços Rápidos e Manutenção'],
                      ...allServices['Serviços Elétricos'],
                        ]
                      : allServices['Construção e Gestão Estrutural']
                      ).map((service) => {
                      const category =
                      id === 'manutencao'
                      ? 'Manutenção e Serviços'
                      : 'Construção e Gerenciamento'
                      const whatsappLink = createWhatsAppLink(category, service)
                       
                      return (
                      <a
                      key={service}
                      {...{ href: whatsappLink }}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="group flex items-start gap-2 rounded-md py-2 text-sm leading-relaxed text-text-primary transition-colors hover:text-primary"
                      >
                      <span className="shrink-0 text-primary transition-transform group-hover:translate-x-1">
                      ›                      
                      </span>
                      <span>{service}</span>
                      </a>
                      )
                      33
                    })}  
                  </div>
                  )}
                </div>
              ))}
            </div>             
          </div>
        </section>
    )
}