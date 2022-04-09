import { useState, useEffect } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import ReportComponent from "./components/ReportComponent";
import Transaction from "./components/Transaction";
import DataContext from "./data/DataContext";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);

    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);

    const expense = amounts
      .filter((element) => element < 0)
      .reduce((total, element) => (total += element), 0);

    setReportIncome(income.toFixed(2));
    setReportExpense((expense * -1).toFixed(2));
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div>
          <h1 className="text-center text-4xl font-thPridi">บัญชีรายรับ - รายจ่าย</h1>
          <Router>
            <div className="mt-4">
              <ul className="flex justify-center p-4">
                <li>
                  <Link
                    to="/"
                    className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    ข้อมูลบัญชี
                  </Link>
                </li>
                <li>
                  <Link
                    to="/insert"
                    className="hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    บันทึกข้อมูล
                  </Link>
                </li>
              </ul>
              <Routes>
                <Route path="/" element={<ReportComponent />}></Route>
                <Route
                  path="/insert"
                  element={
                    <>
                      <FormComponent onAddItem={onAddNewItem} />{" "}
                      <Transaction items={items} />{" "}
                    </>
                  }
                ></Route>
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
