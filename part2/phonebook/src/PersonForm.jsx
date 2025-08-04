const PersonForm = ({
  name,
  number,
  nameChangeHandler,
  numberChangeHandler,
  submitHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        name:{" "}
        <input id={"nameInput"} value={name} onChange={nameChangeHandler} />
      </div>
      <div>
        number: <input value={number} onChange={numberChangeHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
