import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="p-4 text-center text-black">
      <h1 className="text-2xl">ยอดคงเหลือ (บาท)</h1>
      <h1> ฿ {formatNumber((income - expense).toFixed(2))}</h1>
      <div className="p-3 flex justify-between">
        <div className="text-green-600">
          <h4 className="text-xl">ยอดรายรับ</h4>
          <p className="report plus"> ฿ {formatNumber(income)}</p>
        </div>
        <div className="text-red-600">
          <h4 className="text-xl">ยอดรายจ่าย</h4>
          <p className="report minus"> ฿ {formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
