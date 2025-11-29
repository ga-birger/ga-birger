import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[var(--creme)]">
      <div className="text-center px-6">
        <p className="text-8xl md:text-9xl font-serif text-[var(--terracota)]/20 mb-4">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">
          Página não encontrada
        </h1>
        <p className="text-[var(--preto)]/60 mb-8 max-w-md mx-auto">
          O conteúdo que você procura pode ter sido movido ou não existe mais.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--preto)] text-white text-sm tracking-wider rounded-lg hover:bg-[var(--terracota)] transition-all duration-300"
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  )
}

