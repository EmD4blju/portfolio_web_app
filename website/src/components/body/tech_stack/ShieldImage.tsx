export interface ShieldImageProperties {
  src: string;
  alt: string;
}

function ShieldImage({ src, alt }: ShieldImageProperties) {
  return <img src={src} alt={alt} className="rounded-pill" height="20" />;
}

export default ShieldImage;
