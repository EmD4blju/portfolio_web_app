import profile from "@assets/profile.jpg";

function HeaderTitle() {
  return (
    <div className="d-none d-lg-flex align-items-center m-0">
      <img
        src={profile}
        className="rounded-circle"
        style={{ width: "4.3em" }}
        alt="profile"
      />
      <div className="d-flex flex-column p-3">
        <h1 className="fs-5 m-0">EmDablju</h1>
        <span className="text-light-subtle m-0 d-sm-block">
          This is the site dedicated to my work.
        </span>
      </div>
    </div>
  );
}

export default HeaderTitle;
