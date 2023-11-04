"use client";
import { useData } from "../context/DataContext";

export const LandingContent = () => {
  const { display } = useData();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-[#B5CC22] dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                縣市
              </th>
              <th scope="col" className="px-6 py-3">
                區域
              </th>
              <th scope="col" className="px-6 py-3">
                站點名稱
              </th>
              <th scope="col" className="px-6 py-3">
                可借車輛
              </th>
              <th scope="col" className="px-6 py-3">
                可還空位
              </th>
            </tr>
          </thead>
          <tbody>
            {display.map((item, i) => (
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={i}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  台北市
                </th>
                <td className="px-6 py-4">
                  {item.sarea}
                </td>
                <td className="px-6 py-4">
                  {item.sna}
                </td>
                <td className="px-6 py-4">
                  {item.sbi}
                </td>
                <td className="px-6 py-4">
                  {item.bemp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {display.length < 2 &&<div className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 flex items-center justify-center">
        <p className="px-6 py-4">
          目前沒有查詢資料
        </p>
      </div>}
    </div>
  );
};
