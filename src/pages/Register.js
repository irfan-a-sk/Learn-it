import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <main className="flex justify-center bg-gray-300 p-[40px] max-sm:p-[12px] md:p-[25px] ">
        <div className="w-[800px] border-2 p-[40px] bg-gray-200  max-sm:p-[12px] md:p-[25px]  ">
          <h2 className="text-[35px] font-bold text-gray-700 max-sm:text-[28px]">Registration Form</h2>
          <p className="text-[15px] leading-[18px] pb-[15px] text-gray-600 ">
            Your information is safe with us. Learn-it is committed to
            protecting your privacy. We will never sell your contact
            information. Read our policy{" "}
            <Link className="text-blue-800">here</Link>.
          </p>

          <form
            className="border-2 p-[40px]  max-sm:p-[12px] md:p-[25px]   bg-gray-100"
            action="/action_page.php"
          >
            <fieldset className="grid grid-cols-2 gap-[20px] max-sm:flex max-sm:flex-wrap ">
              <legend className="font-bold mb-[10px]">Personal Info:</legend>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="fname">First name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="lname">Last name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="lname">Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="lname">Phone:</label>
                <input
                  type="tel"
                  placeholder="0123-456-8892"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  maxLength={10}
                  pattern="[0-9]"
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="lname">Adress:</label>
                <input
                  type="text"
                  placeholder="Adress"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="lname">Date of Birth:</label>
                <input
                  type="date"
                  placeholder="DD/MM/YYYY"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
            </fieldset>
            <fieldset className="grid grid-cols-2 gap-[20px] mt-[30px] max-sm:flex max-sm:flex-wrap">
              <legend className="font-bold mb-[10px]">Education Info:</legend>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="fname">Occupation:</label>
                <input
                  type="text"
                  placeholder="Degree"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="lname">Date of Passing:</label>
                <input
                  type="text"
                  placeholder="YYYY"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  maxLength={4}
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="lname">Set Password:</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  maxLength={10}
                  required
                />
              </div>
              <div className="relative mt-1 rounded-md shadow-sm">
                <label for="lname">Confirm Password:</label>
                <input
                  type="password"
                  placeholder="ReEnter new password"
                  className="block w-[300px] max-sm:w-[250px] rounded-md border-0 py-1.5 pl-[10px] mt-[5px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  maxLength={10}
                  required
                />
              </div>
              <input
                  type="submit"
                  className="text-[16px] max-sm:text-[13px] text-center text-white p-[10px] mt-[20px] py-[5px] max-sm:w-[120px] w-[145px] border-2 border-blue-700 bg-blue-700 hover:bg-blue-800 rounded-lg "
                />
            </fieldset>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
