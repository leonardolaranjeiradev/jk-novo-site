import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { FileText } from 'lucide-react'


type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

// ─────────────────────────────────────────────────────────────
// EmailJS — substitua pelas suas credenciais reais antes de publicar.
// Crie uma conta em https://www.emailjs.com/ e gere um Service, um
// Template e a Public Key. Nenhum dado é salvo em banco: o envio vai
// direto para o e-mail configurado no template do EmailJS.
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function TrabalheConosco() {
    const formRef = useRef<HTMLFormElement>(null)
    const [, setStatus] = useState<SubmitStatus>('idle')
    const [formOpen, setFormOpen] = useState(false)
    const [cargo, setCargo] = useState('') 
    const [outroCargo, setOutroCargo] = useState('')
    const [possuiCNH, setPossuiCNH] = useState('')
    const [categoriaCNH, setCategoriaCNH] = useState('')



    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    try {
      console.log('Service:', EMAILJS_SERVICE_ID)
      console.log('Template:', EMAILJS_TEMPLATE_ID)
      console.log('PublicKey:', EMAILJS_PUBLIC_KEY)
      console.log('Enviando...')
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setStatus('success')
      alert('✅ Candidatura enviada com sucesso!')
      formRef.current.reset()

      setCargo('')
      setOutroCargo('')
      setPossuiCNH('')
      setCategoriaCNH('')

    } catch (error) {
      console.error('Erro ao enviar candidatura:', error)
      setStatus('error')
    }
  }

    return (


            <section id="trabalhe-conosco" className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-light lg:flex-row lg:items-center">

                    {/* Foto do capacete à esquerda, com recorte diagonal.
                        Usa /trabalhe-capacete.png quando existir; senão, a arte já existente do capacete. */}
                    <div
                      aria-hidden="true"
                      className="relative h-64 bg-[#0E1013] bg-cover bg-[50%_72%] lg:bg-center [clip-path:polygon(0_0,100%_0,100%_86%,0_100%)] sm:h-80 lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[40%] lg:[clip-path:polygon(0_0,91%_0,100%_100%,0_100%)]"
                      style={{ backgroundImage: 'url(/trabalhe-capacete.png), url(/capacete-muro.png)' }}
                    />

                    {/* Profissional em marca d'água à direita (opcional) */}
                    <img
                      src="/trabalhe-operario.png"
                      alt=""
                      aria-hidden="true"
                      onError={(event) => (event.currentTarget.style.display = 'none')}
                      className="pointer-events-none absolute bottom-0 right-0 hidden h-[92%] opacity-20 grayscale lg:block"
                    />

                    <div className="relative w-full px-6 py-16 lg:py-24 lg:pl-[44%] lg:pr-[6%]">
                        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">

                        {/* Coluna Esquerda */}
                        <div className="relative max-w-[560px]">
                        <p className="section-heading-eyebrow eyebrow-dark">
                          <span>Trabalhe <span className="text-primary">Conosco</span></span>
                        </p>
                        <h2 className="mt-5 font-heading text-3xl font-bold leading-[1.2] text-ink sm:text-[2.1rem]">
                        Construa o seu futuro junto com a <span className="text-primary">JKMCS</span>
                        </h2>
                        <p className="mt-5 text-[14px] leading-relaxed text-ink-soft">
                        Grandes obras exigem profissionais preparados. Na JKMCS, valorizamos a constante evolução de nossos colaboradores e parceiros,
                        reconhecendo o papel fundamental de cada profissional no sucesso dos nossos empreendimentos.
                        </p>

                        <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
                          Mapeamos o seu potencial por meio de um formulário de habilidades e investimos na sua evolução constante com treinamentos técnicos e certificações essenciais de segurança (NR06, NR10 e NR35).
                          Queremos preparar, capacitar e reter a melhor mão de obra do mercado. Se você busca crescimento profissional e um ambiente seguro para trabalhar, venha fazer parte dos nossos projetos!
                        </p>
                        </div>

                        {/* Coluna Direita */}
                        <div className="flex flex-col items-start lg:items-end lg:pt-24">
                        <button
                            type="button"
                            onClick={() => setFormOpen(!formOpen)}
                            aria-expanded={formOpen}
                            className="btn-primary px-6 py-3 normal-case tracking-normal">
                            <FileText size={17} aria-hidden="true" />
                            Candidatar-se
                        </button>

                        {formOpen && (
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="mt-6 w-full max-w-[350px] rounded-xl border border-primary/20 bg-[#16191D] p-6 shadow-2xl">

                        <div className="space-y-4">
                            <input
                            type="text"
                            name="name"
                            placeholder="Nome Completo"
                            required
                            className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary placeholder:text-white"/>

                            <input
                            type="number"
                            name="idade"
                            min="18"
                            max="99"
                            placeholder="Idade"
                            required
                            className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary placeholder:text-white"/>

                            <input
                            type="text"
                            name="cidade"                            
                            placeholder="Cidade"
                            required
                            className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary placeholder:text-white"/>

                            <input
                            type="tel"
                            name="phone"
                            maxLength={11}
                            placeholder="Telefone"
                            required
                            className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary placeholder:text-white"/>

                            <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                            className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary placeholder:text-white"/>

                            <select 
                            name="possuiCNH" 
                            value={possuiCNH} onChange={(e) => setPossuiCNH(e.target.value)} 
                            required
                            className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary" >

                              <option value="">Possui CNH?</option>
                              <option value="Sim">Sim</option>
                              <option value="Não">Não</option>

                            </select>

                            {possuiCNH === 'Sim' && (
                              <select 
                              name="categoriaCNH" 
                              value={categoriaCNH} onChange={(e) => setCategoriaCNH(e.target.value)} 
                              required
                              className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary" >

                                <option value="">Categoria da CNH</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="AB">AB</option>
                                <option value="AC">AC</option>
                                <option value="AD">AD</option>
                                <option value="AE">AE</option>
                              </select>
                            )}


                            <input
                            type="number"
                            name="salario"
                            min="1000"
                            max="10000"
                            placeholder="Pretensão Salarial"
                            required
                            className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary placeholder:text-white"/>

                            <select 
                            name="disponibilidade" 
                            required
                            className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary" >
                              <option value="">Disponibilidade para Viagens?</option>
                              <option value="Sim">Sim</option>
                              <option value="Não">Não</option>
                              <option value="A Combinar">A Combinar</option>
                            </select>

                           <select 
                           name="cargo" 
                           value={cargo} onChange={(e) => setCargo(e.target.value)} 
                           required
                           className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary">

                              <option value="">Cargo Desejado</option>
                              <option value="Ajudante Geral / Servente">Ajudante Geral / Servente</option>
                              <option value="Almoxarife">Almoxarife</option>
                              <option value="Arquiteto(a)">Arquiteto(a)</option>
                              <option value="Armador / Ferreiro">Armador / Ferreiro</option>
                              <option value="Azulejista / Pastilheiro">Azulejista / Pastilheiro</option>
                              <option value="Carpinteiro">Carpinteiro</option>
                              <option value="Eletricista">Eletricista</option>
                              <option value="Encanador / Bombeiro Hidráulico">Encanador / Bombeiro Hidráulico</option>
                              <option value="Engenheiro(a) Civil">Engenheiro(a) Civil</option>
                              <option value="Gesseiro">Gesseiro</option>
                              <option value="Mestre de Obras">Mestre de Obras</option>
                              <option value="Motorista / Operador de Máquinas">Motorista / Operador de Máquinas</option>
                              <option value="Pedreiro">Pedreiro</option>
                              <option value="Pintor">Pintor</option>
                              <option value="Serralheiro">Serralheiro</option>
                              <option value="Técnico(a) em Edificações">Técnico(a) em Edificações</option>
                              <option value="Técnico(a) em Segurança do Trabalho">Técnico(a) em Segurança do Trabalho</option>
                              <option value="Vidraceiro">Vidraceiro</option>
                              <option value="Outros">Outros</option>
                           </select>

                           {cargo === 'Outros' && (
                                 <input type="text" 
                                  name="cargo_personalizado" 
                                  value={outroCargo} onChange={(e) => setOutroCargo(e.target.value)} 
                                  placeholder="Digite o cargo desejado" 
                                  required={cargo === 'Outros'}
                                  className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary placeholder:text-white" />
                            )}                       

                            <textarea
                            name="experience"
                            placeholder="Descreva sua experiência"
                            rows={4}
                            required
                            className="w-full rounded-md border border-border-subtle bg-background px-4 py-2 text-sm text-text-primary resize-none placeholder:text-white"/>
                            
                            <button
                            type="submit"
                            className="w-full rounded-md bg-primary px-4 py-2 font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                            Enviar Candidatura
                            </button>
                        </div>            
                        </form>
                        )}
                        </div>
                      </div>
                  </div>
                  {/* Recorte diagonal para a seção escura "Contato" */}
                  <svg
                    className="pointer-events-none absolute inset-x-0 -bottom-px z-10 h-[40px] w-full sm:h-[60px]"
                    viewBox="0 0 1440 60"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M0 30 C 200 46 380 50 560 40 C 800 26 1100 30 1440 16 V60 H0 Z" fill="#121417" />
                  </svg>
            </section>
    )
}