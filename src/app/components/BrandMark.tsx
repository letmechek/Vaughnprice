import Image from 'next/image';

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <div className={`w-[132px] sm:w-[148px] md:w-[168px] lg:w-[188px] ${className}`}>
      <Image
        src="/logo.png"
        alt="Vaughn Price Limited"
        width={1271}
        height={336}
        priority
        sizes="(max-width: 640px) 132px, (max-width: 768px) 148px, (max-width: 1024px) 168px, 188px"
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
