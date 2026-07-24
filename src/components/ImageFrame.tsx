import Image from 'next/image';

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export function ImageFrame({ src, alt, className, priority = false, fill = false, sizes }: ImageFrameProps) {
  if (fill) {
    return <Image src={src} alt={alt} fill sizes={sizes || '100vw'} className={className} priority={priority} />;
  }

  return <Image src={src} alt={alt} width={1200} height={800} sizes={sizes || '(max-width: 768px) 100vw, 50vw'} className={className} priority={priority} />;
}
