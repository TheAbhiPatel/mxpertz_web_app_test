import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { IInteview } from "../interfaces";
import CsvDownloader from "react-csv-downloader";
import InterViewTableRow from "../components/InterViewTableRow";

const Interviews = () => {
  const userInfo = localStorage.getItem("@userInfo");
  const navigate = useNavigate();
  const [interviews, setInterviews] = useState<IInteview[]>([]);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);

  useEffect(() => {
    handleFetchInterviews();
  }, []);

  /** ---> fetching data from api */
  const handleFetchInterviews = async () => {
    try {
      const res = await axiosInstance.get(`/interviews`);
      if (res.status === 200) {
        setInterviews(res.data.interviews);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      id: "studentId",
      displayName: "Student Id",
    },
    {
      id: "name",
      displayName: "Name",
    },

    {
      id: "interviewTopic",
      displayName: "Interview Topic",
    },
    {
      id: "companyName",
      displayName: "Company Name",
    },
    {
      id: "dateOfInterview",
      displayName: "Date of Interview",
    },
    {
      id: "result",
      displayName: "Result",
    },
  ];

  return (
    <div>
      <div className="max-w-5xl min-w-[50rem] mx-auto p-5  flex justify-between mt-10">
        <h2 className="text-2xl font-bold ">Interviews</h2>
        <div className="flex gap-5">
          <CsvDownloader
            datas={interviews}
            columns={columns}
            filename="interviews.csv"
            separator=","
          >
            <button className="px-3 py-1 ml-10 bg-indigo-600 rounded-md text-white cursor-pointer">
              Download CSV
            </button>
          </CsvDownloader>

          <NavLink to={"/create-interview"}>
            <button className="px-3 py-1 ml-10 bg-indigo-600 rounded-md text-white cursor-pointer">
              Create Interview
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
                Interview Topic
              </th>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Result
              </th>
              <th scope="col" className="px-6 py-3">
                Update Result
              </th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((item, index) => {
              return (
                <InterViewTableRow
                  key={item._id}
                  item={item}
                  index={index}
                  handleFetchInterviews={handleFetchInterviews}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Interviews;
