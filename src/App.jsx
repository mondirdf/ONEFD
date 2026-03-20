import {
  BookOpen,
  UserCheck,
  Download,
  GraduationCap,
  School,
  Briefcase,
  MessageCircle,
  Globe,
  Languages,
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
  Users,
  Clock3,
  Layers,
  ArrowLeft,
} from 'lucide-react';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import ActionCard from './components/ActionCard';
import ServiceCard from './components/ServiceCard';
import AnnouncementCard from './components/AnnouncementCard';
import Footer from './components/Footer';

const trustStats = [
  { icon: Users, label: 'أكثر من 450,000 طالب', sub: 'يستفيدون من خدماتنا سنوياً' },
  { icon: BadgeCheck, label: 'منصة رسمية', sub: 'خدمات موثوقة ومعتمدة وطنياً' },
  { icon: Clock3, label: 'خدمة 24/7', sub: 'وصول مستمر للفضاءات التعليمية' },
];

const quickActions = [
  {
    title: 'التسجيل عبر الإنترنت',
    description: 'بدء أو استكمال التسجيل بسهولة عبر خطوات واضحة.',
    icon: UserCheck,
  },
  {
    title: 'تحميل',
    description: 'تحميل الملفات، الدروس والوثائق الضرورية بسرعة.',
    icon: Download,
  },
  {
    title: 'تحضير البكالوريا',
    description: 'خطط دراسية وموارد مخصصة لاجتياز البكالوريا.',
    icon: GraduationCap,
  },
  {
    title: 'تحضير شهادة التعليم المتوسط',
    description: 'مراجعة شاملة وتمارين تطبيقية لشهادة التعليم المتوسط.',
    icon: BookOpen,
  },
];

const services = [
  {
    title: 'جناح التعلم',
    description: 'فضاء موحد لإدارة الدروس، الواجبات، والتتبع اليومي للتعلم.',
    icon: School,
  },
  {
    title: 'جناح التكوين',
    description: 'برامج تكوينية تدعم التطور الدراسي والمهارات المهنية.',
    icon: Briefcase,
  },
  {
    title: 'إستشارات',
    description: 'استفد من التوجيه والإرشاد لتحسين المسار التعليمي.',
    icon: MessageCircle,
  },
  {
    title: 'متابعة الملف',
    description: 'تتبع حالة الطلبات والملفات الإدارية بسهولة ووضوح.',
    icon: Layers,
  },
];

const digitalLearning = [
  {
    title: 'طريقة التعليم الجديد',
    text: 'مقاربة تعليمية تفاعلية تعتمد على المرونة والمتابعة المستمرة.',
    icon: Globe,
  },
  {
    title: 'أرضية التعليم الافتراضي',
    text: 'فصول افتراضية وأنشطة تفاعلية تجمع بين المحتوى والمتابعة المباشرة.',
    icon: BookOpen,
  },
  {
    title: 'الإبثات اللغوي',
    text: 'محتوى لغوي داعم للتواصل والتحصيل وفق مستويات متعددة.',
    icon: Languages,
  },
];

const announcements = [
  {
    title: 'إعلانات هامة: تحديثات نتائج المتعلمين للفصل الحالي.',
    date: 'آخر تحديث: مارس 2026',
    image: 'https://source.unsplash.com/800x600/?announcement,students',
  },
  {
    title: 'إعلانات هامة: مستجدات التسجيل والخدمات الرقمية الجديدة.',
    date: 'إشعار رسمي: مارس 2026',
    image: 'https://source.unsplash.com/800x600/?education,notice,school',
  },
];

