import { Wrench, Building2, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { WHATSAPP_NUMBER } from '../constants'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  {
    id: 'manutencao',
    icon: Wrench,
    title: 'Manutenção e Serviços',
    image: '/servico-manutencao.png',
    description:
      'Manutenções, pequenos reparos, pintura, impermeabilização, instalações e serviços técnicos para residências e comércios.',
  },
  {
    id: 'construcao',
    icon: Building2,
    title: 'Construção e Gerenciamento',
    image: '/servico-construcao.png',
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

const serviceFolders: Record<string, number> = {
  'Manutenção Residencial e Comercial': 1,
  'Lavagem e Limpeza Técnica de Telhados': 2,
  'Impermeabilização e Reparo de Lajes/Telhados': 3,
  'Pintura Residencial e Comercial': 4,
  'Pequenos Reparos e Reformas Express': 5,
  'Troca e Instalação de Tomadas e Interruptores': 6,
  'Instalação de Chuveiros e Torneiras Elétricas': 7,
  'Instalação de Luminárias e Pendentes': 8,
  'Troca de Disjuntores e Reparos no Quadro': 9,
  'Instalação de Ventiladores de Teto e Exaustores': 10,
  'Serviços Gerais de Eletricidade': 11,
  'Instalação de Câmeras de Segurança': 12,
  'Construção Residencial (Chave na Mão)': 13,
  'Construção Comercial': 14,
  'Reformas Globais': 15,
  'Cotação e Compra Estratégica de Materiais': 16,
}

const imageModules = import.meta.glob('../assets/Jk-artes/*/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const galleries: Record<number, string[]> = {}
Object.entries(imageModules)
  .flatMap(([path, src]) => {
    const match = path.match(/Jk-artes\/(\d+) - [^/]+\/(\d+)\.jpg$/)
    return match ? [{ folder: Number(match[1]), order: Number(match[2]), src }] : []
  })
  .sort((a, b) => a.order - b.order)
  .forEach(({ folder, src }) => {
    galleries[folder] = [...(galleries[folder] ?? []), src]
  })

interface ServicesProps {
  onModalToggle?: (isOpen: boolean) => void
}

export default function Services({ onModalToggle }: ServicesProps) {
  const createWhatsAppLink = (category: string, service: string) => {
    const message = `Olá! Vim pelo site da JKMCS e gostaria de solicitar um orçamento para ${category} - ${service}.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  const [openCard, setOpenCard] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<{ category: string; service: string } | null>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const masterServiceList = [
    { category: 'Manutenção e Serviços', service: 'Manutenção Residencial e Comercial' },
    { category: 'Manutenção e Serviços', service: 'Lavagem e Limpeza Técnica de Telhados' },
    { category: 'Manutenção e Serviços', service: 'Impermeabilização e Reparo de Lajes/Telhados' },
    { category: 'Manutenção e Serviços', service: 'Pintura Residencial e Comercial' },
    { category: 'Manutenção e Serviços', service: 'Pequenos Reparos e Reformas Express' },
    { category: 'Manutenção e Serviços', service: 'Troca e Instalação de Tomadas e Interruptores' },
    { category: 'Manutenção e Serviços', service: 'Instalação de Chuveiros e Torneiras Elétricas' },
    { category: 'Manutenção e Serviços', service: 'Instalação de Luminárias e Pendentes' },
    { category: 'Manutenção e Serviços', service: 'Troca de Disjuntores e Reparos no Quadro' },
    { category: 'Manutenção e Serviços', service: 'Instalação de Ventiladores de Teto e Exaustores' },
    { category: 'Manutenção e Serviços', service: 'Serviços Gerais de Eletricidade' },
    { category: 'Manutenção e Serviços', service: 'Instalação de Câmeras de Segurança' },
    { category: 'Construção e Gerenciamento', service: 'Construção Residencial (Chave na Mão)' },
    { category: 'Construção e Gerenciamento', service: 'Construção Comercial' },
    { category: 'Construção e Gerenciamento', service: 'Reformas Globais' },
    { category: 'Construção e Gerenciamento', service: 'Cotação e Compra Estratégica de Materiais' },
  ]

  const folderId = selectedService ? serviceFolders[selectedService.service] : null
  const images = folderId ? galleries[folderId] ?? [] : []

  const handleSelectService = (serviceData: { category: string; service: string } | null) => {
    setSelectedService(serviceData)
    setCurrentImage(0)
    onModalToggle?.(!!serviceData)
  }

  const closeGallery = () => {
    handleSelectService(null)
  }

  const handlePreviousService = () => {
    if (!selectedService) return
    const currentIndex = masterServiceList.findIndex(
      (item) => item.service === selectedService.service
    )
    const prevIndex = (currentIndex - 1 + masterServiceList.length) % masterServiceList.length
    setSelectedService(masterServiceList[prevIndex])
    setCurrentImage(0)
  }

  const handleNextService = () => {
    if (!selectedService) return
    const currentIndex = masterServiceList.findIndex(
      (item) => item.service === selectedService.service
    )
    const nextIndex = (currentIndex + 1) % masterServiceList.length
    setSelectedService(masterServiceList[nextIndex])
    setCurrentImage(0)
  }

  const showPrevious = () => {
    if (images.length > 1 && currentImage > 0) {
      setCurrentImage((index) => index - 1)
    } else {
      if (!selectedService) return
      const currentIndex = masterServiceList.findIndex(
        (item) => item.service === selectedService.service
      )
      const prevIndex = (currentIndex - 1 + masterServiceList.length) % masterServiceList.length
      const prevServiceItem = masterServiceList[prevIndex]
      const prevFolderId = serviceFolders[prevServiceItem.service]
      const prevImages = prevFolderId ? galleries[prevFolderId] ?? [] : []
      setSelectedService(prevServiceItem)
      setCurrentImage(prevImages.length > 0 ? prevImages.length - 1 : 0)
    }
  }

  const showNext = () => {
    if (images.length > 1 && currentImage < images.length - 1) {
      setCurrentImage((index) => index + 1)
    } else {
      if (!selectedService) return
      const currentIndex = masterServiceList.findIndex(
        (item) => item.service === selectedService.service
      )
      const nextIndex = (currentIndex + 1) % masterServiceList.length
      setSelectedService(masterServiceList[nextIndex])
      setCurrentImage(0)
    }
  }

  useEffect(() => {
    if (!selectedService) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleSelectService(null)
      } else if (event.key === 'ArrowRight') {
        showNext()
      } else if (event.key === 'ArrowLeft') {
        showPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedService, currentImage, images])

  return (
    <section id="servicos" className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-background pb-24 pt-24 lg:pb-24 lg:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-6 h-40 w-40 rounded-full bg-graphite/90 sm:h-52 sm:w-52" />

      <div className="relative z-10 mx-auto max-w-container px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="section-heading-eyebrow">Serviços</p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-text-primary sm:text-[2.6rem]">
              O que <span className="text-primary">fazemos</span>
            </h2>
            <p className="mt-3 max-w-[460px] text-base leading-relaxed text-text-primary/90">
              Atendemos desde pequenos reparos até a execução completa de obras residenciais e comerciais.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleSelectService(masterServiceList[0])}
            className="btn-outline self-start text-text-primary md:self-auto"
          >
            Conheça todos os serviços
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
          {services.map(({ id, icon: Icon, title, description, image }) => {
            const isOpen = openCard === id
            return (
              <div
                key={title}
                onClick={() => setOpenCard(isOpen ? null : id)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#16191D] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-colors duration-200 hover:border-primary/60"
              >
                {/* Foto à direita do card, fundindo para o grafite (o brilho laranja aparece sozinho se a foto faltar) */}
                <div
                  aria-hidden="true"
                  className={`absolute right-0 top-0 w-[62%] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03] ${isOpen ? 'h-[270px]' : 'h-full'}`}
                  style={{ backgroundImage: `url(${image}), radial-gradient(circle at 70% 40%, rgba(255,106,0,0.18), transparent 60%)` }}
                />
                <div aria-hidden="true" className={`absolute right-0 top-0 w-[62%] bg-gradient-to-r from-[#16191D] via-[#16191D]/60 to-transparent ${isOpen ? 'h-[270px]' : 'h-full'}`} />

                <div className="relative flex min-h-[270px] flex-col justify-center p-7 sm:max-w-[62%] lg:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/80 bg-black/30">
                    <Icon size={24} strokeWidth={1.75} className="text-primary" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-primary/80">{description}</p>

                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {isOpen ? 'Selecione um serviço' : 'Saiba mais'}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                    />
                  </p>
                </div>

                {isOpen && (
                  <div className="relative border-t border-white/10 px-7 pb-6 pt-3 lg:px-8">
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

                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            handleSelectService({ category, service })
                          }}
                          className="group/item flex w-full items-start gap-2 rounded-md py-2 text-left text-sm leading-relaxed text-text-primary transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <span className="shrink-0 text-primary transition-transform group-hover/item:translate-x-1">
                            ›
                          </span>
                          <span>{service}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Recorte diagonal para a seção clara "Trabalhe Conosco" */}
      <svg
        className="pointer-events-none absolute inset-x-0 -bottom-px z-10 h-[50px] w-full sm:h-[80px]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 34 C 240 26 420 40 600 30 C 900 14 1180 22 1440 6 L1440 80 L0 80 Z" fill="#F4F2EF" />
      </svg>
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-2 sm:p-4"
          onClick={closeGallery}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedService.service}
            onClick={(event) => event.stopPropagation()}
            className="relative flex flex-col h-[98vh] w-[98vw] max-w-[100vw] overflow-hidden rounded-xl border border-border-subtle bg-background p-3 sm:p-6 shadow-2xl"
          >
            {/* Botão de Fechar X posicionado mais acima no mobile (top-1.5 right-2) para não tampar os títulos */}
            <button
              type="button"
              onClick={closeGallery}
              aria-label="Fechar galeria"
              className="absolute right-2 top-1.5 sm:right-4 sm:top-4 z-30 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
            </button>

            {/* Cabeçalho */}
            <div className="mt-1 mb-3 flex flex-col lg:flex-row items-center justify-between gap-3 px-2 sm:px-12 shrink-0 pt-2 sm:pt-0">
              
              {/* Título e Categoria */}
              <div className="order-1 lg:order-2 text-center px-2 overflow-hidden max-w-[85vw] sm:max-w-full">
                <p className="text-xs sm:text-sm font-medium text-text-primary uppercase tracking-wider opacity-80 truncate">
                  {selectedService.category}
                </p>
                <h3 className="font-heading text-sm sm:text-2xl font-bold text-primary truncate max-w-[80vw] sm:max-w-[50vw]">
                  {selectedService.service}
                </h3>
              </div>

              {/* Botões lado a lado no mobile */}
              <div className="order-2 lg:contents flex w-full items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handlePreviousService}
                  aria-label="Categoria anterior"
                  className="lg:order-1 flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-primary bg-transparent text-primary text-[11px] sm:text-sm font-semibold transition-all hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
                >
                  <ChevronLeft size={16} aria-hidden="true" />
                  <span>Categoria anterior</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextService}
                  aria-label="Próxima categoria"
                  className="lg:order-3 flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-primary bg-transparent text-primary text-[11px] sm:text-sm font-semibold transition-all hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
                >
                  <span>Próxima categoria</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </button>
              </div>

            </div>

            {images.length > 0 ? (
              <div className="flex flex-col lg:flex-row items-center gap-4 min-h-0 flex-1 my-auto overflow-hidden">
                {/* Imagem Principal */}
                <div className="relative flex items-center justify-center flex-1 w-full h-full min-h-0">
                  <img
                    src={images[currentImage]}
                    alt={`${selectedService.service} - foto ${currentImage + 1} de ${images.length}`}
                    className="max-h-[66vh] lg:max-h-[80vh] w-full rounded-md object-contain"
                  />

                  {/* Setas menores no mobile */}
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Imagem anterior"
                    className="absolute left-3 lg:left-4 top-1/2 flex h-11 w-11 lg:h-14 lg:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/80 text-white shadow-xl transition-transform hover:scale-110 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Próxima imagem"
                    className="absolute right-3 lg:right-4 top-1/2 flex h-11 w-11 lg:h-14 lg:w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/80 text-white shadow-xl transition-transform hover:scale-110 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8" aria-hidden="true" />
                  </button>
                </div>

                {/* Miniaturas */}
                {images.length > 1 && (
                  <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto max-w-full lg:max-h-[80vh] pb-2 lg:pb-0 lg:pr-2 shrink-0 justify-start lg:justify-center">
                    {images.map((src, index) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Ver foto ${index + 1}`}
                        aria-current={index === currentImage}
                        className={`h-16 w-16 lg:h-20 lg:w-20 shrink-0 overflow-hidden rounded-md border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          index === currentImage
                            ? 'border-primary opacity-100 shadow-md scale-105'
                            : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={src}
                          alt={`Miniatura ${index + 1} de ${selectedService.service}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p className="my-auto text-center text-sm text-text-primary">
                Fotos deste serviço em breve.
              </p>
            )}

            <a
              href={createWhatsAppLink(selectedService.category, selectedService.service)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-lg"
            >
              <FaWhatsapp size={22} aria-hidden="true" />
              Solicitar orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  )
}