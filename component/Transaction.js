import Item from "./Item";

const Transaction = (props) => {
  const { items } = props;

  return (
    <div>
        <ul>
          {items.map((element) => {
            return <Item {...element} key={element.id} />;
          })}
        </ul>
    </div>
  );
};

export default Transaction;
