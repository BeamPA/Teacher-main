import { useState } from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

const Form = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const tableData = [
    { order: 1, subjectCode: '03603212-65', subjectName: 'Abstract Data Types and Problem Solving', credit: 3 },
    { order: 2, subjectCode: '03603213-65', subjectName: 'Algorithm Design and Analysis', credit: 3 },
    // Add more rows as needed
  ];

  const filteredTableData = tableData.filter((row) =>
    row.subjectCode.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
    row.subjectName.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="bg-white h-screen w-screen items-center justify-center">
      <div>
        <h1 className='font-IBM font-bold text-black text-4xl mt-10 ml-10 '>แบบฟอร์มข้อมูลรายวิชา</h1>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="ค้นหาวิชาที่จะเปิดสอน"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-4 bg-rose-100 font-IBM text-xl text-center font-bold rounded-[15px] w-2/4"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <table className="font-IBM text-black text-center mt-10 border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black p-2">ลำดับ</th>
              <th className="border border-black p-2 w-44">รหัสวิชา</th>
              <th className="border border-black p-2 w-96">ชื่อวิชา</th>
              <th className="border border-black p-2 text-center">หน่วยกิต</th>
              <th className="border border-black p-2 text-center">เพิ่มรายวิชา</th>
            </tr>
          </thead>
          <tbody>
            {filteredTableData.map((row) => (
              <tr key={row.subjectCode}>
                <td className="border border-black p-2">{row.order}</td>
                <td className="border border-black p-2">{row.subjectCode}</td>
                <td className="border border-black p-2">{row.subjectName}</td>
                <td className="border border-black p-2">{row.credit}</td>
                <td className="border border-black p-2 ">
                  <Link to={`/edit?${searchQuery}`} className="text-red-900 flex items-center justify-center">
                    <FiPlusCircle />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
