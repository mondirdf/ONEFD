import SafeImage from './SafeImage';
import { DEFAULT_IMAGE, IMAGE_FALLBACKS } from '../constants/images';

const ActionCard = ({ icon: Icon, title, description, image }) => {
  return (
    <button className="w-full text-right bg-white rounded-xl border border-gray-200 p-5 hover:border-primary hover:shadow-sm transition">
      <div className="flex items-start gap-3">
        <div className="bg-green-100 p-2 rounded-lg text-primary">
          <Icon size={20} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          <div className="h-20 w-full">
            <SafeImage src={image || DEFAULT_IMAGE} fallbackSources={IMAGE_FALLBACKS} alt={title} />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ActionCard;
