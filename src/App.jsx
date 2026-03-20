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
} from 'lucide-react';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import ActionCard from './components/ActionCard';
import ServiceCard from './components/ServiceCard';
import AnnouncementCard from './components/AnnouncementCard';
import Footer from './components/Footer';

const quickActions = [
  {
    title: 'التسجيل عبر الإنترنت',
    description: 'بدء أو استكمال التسجيل بسهولة.',
    icon: UserCheck,
  },
  {
    title: 'متابعة الملف',
    description: 'تتبع حالة الملف والطلبات.',
    icon: BookOpen,
  },
  {
    title: 'تحميل الدروس',
    description: 'الوصول السريع إلى الموارد التعليمية.',
    icon: Download,
  },
  {
    title: 'تحضير البكالوريا',
    description: 'مواد ومراجع مخصصة للبكالوريا.',
    icon: GraduationCap,
  },
];

const services = [
  { title: 'جناح التعلم', icon: School },
  { title: 'جناح التكوين', icon: Briefcase },
  { title: 'تحضير شهادة التعليم المتوسط', icon: GraduationCap },
  { title: 'إستشارات', icon: MessageCircle },
];

const digitalLearning = [
  { title: 'طريقة التعليم الجديد', icon: Globe },
  { title: 'أرضية التعليم الافتراضي', icon: BookOpen },
  { title: 'الإبثات اللغوي', icon: Languages },
];

const announcements = [
  { title: 'إعلانات هامة: تحديثات نتائج المتعلمين', date: 'آخر تحديث' },
  { title: 'إعلانات هامة: مستجدات التسجيل والخدمات', date: 'إشعار رسمي' },
];

const contact = {
  email: 'onefd@onefd.edu.dz',
  phones: ['021 00 00 00', '023 00 00 00'],
  address: 'الجزائر - الديوان الوطني للتعليم عن بعد',
};

function App() {
  return (
    <div dir="rtl" className="min-h-screen">
      <Hero />

      <main className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-12">
        <section>
          <SectionTitle title="إجراءات سريعة" subtitle="أهم الخدمات للوصول السريع" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((item) => (
              <ActionCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="الخدمات" subtitle="خدمات تعليمية إضافية" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <SectionTitle title="التعليم الرقمي" subtitle="تعرف على أدوات التعلم عن بعد" />
          <div className="grid md:grid-cols-3 gap-4">
            {digitalLearning.map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-4 flex items-start gap-3">
                <span className="text-primary bg-green-100 p-2 rounded-lg">
                  <item.icon size={18} />
                </span>
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="إعلانات هامة" subtitle="آخر المستجدات" />
          <div className="grid md:grid-cols-2 gap-4">
            {announcements.map((notice) => (
              <AnnouncementCard key={notice.title} {...notice} />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <SectionTitle title="تحتاج مساعدة؟" />
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
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
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-4">
          <SectionTitle title="معلومات عن الموقع" />
          <div className="grid sm:grid-cols-3 gap-3 text-sm text-gray-700">
            <p>تاريخ الإنشاء: متوفر على الموقع الرسمي</p>
            <p>آخر تحديث: متوفر ضمن الإعلانات الهامة</p>
            <p>عدد الزوار: متوفر عبر عداد الزيارات</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
