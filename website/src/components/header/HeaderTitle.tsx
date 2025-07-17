function HeaderTitle() {
  return (
    <div className="d-flex align-items-center">
      <img
        src="src/assets/profile.jpg"
        className="rounded-circle"
        style={{ width: "7em" }}
        alt="No image"
      />
      <div className="d-flex flex-column p-3">
        <h1 className="fs-3 m-0">EmDablju</h1>
        <span className="text-light-subtle m-0 d-none d-sm-block">
          This is the site dedicated to my work.
        </span>
      </div>
    </div>
  );
}

export default HeaderTitle;
