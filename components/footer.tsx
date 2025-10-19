export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Wellness Gym</h4>
            <p className="text-gray-400">Sog'lom hayot uchun eng yaxshi joyni toping.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Tezkor Havolalar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-green-400">
                  Xizmatlar
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-green-400">
                  Imkoniyatlar
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400">
                  Bog'lanish
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ijtimoiy Tarmoqlar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Wellness Gym. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
