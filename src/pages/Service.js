import { Link } from "react-router-dom";

// ------Images---------
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js-file.png";
import sql from "../images/sql.png";
import python from "../images/py.png";
import java from "../images/java.png";
import php from "../images/php.png";
import c from "../images/c.png";
import cplus from "../images/c++.png";
import csharp from "../images/c-sharp.png";
import bootstrap from "../images/bootstrap.png";
import react from "../images/react.png";
import mysql from "../images/mysql.png";
import jquery from "../images/jquery.png";
import nodejs from "../images/nodejs.png";
import mongo from "../images/leaf.png";

const Service = () => {
  return (
    <>
     
        {/* --------------Scrollbar------------------- */}
        <div
          id="keep-scrolling"
          className="bg-gray-300 flex h-[100%] w-[100%] gap-[15px] justify-center p-[15px] "
        >
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-red-100 hover:text-red-600 hover:border-2 border-red-500 rounded-lg ">
              <img
                src=""
                alt=""
                className="w-[30px] absolute left-[67%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-red-100 hover:text-red-600 hover:border-2 border-red-500 rounded-lg ">
              <img
                src=""
                alt=""
                className="w-[30px] absolute left-[67%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-red-100 hover:text-red-600 hover:border-2 border-red-500 rounded-lg ">
              HTML
              <img
                src={html}
                alt="html-logo"
                className="w-[30px] absolute left-[67%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-blue-100 hover:text-blue-600 hover:border-2 border-blue-500 rounded-lg ">
              CSS
              <img
                src={css}
                alt="css-logo"
                className="w-[30px] absolute left-[67%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[109px] hover:bg-yellow-100 hover:text-yellow-600 hover:border-2 border-yellow-500 rounded-lg ">
              Java Script
              <img
                src={js}
                alt="js-logo"
                className="w-[30px] absolute left-[75%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[80px] hover:bg-orange-100 hover:text-orange-600 hover:border-2 border-orange-500 rounded-lg ">
              SQL
              <img
                src={sql}
                alt="sql-logo"
                className="w-[32px] absolute left-[64%] top-[-4%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-indigo-100 hover:text-indigo-950 hover:border-2 border-indigo-950 rounded-lg ">
              Python
              <img
                src={python}
                alt="python-logo"
                className="w-[30px] absolute left-[68%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-green-100 hover:text-green-600 hover:border-2 border-green-500 rounded-lg ">
              JAVA
              <img
                src={java}
                alt="java-logo"
                className="w-[27px] absolute left-[70%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-blue-100 hover:text-blue-600 hover:border-2 border-blue-500 rounded-lg ">
              PHP
              <img
                src={php}
                alt="php-logo"
                className="w-[30px] absolute left-[67%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[65px] hover:bg-blue-100 hover:text-blue-600 hover:border-2 border-blue-500 rounded-lg ">
              C
              <img
                src={c}
                alt="c-logo"
                className="w-[30px] absolute left-[55%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[80px] hover:bg-indigo-100 hover:text-indigo-600 hover:border-2 border-indigo-500 rounded-lg ">
              C++
              <img
                src={cplus}
                alt="cplus -logo"
                className="w-[30px] absolute left-[65%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[70px] hover:bg-fuchsia-100 hover:text-fuchsia-600 hover:border-2 border-fuchsia-500 rounded-lg ">
              C#
              <img
                src={csharp}
                alt="csharp -logo"
                className="w-[30px] absolute left-[60%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[110px] hover:bg-purple-100 hover:text-purple-950 hover:border-2 border-purple-950 rounded-lg ">
              Bootstrap
              <img
                src={bootstrap}
                alt="bootstrap-logo"
                className="w-[30px] absolute left-[72%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-blue-100 hover:text-blue-600 hover:border-2 border-blue-500 rounded-lg ">
              React
              <img
                src={react}
                alt="react-logo"
                className="w-[30px] absolute left-[65%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[100px] hover:bg-gray-100 hover:text-gray-600 hover:border-2 border-gray-500 rounded-lg ">
              MYSQL
              <img
                src={mysql}
                alt="mysql-logo"
                className="w-[31px] absolute left-[76%] top-[-4%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-gray-100 hover:text-gray-600 hover:border-2 border-gray-500 rounded-lg ">
              Jquery
              <img
                src={jquery}
                alt="jquery-logo"
                className="w-[34px] absolute left-[68%] top-[-5%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[90px] hover:bg-green-100 hover:text-green-600 hover:border-2 border-green-500 rounded-lg ">
              Node.js
              <img
                src={nodejs}
                alt="node-logo"
                className="w-[27px] absolute left-[70%] top-[0%]"
              />
            </p>
          </Link>
          <Link to="/">
            <p className="relative text-[16px] text-black p-[8px] py-[3px] w-[100px] hover:bg-green-100 hover:text-green-600 hover:border-2 border-green-500 rounded-lg ">
              MongoDB
              <img
                src={mongo}
                alt="mongo-logo"
                className="w-[27px] absolute left-[78%] top-[0%]"
              />
            </p>
          </Link>
        </div>


          {/* ---------------------Search section----------------- */}
        <div className="relative h-[250px] bg-gray-100  p-[20px]">
          <div class="w-full max-w-sm min-w-[200px] ml-[100px]">
            <h1 className=" text-[50px] text-gray-700 pb-[10px]">
              Search for a class
            </h1>
            <div class="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search classes..."
              />
              <button
                class="rounded-md bg-blue-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 mt-0"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Service;
