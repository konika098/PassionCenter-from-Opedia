import './Header.css'
const Header = () => {

  return (
    <>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li className='menu1'>Home</li>
              <li className='menu1'>About Us</li>
              <li className='menu1'>Our Testimonial</li>
            </ul>
          </div>
          <img className="PassionLogo" src="https://i.ibb.co/hd40R0w/logo.png" alt="" />
          <a className="btn btn-ghost text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='menu1'>Home</li>
            <li className='menu1'>About Us</li>
            <li className='menu1'>Our Testimonial</li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="px-[32px] py-[14px] rounded-lg bg-[#F7550E] text-[#FFFFFF] border-none text-lg font-medium">Contact</button>
        </div>
      </div>
    </>
  );
};

export default Header;
