import { Link } from "react-router-dom";

// ---------Images-------------
import logo from "../images/logo.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import code from "../images/code.png";
import check from "../images/check.png";
import close from "../images/close.png";
const Login = () => {
  return (
    <>
      <main className="bg-gray-200 flex max-lg:flex-col-reverse max-lg:items-center gap-[50px] max-xl:gap-[0px]  p-[20px] max-lg:gap-[0px] max-md:p-[0px]">
        <div className="w-[500px] text-left p-[60px] ml-[200px] max-xl:ml-[20px] max-md:w-[317px] max-md:p-[30px] max-md:ml-[0px] ">
          <img src={logo} alt="logo" className="w-[100px] " />
          <div>
            <h2 className="text-[35px] font-black text-gray-700 w-[280px] leading-[35px] mt-[60px]">
              Become a Learn-it Member
            </h2>
            <h3 className="text-[25px] font-medium text-gray-600 w-[250px] leading-[30px] mt-[10px] ">
              Easy to use, At any time
            </h3>
            <ul className="text-[16px]  leading-[30px] mt-[10px] pl-[20px]">
              <li className=" relative pl-[10px]">
                <img
                  src={check}
                  alt="check-img"
                  className="w-[20px] absolute left-[-5%] top-[15%]"
                />
                Track your progress
              </li>
              <li className=" relative pl-[10px]">
                <img
                  src={check}
                  alt="check-img"
                  className="w-[20px] absolute left-[-5%] top-[15%]"
                />
                Set your goals
              </li>
              <li className=" relative pl-[10px]">
                <img
                  src={check}
                  alt="check-img"
                  className="w-[20px] absolute left-[-5%] top-[15%]"
                />
                Get a personalized learning path
              </li>
              <li className=" relative pl-[10px]">
                <img
                  src={check}
                  alt="check-img"
                  className="w-[20px] absolute left-[-5%] top-[15%]"
                />
                Learn new skills
              </li>
              <li className=" relative pl-[10px]">
                <img
                  src={check}
                  alt="check-img"
                  className="w-[20px] absolute left-[-5%] top-[15%]"
                />
                Get updated to latest software
              </li>
              <li className=" relative pl-[10px]">
                <img
                  src={check}
                  alt="check-img"
                  className="w-[20px] absolute left-[-5%] top-[15%]"
                />
                Build your own web
              </li>
              <li className=" relative pl-[10px]">
                <img
                  src={check}
                  alt="check-img"
                  className="w-[20px] absolute left-[-5%] top-[15%]"
                />
                You can learn at any time
              </li>
              <li className=" relative pl-[10px]">
                <img
                  src={check}
                  alt="check-img"
                  className="w-[20px] absolute left-[-5%] top-[15%]"
                />
                Career Advancement Opportunities
              </li>
            </ul>
          </div>
        </div>

        {/* Longin form starts from here */}

        <div className="relative w-[400px] h-[500px] bg-white p-[50px] max-sm:p-[40px] max-sm:w-[360px]  rounded-md mt-[20px] max-md:ml-[0px] ">
            <Link to="/">
            <img src={close} alt="close-img" className="w-[40px] absolute top-[2%] right-[5%]" />
            </Link>
          <div>
            <h1 className="text-[30px] font-bold text-gray-700 mb-[20px]">Log In</h1>
            <h3 className="text-right text-[14px] mb-[20px]">
              Don't have an account?<Link to="/signup" className="text-blue-700 font-semibold"> Sign up</Link>
            </h3>
            <div className="grid grid-cols-2 gap-[10px] w-[300px] ">
              <Link to="/">
                <p className="relative text-[16px] text-black p-[20px] py-[5px] w-[150px] border-2 border-gray-400 rounded-lg ">
                  Google{" "}
                  <img
                    src={google}
                    alt="google-svg"
                    className="w-[20px] absolute left-[75%] top-[20%]"
                  />
                </p>
              </Link>
              <Link to="/">
                <p className="relative text-[16px] text-black p-[20px] py-[5px] w-[150px] border-2 border-gray-400 rounded-lg ">
                  Facebook{" "}
                  <img
                    src={facebook}
                    alt="google-svg"
                    className="w-[23px] absolute left-[75%] top-[20%]"
                  />
                </p>
              </Link>
              <Link to="/">
                <p className="relative text-[16px] text-black p-[20px] py-[5px] w-[150px] border-2 border-gray-400 rounded-lg ">
                  Github{" "}
                  <img
                    src={code}
                    alt="google-svg"
                    className="w-[23px] absolute left-[75%] top-[20%]"
                  />
                </p>
              </Link>
              <Link to="/">
                <p className="relative text-[16px] text-black p-[20px] py-[5px] w-[150px] border-2 border-gray-400 rounded-lg ">
                  Google{" "}
                  <img
                    src={google}
                    alt="google-svg"
                    className="w-[20px] absolute left-[75%] top-[20%]"
                  />
                </p>
              </Link>
            </div>

            <h1 className="text-center  m-[15px]">OR</h1>

            <div className="">
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="email"
                  placeholder="Email"
                  className="block w-[300px] rounded-md border-0 py-1.5 pl-[10px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-[300px] rounded-md border-0 py-1.5 pl-[10px] mt-[-25px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
              <div className="flex gap-2">
              <Link to="/">
                <p className="text-[16px] text-center text-black p-[10px] py-[5px] w-[145px] border-2 border-gray-300 rounded-lg ">
                  Forget Password?
                </p>
              </Link>
              <Link to="/">
                <p className="text-[16px] text-center text-white p-[10px] py-[5px] w-[145px] border-2 border-blue-700 bg-blue-700 hover:bg-blue-800 rounded-lg ">
                  Login
                </p>
              </Link>
             


              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
