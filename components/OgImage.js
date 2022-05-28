import Image from "next/image";
function OgImage({ src, alt }) {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden">
      <Image
        title={alt}
        alt={alt}
        src={src}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={src}
        quality={75}
      />
    </div>
  );
}

export default OgImage;