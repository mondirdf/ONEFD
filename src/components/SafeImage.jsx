import { useMemo, useState } from 'react';

const normalizeUrl = (url) => (url.includes('sig=') ? url : `${url}${url.includes('?') ? '&' : '?'}sig=${Math.random().toString(36).slice(2, 8)}`);

const SafeImage = ({ src, fallbackSources = [], alt, className, loading = 'lazy' }) => {
  const sources = useMemo(() => [src, ...fallbackSources].filter(Boolean).map(normalizeUrl), [src, fallbackSources]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleError = () => {
    setCurrentIndex((prev) => (prev < sources.length - 1 ? prev + 1 : prev));
  };

  return (
    <img
      src={sources[currentIndex]}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
    />
  );
};

export default SafeImage;
