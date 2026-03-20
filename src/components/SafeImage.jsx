const SafeImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover rounded-xl"
      loading="lazy"
    />
  );
};

export default SafeImage;
