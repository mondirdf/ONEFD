const ServiceCard = ({ title }) => {
  return (
    <button className="w-full bg-white border border-gray-200 rounded-lg p-4 text-right font-semibold hover:border-primary transition">
      {title}
    </button>
  );
};

export default ServiceCard;
