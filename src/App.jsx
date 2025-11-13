import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Menu } from "lucide-react";

export default function App() {
  const testimonials = [
    { name: "Mariana R.", text: "A melhor experiência! Meu realismo ficou impecável.", stars: 5 },
    { name: "Lucas P.", text: "Atendimento top e resultado melhor ainda!", stars: 5 },
    { name: "Fernanda T.", text: "Kawan transformou minha ideia em arte. Perfeito!", stars: 5 },
  ];

  const gallery = [
    "/images/tattoo1.jpg",
    "/images/tattoo2.jpg",
    "/images/tattoo3.jpg",
    "/images/tattoo4.jpg",
    "/images/tattoo5.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % gallery.length), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-white font-bold text-xl tracking-wide">Kawan_Art</a>

          <div className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#galeria" className="hover:text-white">Galeria</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#depoimentos" className="hover:text-white">Depoimentos</a>
            <a href="#agendamento" className="bg-[#6b0f1a] px-4 py-2 rounded-full text-white">Agende sua sessão</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpenMenu(!openMenu)} aria-label="menu">
            <Menu />
          </button>
        </div>

        {/* Mobile menu */}
        {openMenu && (
          <div className="md:hidden px-4 pb-4">
            <a href="#home" className="block py-2">Home</a>
            <a href="#galeria" className="block py-2">Galeria</a>
            <a href="#sobre" className="block py-2">Sobre</a>
            <a href="#depoimentos" className="block py-2">Depoimentos</a>
            <a href="#agendamento" className="block py-2 font-semibold">Agende sua sessão</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="h-screen flex flex-col justify-center items-center text-center bg-[url('/images/studio-bg.jpg')] bg-cover bg-center bg-no-repeat bg-black/60" style={{ paddingTop: 64 }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide"
        >
          Kawan_Art
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl"
        >
          Arte que marca sua história.
        </motion.p>
        <a href="#agendamento" className="inline-block">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="bg-[#8d1320] hover:bg-[#7a1018] text-white text-lg px-8 py-4 rounded-full shadow-lg">
            Agende sua sessão
          </motion.button>
        </a>
      </header>

      {/* Gallery Section */}
      <main>
        <section id="galeria" className="py-20 bg-neutral-900 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-white">Galeria</h2>
          <div className="relative w-full max-w-4xl mx-auto px-4">
            <motion.img
              key={current}
              src={gallery[current]}
              alt="Tatuagem do estúdio"
              className="rounded-2xl shadow-lg w-full h-[450px] object-cover transition-all duration-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <button
              onClick={() => setCurrent((c) => (c - 1 + gallery.length) % gallery.length)}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full"
              aria-label="anterior"
            >
              ◀
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % gallery.length)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full"
              aria-label="próximo"
            >
              ▶
            </button>

            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((g, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-neutral-700'}`} aria-label={`slide ${i+1}`} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-black text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6 text-white">Sobre o artista</h2>
            <div className="md:flex md:items-center md:gap-8">
              <img src="/images/kawan-portrait.jpg" alt="Kawan" className="w-56 h-56 object-cover rounded-xl mx-auto md:mx-0 shadow-md border border-neutral-800" />
              <div className="mt-6 md:mt-0 text-left text-gray-300">
                <p className="mb-4">Kawan é artista premiado com foco em tatuagens personalizadas, realismo e fineline. Com mais de X anos de experiência, ele trabalha para transformar histórias pessoais em arte permanente — com técnica, respeito e segurança.</p>
                <p className="text-sm text-gray-400">Especialidades: Realismo | Fineline | Cover-ups | Consultoria de design personalizada</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking / Agendamento Section */}
        <section id="agendamento" className="py-20 bg-neutral-900 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">Agende sua sessão</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Escolha data e horário conforme a disponibilidade. Se preferir, envie detalhes do seu projeto pelo formulário abaixo para receber um orçamento.</p>

          <div className="max-w-4xl mx-auto px-4 md:flex md:gap-8">
            {/* Calendly embed (fallback to link if blocked) */}
            <div className="md:flex-1 mb-6 md:mb-0">
              <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-lg">
                {/* Calendly iframe - substitua o src pelo seu link do Calendly */}
                <iframe
                  title="Calendly"
                  src="https://calendly.com/kawan_art/tatuagem?embed_domain=vercel.app&embed_type=Inline"
                  style={{ minHeight: 600 }}
                  className="w-full"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">Se o embed não carregar, <a href="https://calendly.com/kawan_art/tatuagem" className="underline">clique aqui para agendar diretamente</a>.</p>
            </div>

            {/* Simple contact form fallback */}
            <form className="md:flex-1 bg-black border border-neutral-800 rounded-xl p-6 text-left" onSubmit={(e) => { e.preventDefault(); alert('Obrigado! Recebemos sua solicitação.'); }}>
              <label className="block mb-2 text-sm text-gray-300">Nome</label>
              <input required className="w-full mb-4 p-3 rounded bg-neutral-900 border border-neutral-800" />

              <label className="block mb-2 text-sm text-gray-300">E-mail</label>
              <input required type="email" className="w-full mb-4 p-3 rounded bg-neutral-900 border border-neutral-800" />

              <label className="block mb-2 text-sm text-gray-300">Descrição do projeto</label>
              <textarea required className="w-full mb-4 p-3 rounded bg-neutral-900 border border-neutral-800 h-32" />

              <button type="submit" className="mt-2 bg-[#8d1320] px-5 py-3 rounded-full text-white">Enviar solicitação</button>
            </form>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-20 bg-black text-center">
          <h2 className="text-3xl font-semibold mb-10 text-white">Depoimentos</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-md text-left">
                <p className="text-gray-300 mb-4 italic">“{t.text}”</p>
                <div className="flex mb-2">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={18} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-400 font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 text-gray-500 text-center py-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
            <p>© 2025 Kawan_Art. Todos os direitos reservados.</p>
            <div className="text-sm text-gray-400">Rua Exemplo, 123 • Cidade • Estado</div>
          </div>
        </div>
      </footer>

      <style jsx>{`html { scroll-behavior: smooth; }`} </style>
    </div>
  );
}
