export default function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Qo'shimcha Imkoniyatlar</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-700">
            <h3 className="text-2xl font-bold text-green-400 mb-3">🏋️</h3>
            <h4 className="text-lg font-semibold text-white mb-2">Kardio Zona</h4>
            <p className="text-gray-300">Eng yangi kardio mashinalari va treadmilllar</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-700">
            <h3 className="text-2xl font-bold text-green-400 mb-3">🍹</h3>
            <h4 className="text-lg font-semibold text-white mb-2">Mini Bar</h4>
            <p className="text-gray-300">Sog'lom ichimliklar va energiya ichimliklari</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-700">
            <h3 className="text-2xl font-bold text-green-400 mb-3">🚿</h3>
            <h4 className="text-lg font-semibold text-white mb-2">Locker Rooms</h4>
            <p className="text-gray-300">Zamonaviy va toza o'zgarish xonalari</p>
          </div>
        </div>
      </div>
    </section>
  )
}
