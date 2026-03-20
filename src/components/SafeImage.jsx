import { DEFAULT_IMAGE, IMAGE_FALLBACKS } from '../constants/images';

const SafeImage = ({ src, alt, fallbackSources = IMAGE_FALLBACKS }) => {
  const normalizedFallbacks =
    Array.isArray(fallbackSources) && fallbackSources.length > 0
      ? fallbackSources
      : IMAGE_FALLBACKS;

  const initialSource = src || DEFAULT_IMAGE;

  console.log('IMAGE:', src);

  const handleError = (event) => {
    const currentStep = Number(event.currentTarget.dataset.fallbackStep || 0);
    const fallbackChain = [...normalizedFallbacks, DEFAULT_IMAGE];
    const nextSource = fallbackChain[currentStep];

    if (nextSource) {
      event.currentTarget.src = nextSource;
      event.currentTarget.dataset.currentSource = nextSource;
      event.currentTarget.dataset.fallbackStep = String(currentStep + 1);
    }
  };

  return (
    <img
      src={initialSource}
      data-current-source={initialSource}
      data-fallback-step="0"
      alt={alt}
      className="w-full h-full object-cover rounded-xl"
      loading="lazy"
      onError={handleError}
    />
  );
};

export default SafeImage;
