const AnnouncementCard = ({ title, date }) => {
  return (
    <article className="bg-white border border-gray-200 rounded-xl p-5">
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <button className="text-primary font-semibold hover:underline">عرض التفاصيل</button>
    </article>
  );
};

export default AnnouncementCard;
