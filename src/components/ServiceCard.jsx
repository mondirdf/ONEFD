import SafeImage from './SafeImage';

const ServiceCard = ({ title, description, icon: Icon, image, fallbackSources = [] }) => {
  return (
    <button className="w-full bg-white border border-gray-200 rounded-2xl p-5 text-right hover:border-primary hover:shadow-md transition">
      <div className="bg-green-100 p-2 rounded-xl text-primary inline-flex mb-4">
        <Icon size={18} />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-6 mb-4">{description}</p>
      <SafeImage
        src={image}
        fallbackSources={fallbackSources}
        alt={title}
        className="h-28 w-full rounded-xl object-cover"
        loading="lazy"
      />
    </button>
  );
};

export default ServiceCard;