const contact = {
  email: 'onefd@onefd.edu.dz',
  phones: ['021 00 00 00', '023 00 00 00'],
  address: 'الجزائر - الديوان الوطني للتعليم عن بعد',
};

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-emerald-50/50 via-white to-white">
      <Hero />

      <main className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-12">
        <section className="grid md:grid-cols-3 gap-4 -mt-20 relative z-10">
          {trustStats.map((stat) => (
            <article key={stat.label} className="bg-white rounded-2xl border border-emerald-100 p-5 shadow-lg shadow-emerald-100/50">
              <div className="bg-emerald-100 text-primary rounded-xl p-2 w-fit mb-3">
                <stat.icon size={20} />
              </div>
              <h3 className="font-bold text-lg mb-1">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.sub}</p>
            </article>
          ))}
        </section>

        <section>
          <SectionTitle title="إجراءات سريعة" subtitle="نفّذ أهم العمليات مباشرة عبر بطاقات تفاعلية" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((item) => (
              <ActionCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 items-center bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <div>
            <SectionTitle title="التعلم عن بعد بسهولة" subtitle="منصة متكاملة تجعل الرحلة التعليمية أكثر مرونة" />
            <p className="text-gray-600 mb-6 leading-8">
              نوفر تجربة تعلم حديثة تجمع بين المحتوى المنظم، المتابعة المستمرة، وسهولة الوصول من أي جهاز، حتى
              يتمكن الطالب من تحقيق أهدافه بكفاءة.
            </p>
            <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition">
              ابدأ الآن <ArrowLeft size={18} />
            </button>
          </div>
          <img
            src="https://source.unsplash.com/900x700/?online-learning,student"
            alt="التعلم عن بعد"
            className="rounded-2xl h-72 w-full object-cover"
            loading="lazy"
          />
        </section>

        <section>
          <SectionTitle title="الخدمات" subtitle="خدمات تعليمية شاملة تدعم رحلة الطالب" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 items-center bg-emerald-950 text-white rounded-3xl overflow-hidden">
          <img
            src="https://source.unsplash.com/900x700/?dashboard,e-learning,ui"
            alt="واجهة التعلم الرقمي"
            className="h-full min-h-72 w-full object-cover"
            loading="lazy"
          />
          <div className="p-6 md:p-8">
            <SectionTitle title="التعليم الرقمي" subtitle="حلول ذكية لتجربة تعليمية تفاعلية" className="text-white" subtitleClassName="text-emerald-100" />
            <div className="grid sm:grid-cols-1 gap-3 mt-6">
              {digitalLearning.map((item) => (
                <div key={item.title} className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-start gap-3">
                  <span className="bg-white/20 p-2 rounded-lg">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-emerald-100 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="إعلانات هامة" subtitle="آخر المستجدات والتنبيهات الرسمية" />
          <div className="grid md:grid-cols-2 gap-4">
            {announcements.map((notice) => (
              <AnnouncementCard key={notice.title} {...notice} />
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 items-center bg-white rounded-3xl border border-gray-200 p-6 md:p-8">
          <div>
            <SectionTitle title="تحتاج مساعدة؟" subtitle="فريق الدعم جاهز للإجابة على استفساراتك" />
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-2">
                <Mail className="text-primary mt-1" size={18} />
                <div>
                  <p className="font-semibold">البريد الإلكتروني</p>
                  <p>{contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="text-primary mt-1" size={18} />
                <div>
                  <p className="font-semibold">الهاتف</p>
                  {contact.phones.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="text-primary mt-1" size={18} />
                <div>
                  <p className="font-semibold">العنوان</p>
                  <p>{contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <img
            src="https://source.unsplash.com/900x700/?support,education,team"
            alt="الدعم والمساعدة"
            className="rounded-2xl h-72 w-full object-cover"
            loading="lazy"
          />
        </section>

        <section className="bg-emerald-50 rounded-2xl border border-emerald-100 p-5 md:p-6">
          <SectionTitle title="معلومات الموقع" subtitle="بيانات تعريفية وإحصاءات عامة" />
          <div className="grid sm:grid-cols-3 gap-3 text-sm text-gray-700">
            <p>تاريخ الإنشاء: 1990</p>
            <p>آخر تحديث للخدمات: مارس 2026</p>
            <p>إحصاءات المنصة: أكثر من 450,000 مستخدم نشط</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
