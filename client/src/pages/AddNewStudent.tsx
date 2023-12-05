import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const AddNewStudent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [batch, setBatch] = useState("");
  const [college, setCollege] = useState("");
  const [status, setStatus] = useState("placed");
  const [reactFinalScore, setReactFinalScore] = useState("");
  const [webDFinalScore, setWebDFinalScore] = useState("");
  const [dsaFinalScore, setDsaFinalScore] = useState("");
  const [emptyFiledError, setEmptyFieldError] = useState(false);

  const handleAddNewStudent = async (e: any) => {
    e.preventDefault();

    if (
      !name ||
      !college ||
      !reactFinalScore ||
      !webDFinalScore ||
      !dsaFinalScore ||
      !studentId ||
      !batch
    ) {
      return setEmptyFieldError(true);
    }
    setEmptyFieldError(false);

    try {
      const res = await axiosInstance.post("/students", {
        name,
        studentId,
        batch,
        college,
        reactFinalScore,
        webDFinalScore,
        dsaFinalScore,
        status,
      });
      if (res.status == 201) {
        console.log("Student created ");
        clearState();
        navigate("/");
      } else {
        console.log(" Student not created ! ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearState = () => {
    setName("");
    setStudentId("");
    setBatch("");
    setCollege("");
    setReactFinalScore("");
    setWebDFinalScore("");
    setDsaFinalScore("");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 mb-20">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add New Student
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Student Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>
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
              htmlFor="batch"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Batch
            </label>
            <div className="mt-2">
              <input
                id="batch"
                name="batch"
                type="text"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="college"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              College Name
            </label>
            <div className="mt-2">
              <input
                id="college"
                name="college"
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="reactFinalScore"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              React Final Score
            </label>
            <div className="mt-2">
              <input
                id="reactFinalScore"
                name="reactFinalScore"
                type="number"
                value={reactFinalScore}
                onChange={(e) => setReactFinalScore(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="webDFinalScore"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              WebD Final Score
            </label>
            <div className="mt-2">
              <input
                id="webDFinalScore"
                name="webDFinalScore"
                type="number"
                value={webDFinalScore}
                onChange={(e) => setWebDFinalScore(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="dsaFinalScore"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              DSA Final Score
            </label>
            <div className="mt-2">
              <input
                id="dsaFinalScore"
                name="dsaFinalScore"
                type="number"
                value={dsaFinalScore}
                onChange={(e) => setDsaFinalScore(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Select Status
            </label>
            <select
              onChange={(e) => setStatus(e.target.value)}
              id="status"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
            >
              <option value="placed">Placed</option>
              <option value="not_placed">Not Placed</option>
            </select>
          </div>

          {emptyFiledError && (
            <p className="text-red-500">* All field required !!</p>
          )}

          <div>
            <button
              onClick={handleAddNewStudent}
              className="flex w-full mt-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewStudent;
