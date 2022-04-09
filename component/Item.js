import PropTypes from "prop-types";
import "./Item.css";

const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className={status}>
      <div>
        <li className="flex justify-between bg-white p-4">
          <span>{title}</span>{" "}
          <span>
            {symbol}
            {formatNumber(Math.abs(amount))}
          </span>
        </li>
      </div>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
};

export default Item;
