import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const userInfoJson = localStorage.getItem("@userInfo");
  let userInfo;
  if (userInfoJson) {
    userInfo = JSON.parse(userInfoJson);
  }

  const handleLogout = () => {
    localStorage.removeItem("@userInfo");
    navigate("/login");
  };

  return (
    <nav className="flex px-20 justify-between py-3 bg-gray-100">
      <div>
        <NavLink to="/">
          <h1 className="text-xl font-semibold">Placement cell</h1>
        </NavLink>
      </div>

      {userInfo ? (
        <>
          <ul className=" flex gap-5 text-indigo-500 font-semibold">
            <li>
              <NavLink to={"/"}>Students</NavLink>
            </li>
            <li>
              <NavLink to={"/interviews"}>Interviews</NavLink>
            </li>
          </ul>

          <div>
            <span>
              Hello{" "}
              <span className="text-blue-600 font-bold">
                {userInfo?.fullName}
              </span>
            </span>
            <span
              onClick={handleLogout}
              className="px-3 py-1 ml-10 bg-indigo-600 rounded-md text-white cursor-pointer"
            >
              Logout
            </span>
          </div>
        </>
      ) : (
        <div>
          <NavLink
            to="/login"
            className="px-3 py-1 ml-10 bg-indigo-600 rounded-md text-white cursor-pointer"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="px-3 py-1 ml-10 border border-indigo-600 rounded-md text-indigo-600 cursor-pointer"
          >
            Signup
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
