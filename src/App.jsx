import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Menu } from "lucide-react";

export default function App() {
  const testimonials = [
    { name: "Mariana R.", text: "A melhor experiência! Meu realismo ficou impecável!", stars: 5 },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % gallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-6 bg-neutral-900 shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">Studio Kawan Art</h1>
        <Menu className="w-6 h-6" />
      </header>

      <main>
        <section className="text-center py-20 bg-gradient-to-b from-neutral-900 to-black">
          <h2 className="text-4xl font-bold mb-4">Tatuagens com Alma e Precisão</h2>
          <p className="text-neutral-400 mb-8">Transformando ideias em arte na pele</p>
          <a
            href="https://wa.me/5511950231858?text=Ol%C3%A1%2C%20quero%20fazer%20uma%20tatuagem!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold text-white hover:bg-green-600 transition"
          >
            Agendar pelo WhatsApp
          </a>
        </section>

        <section id="galeria" className="py-16 text-center">
          <h3 className="text-3xl font-semibold mb-8">Galeria</h3>
          <motion.img
            key={current}
            src={gallery[current]}
            alt="Tatuagem"
            className="mx-auto w-80 h-80 object-cover rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </section>

        <section id="avaliacoes" className="py-16 bg-neutral-900 text-center">
          <h3 className="text-3xl font-semibold mb-8">Avaliações</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-neutral-800 p-6 rounded-xl shadow-md w-80 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <p className="italic mb-3">"{t.text}"</p>
                <div className="flex justify-center text-yellow-400 mb-2">
                  {Array(t.stars).fill().map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="font-semibold">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contato" className="py-16 text-center">
          <h3 className="text-3xl font-semibold mb-6">Entre em Contato</h3>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://wa.me/5511950231858?text=Ol%C3%A1%2C%20quero%20fazer%20um%20or%C3%A7amento!"
              target="_blank"
              className="bg-green-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-600"
            >
              💬 WhatsApp
            </a>

            <a
              href="mailto:studiokawanart@gmail.com?subject=Or%C3%A7amento%20de%20tatuagem"
              className="bg-gray-700 px-6 py-3 rounded-lg text-white font-semibold hover:bg-gray-600"
            >
              📧 Enviar Email
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-neutral-500 text-sm">
        © {new Date().getFullYear()} Studio Kawan Art — Todos os direitos reservados.
{/* Botão flutuante do WhatsApp */}
<a
  href="https://wa.me/5511950231858?text=Ol%C3%A1%2C%20quero%20fazer%20uma%20tatuagem!"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-8 h-8"
  />
</a>

      </footer>
    </div>
  );
}

