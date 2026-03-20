const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle ? <p className="mt-2 text-gray-600">{subtitle}</p> : null}
    </div>
  );
};

export default SectionTitle;
