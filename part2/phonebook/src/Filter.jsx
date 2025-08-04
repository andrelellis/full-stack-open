const Filter = ({ filter, changeHandler }) => {
  return (
    <p>
      filter shown with <input value={filter} onChange={changeHandler} />
    </p>
  );
};

export default Filter;
