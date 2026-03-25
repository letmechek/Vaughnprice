type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <div className={`leading-none ${className}`}>
      <div className="text-[11px] uppercase tracking-[0.38em] text-[var(--cyan)]">Vaughn Price</div>
      <div
        className="mt-1 text-[1.22rem] font-semibold tracking-[-0.04em] text-[var(--ink)]"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Systems Lab
      </div>
    </div>
  );
}
