'use client';
import Image from 'next/image';

type GalleryImage = {
    name: string;
    classes: string;
    src: string;
    alt: string;
};

type ResponsiveGalleryProps = {
    images: GalleryImage[];
};

export function ResponsiveGallery({ images }: ResponsiveGalleryProps) {
    return (
        <div className={`w-full grid grid-cols-1 gap-2 sm:grid-cols-3 sm:aspect-[3/2] rounded-lg overflow-hidden `}>
            {images.map(({ name, classes, src, alt }) => {
                return (
                    <div key={name} className={classes}>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            priority={name === 'primary'}
                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                            onLoad={(event) => {
                                event.currentTarget.classList.remove('animate-pulse', 'bg-[#d6dde1]', 'opacity-0');
                            }}
                            className="transition-opacity duration-700 opacity-0 object-cover animate-pulse bg-[#d6dde1]"
                        />
                    </div>
                );
            })}
        </div>
    );
}