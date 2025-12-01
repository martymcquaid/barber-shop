import React, { useState } from 'react';

export default function Carousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full mx-auto max-w-4xl">
      <div className="relative">
        <img src={images[idx]} alt="Carousel" className="w-full h-60 object-cover rounded-lg" />
        <button aria-label="Previous" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">‹</button>
        <button aria-label="Next" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">›</button>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${i === idx ? 'bg-white' : 'bg-gray-400'}`} />
        ))}
      </div>
    </div>
  );
}
