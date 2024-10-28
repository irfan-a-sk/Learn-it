import img1 from "../images/img1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";

const Home =() => {
    return(
        <>
        <img
          className="w-[100%] h-[500px] max-md:h-[250px] object-cover object-right-top "
          src={img1}
          alt="top-img"
        />

        <div className=" absolute inset-y-[150px] left-10 max-md:mt-[-45px]">
          <h1 className="text-5xl font-bold   text-white mb-8 max-md:text-lg max-md:mb-2  max-lg:text-[35px]">
            LEARN TO CODE ONLINE
          </h1>
          <p className="text-2xl  text-white w-[350px] ml-20 max-md:w-[160px] max-md:text-sm max-md:ml-0 max-md:w-[250px] max-lg:ml-10">
            Flexible tech training. Learn at your own pace with free resources
            and support. Learn-iT...
          </p>
          <div className="flex gap-3 p-10 ml-20 max-md:ml-[-40px] max-lg:ml-10">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Sign up
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Login
            </button>
          </div>
        </div>
      {/* ----------------------------------------First Section----------------------------- */}
        <div className="relative mb-[0px] max-lg:ml-[0px]  p-[100px] max-lg:p-[30px] max-md:p-[20px] max-md:flex-wrap z-0 flex flex-wrap justify-center bg-gray-200 max-xl:flex-nowrap max-xl:p-[50px] max-xl:gap-[100px]">
          <img
            className="rounded-full w-[400px] h-[400px] max-md:w-[200px] max-md:h-[200px] max-lg:w-[230px] max-lg:h-[230px] object-cover  max-xl:w-[300px] max-xl:h-[300px] "
            src={img2}
            alt="img-2"
          />
          <div className="absolute inset-y-0 top-[25%] max-lg:top-[25%] left-[12%] max-lg:left-[17%] max-md:top-[-15%] max-md:left-[50%]  max-xl:bottom-[32%] max-xl:left-[9%] -z-10 w-1/3">
            <div className="flex h-full items-center justify-center">
              <div className="rounded-full w-[370px] h-[370px] max-md:w-[150px] max-md:h-[150px] max-lg:w-[210px] max-lg:h-[210px] bg-sky  max-xl:w-[270px] max-xl:h-[270px] "></div>
            </div>
          </div>

          {/* text section */}

          <div className="w-[500px] max-lg:w-[240px] max-md:mt-[-50px]  ml-[200px] max-xl:mt-[50px] max-xl:ml-[0px]">
            <h3 className="text-gray-500 text-[20px] max-lg:text-[15px] mb-[10px]">
              Get access to high quality learning!
            </h3>
            <h2 className="text-[50px] max-lg:text-[30px] w-[300px] max-lg:w-[180px] leading-[50px] max-lg:leading-[30px] mb-[20px]">
              Join online courses <b>today</b>
            </h2>
            <p className="text-gray-600 text-[18px] max-lg:text-[13px] mb-[30px] w-[380px] max-lg:w-[250px]">
              Coding allows humans to communicate with these devices. Modern
              technology such as traffic lights, calculators, smart TVs, and
              cars use internal coding systems. Since computers do not
              communicate like humans, coding acts as a translator. Code
              converts human input into numerical sequences that computers
              understand.
            </p>
            <a
              href="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Know More
            </a>
          </div>
        </div>
{/* ----------------------------------------Second Section----------------------------- */}
        <div className="bg-gray-200 pt-[100px] p-[50px] flex justify-center gap-[100px] max-md:flex-wrap max-lg:gap-[70px] ">
          <div>
            <img
              src={img3}
              className="w-[450px] h-[450px] object-cover object-right max-xl:w-[350px] max-xl:h-[350px] max-lg:w-[250px] max-lg:h-[250px]"
              alt="img-3"
            />
            <div>
              <h2 className="text-[50px] mt-[20px] font-bold max-lg:text-[30px] w-[300px] max-lg:w-[180px] leading-[50px] max-lg:leading-[30px] mb-[20px]">
                Online Study
              </h2>
              <p className="text-gray-600 text-[18px] max-lg:text-[13px] mb-[30px] w-[380px] max-lg:w-[250px]">
                So, what is online learning? Online learning means that you
                study remotely. It's also referred to as called Distance
                Learning or E-learning. It's an alternative way to study at
                university, and instead of going to classNamerooms, you study at
                home, or wherever you choose, via the internet.
              </p>
            </div>
          </div>
          <div className="relative z-0">
            <img
              src={img4}
              className="w-[400px] h-[400px] object-cover object-right  max-lg:w-[250px] max-lg:h-[250px] max-xl:w-[300px] max-xl:h-[300px]"
              alt="img-3"
            />
            <div className="bg-sky w-[400px] h-[380px] absolute left-[20%] bottom-[42%]  max-lg:w-[240px] max-lg:h-[220px] max-lg:top-[10%] -z-10 max-xl:w-[300px] max-xl:h-[280px]"></div>
            <div>
              <h2 className="text-[20px] text-gray-900 font-medium max-lg:text-[15px] w-[300px] max-lg:w-[195px] max-lg:mt-[50px] leading-[30px] max-lg:leading-[20px] mt-[100px]">
                TRENDING NEW COURSESE
              </h2>
              <p className="text-gray-600 text-[18px] max-lg:text-[13px] mt-[20px] mb-[30px] w-[380px] max-lg:w-[250px]">
              However, if you're learning to code, three months is unlikely to be enough time to become fluent. In general, experts say that you can become relatively comfortable with coding in about six months. Graining the skill to code at a professional level can take a year or more.
              </p>
              <a
                href="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
    </>
    )
}

export default Home