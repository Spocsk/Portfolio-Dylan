export default function PixelPlaceholder({ seed }: { seed: string }) {
  const cells = Array.from({ length: 154 }, (_, index) => {
    const code = seed.charCodeAt(index % seed.length) || 65;
    const tier = (code + index * 7) % 6;
    return (
      <span
        key={`${seed}-${index}`}
        className={`pf-pixel pf-pixel-${tier}`}
        aria-hidden="true"
      />
    );
  });
  return <div className="pf-pixel-matrix">{cells}</div>;
}
