import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { IStudent } from "../interfaces";

const Home = () => {
  const userInfo = localStorage.getItem("@userInfo");
  const navigate = useNavigate();
  const [students, setStudents] = useState<IStudent[]>([]);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);

  useEffect(() => {
    handleFetchProducts();
  }, []);

  /** ---> fetching data from api */
  const handleFetchProducts = async () => {
    const res = await axiosInstance.get(`/students`);

    if (res.status === 200) {
      setStudents(res.data.students);
    }
  };

  return (
    <div>
      <div className="max-w-5xl min-w-[50rem] mx-auto p-5  flex justify-between mt-10">
        <h2 className="text-2xl font-bold ">Students</h2>
        <div className="flex gap-5">
          <button className="px-3 py-1 ml-10 bg-indigo-600 rounded-md text-white cursor-pointer">
            Download CSV
          </button>
          <NavLink to={"/add-student"}>
            <button className="px-3 py-1 ml-10 bg-indigo-600 rounded-md text-white cursor-pointer">
              Add New Student
            </button>
          </NavLink>
        </div>
      </div>
      <div className="relative mx-auto max-w-5xl min-w-[50rem] pb-10">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No.
              </th>
              <th scope="col" className="px-6 py-3">
                S.ID
              </th>
              <th scope="col" className="px-6 py-3">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3">
                Batch
              </th>
              <th scope="col" className="px-6 py-3">
                College
              </th>
              <th scope="col" className="px-6 py-3">
                React Score
              </th>
              <th scope="col" className="px-6 py-3">
                WebD Score
              </th>
              <th scope="col" className="px-6 py-3">
                DSA Score
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, index) => {
              const {
                _id,
                name,
                batch,
                studentId,
                college,
                reactFinalScore,
                webDFinalScore,
                dsaFinalScore,
                status,
              } = item;
              return (
                <tr key={_id} className="bg-white border-b  ">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{studentId}</td>
                  <th
                    scope="row"
                    className=" font-medium text-gray-900 whitespace-nowrap  cursor-pointer"
                  >
                    {name}
                  </th>
                  <td className="px-6 py-4">{batch}</td>
                  <td className="px-6 py-4">{college}</td>
                  <td className="px-6 py-4">{reactFinalScore}</td>
                  <td className="px-6 py-4">{webDFinalScore}</td>
                  <td className="px-6 py-4">{dsaFinalScore}</td>
                  <td className="px-6 py-4">{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
