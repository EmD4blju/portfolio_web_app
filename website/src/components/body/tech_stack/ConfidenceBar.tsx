interface ConfidenceBarProperties {
  level: number;
}

function ConfidenceBar({ level }: ConfidenceBarProperties) {
  return (
    <div className="h-25 d-flex justify-content-center align-items-center">
      <div
        className="progress w-100 rounded-pill bg-dark"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar bg-light"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ConfidenceBar;
