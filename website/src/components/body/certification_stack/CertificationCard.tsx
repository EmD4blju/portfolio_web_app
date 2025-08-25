import { useEffect, useRef, useState } from "react";

export interface CertificationCardProperties {
  title: string;
  description: string;
  badge: string;
}

function CertificationCard({
  title,
  description,
  badge,
}: CertificationCardProperties) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsVisible(entry.isIntersecting)
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      className={`certification-card ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-50"
      }`}
      ref={ref}
    >
      <h2 className="certification-card-header">{title}</h2>
      <div className="certification-card-main">
        <img src={badge} alt="" />
        <p className="certification-card-description max-sm:hidden">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CertificationCard;
