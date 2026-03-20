import SafeImage from './SafeImage';
import { DEFAULT_IMAGE, IMAGE_FALLBACKS } from '../constants/images';

const AnnouncementCard = ({ title, date, image }) => {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="h-36 w-full">
        <SafeImage src={image || DEFAULT_IMAGE} fallbackSources={IMAGE_FALLBACKS} alt={title} />
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="font-bold text-lg mb-4 leading-relaxed">{title}</h3>
        <button className="text-primary font-semibold hover:underline">عرض التفاصيل</button>
      </div>
    </article>
  );
};

export default AnnouncementCard;
