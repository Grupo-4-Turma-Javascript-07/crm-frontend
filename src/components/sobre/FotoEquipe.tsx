import React from 'react';

type FotoEquipeProps = {
  src: string;
  alt: string;
  github: string;
};
function FotoEquipe({ src, alt, github }: FotoEquipeProps) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <img
          src={src}
          alt={alt}
          className="rounded-full w-24 h-24 object-cover border-1 border-purple-700 shadow-lg hover:shadow-purple-700 transition"
        />
      </a>
      <span className="mt-2 text-center text-roxo-100 font-semibold">
        {alt}
      </span>
    </div>
  );
}

export default FotoEquipe;
