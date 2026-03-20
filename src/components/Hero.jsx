const Hero = () => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
        <p className="text-primary font-semibold mb-2">ONEFD</p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">الديوان الوطني للتعليم عن بعد</h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-3">كل خدماتك في مكان واحد</h2>
        <p className="text-gray-600 mb-8">سجل، تابع، وحمّل بسهولة</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
            تسجيل الدخول
          </button>
          <button className="bg-white border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
            التسجيل الجديد
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
