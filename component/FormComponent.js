import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputAmount = (event) => {
    setAmount(event.target.value);
  };

  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    setTitle("");
    setAmount(0);
  };

  useEffect(() => {
    const checkData = title.trim().length > 0 && amount !== 0 && amount !== undefined;
    console.log(checkData)
    setFormValid(checkData);
  }, [title, amount]);

  return (
    <div className="p-4">
      <form onSubmit={saveItem}>
        <div className="flex justify-between p-2">
          <label>ชื่อรายการ :</label>
          <input
            className="text-center focus:outline-none"
            type="text"
            placeholder="ระบุชื่อรายการของคุณ"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="flex justify-between p-2">
          <label>จำนวนเงิน :</label>
          <input
            className="text-center focus:outline-none"
            type="number"
            placeholder="(+ รายรับ , - รายจ่าย)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div className="flex justify-center p-2">
          <button
            type="submit"
            disabled={!formValid}
            className="btn bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-1 px-2 border border-orange-500 hover:border-transparent rounded"
          >
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
