interface TechCardProperties {
  heading: string;
  imgPath: string;
}

function TechCard({ heading, imgPath }: TechCardProperties) {
  return (
    <div className="p-3 w-25 d-flex flex-column flex-wrap flex-md-nowrap justify-content-center">
      <h1 className="text-center">{heading}</h1>
      <div className="d-flex">
        <img src={imgPath} alt="image" className="" width={200} height={200} />
        <div className="flex-fill d-flex flex-column">
          <div className="p-1 h-50 d-flex flex-wrap justify-content-center  align-items-center gap-1">
            <img
              src="https://img.shields.io/badge/Jupyter%20Notebook-F37626?style=flat-square&logo=jupyter&logoColor=white"
              alt="Jupyter Notebook"
              className="rounded-pill"
              height="20"
            />
            <img
              src="https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white"
              alt="Pandas"
              className="rounded-pill"
              height="20"
            />
            <img
              src="https://img.shields.io/badge/Numpy-013243?style=flat-square&logo=numpy&logoColor=white"
              alt="Numpy"
              className="rounded-pill"
              height="20"
            />
            <img
              src="https://img.shields.io/badge/Seaborn-4C72B0?style=flat-square&logo=seaborn&logoColor=white"
              alt="Seaborn"
              className="rounded-pill"
              height="20"
            />
            <img
              src="https://img.shields.io/badge/Matplotlib-11557C?style=flat-square&logo=matplotlib&logoColor=white"
              alt="Matplotlib"
              className="rounded-pill"
              height="20"
            />
            <img
              src="https://img.shields.io/badge/Seaborn-4C72B0?style=flat-square&logo=seaborn&logoColor=white"
              alt="Seaborn"
              className="rounded-pill"
              height="20"
            />
            <img
              src="https://img.shields.io/badge/Matplotlib-11557C?style=flat-square&logo=matplotlib&logoColor=white"
              alt="Matplotlib"
              className="rounded-pill"
              height="20"
            />
            <img
              src="https://img.shields.io/badge/Seaborn-4C72B0?style=flat-square&logo=seaborn&logoColor=white"
              alt="Seaborn"
              className="rounded-pill"
              height="20"
            />
          </div>
          <div className="h-50 d-flex justify-content-center align-items-center">
            <div
              className="progress m-0 h-25 w-75 rounded-pill"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar progress-bar bg-info text-black"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCard;
