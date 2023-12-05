import { FC, useState, useEffect } from "react";
import { IInteview } from "../interfaces";
import axiosInstance from "../utils/axiosInstance";

interface IProps {
  item: IInteview;
  index: number;
  handleFetchInterviews: () => void;
}

const InterViewTableRow: FC<IProps> = ({
  item,
  index,
  handleFetchInterviews,
}) => {
  const {
    _id,
    name,
    studentId,
    companyName,
    result,
    interviewTopic,
    dateOfInterview,
  } = item;
  const [newResult, setNewResult] = useState("");

  useEffect(() => {
    setNewResult(result);
  }, []);

  /** ---> updating result for interview */
  const handleUpdateResult = async () => {
    const res = await axiosInstance.patch(`/interviews/${_id}`, {
      result: newResult,
    });

    if (res.status === 200) {
      console.log("result updated");
      handleFetchInterviews();
    }
  };

  return (
    <tr className="bg-white border-b  ">
      <td className="px-6 py-4">{index + 1}</td>
      <td className="px-6 py-4">{studentId}</td>
      <th
        scope="row"
        className=" font-medium text-gray-900 whitespace-nowrap  cursor-pointer"
      >
        {name}
      </th>
      <td className="px-6 py-4">{interviewTopic}</td>
      <td className="px-6 py-4">{companyName}</td>
      <td className="px-6 py-4">{dateOfInterview}</td>
      <td className="px-6 py-4">{result}</td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <select
            onChange={(e) => setNewResult(e.target.value)}
            id="result"
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
          >
            <option value="In Progress">In Progress</option>
            <option value="PASS">PASS</option>
            <option value="FAIL">FAIL</option>
            <option value="ON HOLD">ON HOLD</option>
            <option value="Didn’t Attempt">Didn’t Attempt</option>
          </select>

          <button
            onClick={handleUpdateResult}
            className="px-2 py-1 bg-indigo-500 text-white rounded-md"
          >
            update
          </button>
        </div>
      </td>
    </tr>
  );
};

export default InterViewTableRow;
