const ActionCard = ({ icon: Icon, title, description }) => {
  return (
    <button className="w-full text-right bg-white rounded-xl border border-gray-200 p-5 hover:border-primary hover:shadow-sm transition">
      <div className="flex items-start gap-3">
        <div className="bg-green-100 p-2 rounded-lg text-primary">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default ActionCard;
