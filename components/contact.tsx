export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Bog'lanish</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-6">Manzil</h3>
            <p className="text-green-900 text-lg font-semibold mb-2">Yunusobottumani 4-mavze, 69a</p>
            <p className="text-green-700 mb-6">Tashkent, O'zbekiston</p>

            <h3 className="text-xl font-semibold text-green-700 mb-4">Bog'lanish Raqamlari</h3>
            <p className="text-green-900 mb-2">
              <span className="font-semibold">Telefon:</span> +998  (91) 250 89 89
            </p>
            <p className="text-green-900 mb-4">
              <span className="font-semibold">Email:</span> info@wellnessgym.uz
            </p>

            <h3 className="text-xl font-semibold text-green-700 mb-4">Ish Vaqti</h3>
            <p className="text-green-900">Dushanba - Yakshanba: 06:00 - 23:00</p>
          </div>

          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500 bg-gray-700 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500 bg-gray-700 text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Xabar"
                rows={4}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500 bg-gray-700 text-white placeholder-gray-400"
              ></textarea>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
