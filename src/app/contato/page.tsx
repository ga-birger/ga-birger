import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Mail, MapPin, Instagram, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com Gabriela Birger. Atendimento clínico em São Paulo e online. WhatsApp, email e localização do consultório.',
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 md:pt-12 pb-8 md:pb-12 bg-[var(--creme)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-[0.25em] uppercase text-[var(--terracota)] mb-4">
              Contato
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              Vamos conversar?
            </h1>
            <p className="text-[var(--preto)]/60">
              Estou disponível para atendimento clínico, dúvidas sobre o com.verso, participações em podcasts, entrevistas e parcerias.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Formas de contato */}
      <section className="py-12 md:py-16 bg-[var(--creme-escuro)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511982925279"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg hover:shadow-md transition-all group text-center"
              >
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-[var(--preto)]/60 text-sm">+55 11 98292-5279</p>
                </div>
              </a>
              
              {/* Email */}
              <a
                href="mailto:gabibirger@gmail.com"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg hover:shadow-md transition-all group text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--terracota)]/10 flex items-center justify-center text-[var(--terracota)] group-hover:bg-[var(--terracota)] group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-[var(--preto)]/60 text-sm">gabibirger@gmail.com</p>
                </div>
              </a>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/_com.verso_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg hover:shadow-md transition-all group text-center"
              >
                <div className="w-14 h-14 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-600 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-[var(--preto)]/60 text-sm">@_com.verso_</p>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Consultório com Mapa */}
      <section className="py-12 md:py-16 bg-[var(--creme)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
              Consultório
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Informações */}
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--terracota)]/10 flex items-center justify-center text-[var(--terracota)] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Endereço</p>
                    <p className="text-[var(--preto)]/60 text-sm leading-relaxed">
                      Rua Dr. Guilherme Bannitz, 126<br />
                      Conjunto 82 - Vila Nova Conceição<br />
                      São Paulo - SP, 04532-010
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--terracota)]/10 flex items-center justify-center text-[var(--terracota)] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Atendimento</p>
                    <p className="text-[var(--preto)]/60 text-sm">
                      Presencial e Online<br />
                      Mediante agendamento
                    </p>
                  </div>
                </div>
                
                <a
                  href="https://wa.me/5511982925279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--preto)] text-white text-sm tracking-wider rounded-lg hover:bg-[var(--terracota)] transition-all duration-300 w-full justify-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Agendar consulta
                </a>
              </div>
              
              {/* Mapa */}
              <div className="rounded-lg overflow-hidden shadow-md h-[300px] md:h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7424073454384!2d-46.67583492378673!3d-23.58436166349655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce575f5a5e8c8d%3A0x7dbd730c9c2a1e3c!2sR.%20Dr.%20Guilherme%20Bannitz%2C%20126%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004532-060!5e0!3m2!1spt-BR!2sbr!4v1701234567890!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Consultório"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
