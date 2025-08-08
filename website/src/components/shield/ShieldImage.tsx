export interface ShieldImageProperties {
  src: string;
  alt: string;
}

function ShieldImage({ src, alt }: ShieldImageProperties) {
  return <img src={src} alt={alt} />;
}

export default ShieldImage;
