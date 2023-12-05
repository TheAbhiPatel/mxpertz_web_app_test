import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const CreateInterview = () => {
  const userInfo = localStorage.getItem("@userInfo");
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState("");
  const [interviewTopic, setInterviewTopic] = useState("web_design");
  const [dateOfInterview, setDateOfInterView] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emptyFiledError, setEmptyFieldError] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);

  const handleCreateInterview = async (e: any) => {
    e.preventDefault();

    if (!studentId || !interviewTopic || !dateOfInterview || !companyName) {
      return setEmptyFieldError(true);
    }
    setEmptyFieldError(false);

    try {
      const res = await axiosInstance.post("/interviews", {
        studentId,
        interviewTopic,
        dateOfInterview,
        companyName,
      });
      if (res.status == 201) {
        console.log("Interview created ");
        clearState();
        navigate("/interviews");
      } else {
        console.log(" Student not created ! ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearState = () => {
    setStudentId("");
    setDateOfInterView("");
    setCompanyName("");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 mb-20">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a New Interview
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="studentId"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Student ID
            </label>
            <div className="mt-2">
              <input
                id="studentId"
                name="studentId"
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Name
            </label>
            <div className="mt-2">
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="dateOfInterview"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date of Interview
            </label>
            <div className="mt-2">
              <input
                id="dateOfInterview"
                name="dateOfInterview"
                type="date"
                value={dateOfInterview}
                onChange={(e) => setDateOfInterView(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Select Technology
            </label>
            <select
              onChange={(e) => setInterviewTopic(e.target.value)}
              id="status"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            >
              <option value="web_design">Web Design</option>
              <option value="reactjs">React JS</option>
              <option value="nodejs">Node JS</option>
              <option value="mern">MERN</option>
              <option value="fullstack">Full Stack</option>
            </select>
          </div>

          {emptyFiledError && (
            <p className="text-red-500">* All field required !!</p>
          )}

          <div>
            <button
              onClick={handleCreateInterview}
              className="flex w-full mt-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Interview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateInterview;
