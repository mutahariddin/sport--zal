export default function Features() {
  const features = [
    {
      title: "Zamonaviy Jihozlar",
      description: "Eng yangi fitness jihozlari va texnologiyalari bilan jihozlangan",
    },
    {
      title: "Professional Trenerlar",
      description: "Sertifikatlangan va tajribali trenerlar sizning maqsadingizga yordam beradi",
    },
    {
      title: "Guruhlashtirilgan Darslar",
      description: "Yoga, zumba, pilates va boshqa ko'p xil darslar",
    },
    {
      title: "Sauna va Spa",
      description: "Relaksatsiya va tiklash uchun premium sauna va spa xizmatlar",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Bizning Xizmatlar</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-700 rounded-lg hover:shadow-lg transition bg-gray-900">
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
