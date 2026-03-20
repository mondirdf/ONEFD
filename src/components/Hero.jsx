const Hero = ({ backgroundImage }) => {
  return (
    <section
      className="relative overflow-hidden border-b border-emerald-100"
      style={{
        backgroundImage:
          `linear-gradient(110deg, rgba(2,44,34,.88), rgba(5,150,105,.72)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 text-white relative">
        <p className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold mb-5 border border-white/30">
          ONEFD • منصة تعليمية رقمية
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          الديوان الوطني للتعليم عن بعد
        </h1>
        <h2 className="text-xl md:text-3xl text-emerald-50 mb-3">التعلم الحديث في أي وقت ومن أي مكان</h2>
        <p className="text-emerald-50/90 mb-8 max-w-2xl">
          تجربة تعليمية متكاملة تشمل التسجيل، التحميل، التحضير للامتحانات الرسمية، والتوجيه عبر فضاء رقمي حديث
          وسهل الاستخدام.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-white text-emerald-800 px-7 py-3 rounded-xl font-bold hover:bg-emerald-50 transition shadow-lg shadow-black/20">
            التسجيل عبر الإنترنت
          </button>
          <button className="bg-emerald-900/40 border border-white/60 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-900/60 transition">
            استكشف جناح التعلم
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
