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
          <img
            src={image}
            alt={title}
            className="h-20 w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </button>
  );
};

export default ActionCard;
