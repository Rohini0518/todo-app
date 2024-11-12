function Input() {
  const button_name = "add";
  return (
    <div>
      <input type="text" className="additem" placeholder="add item..." />
      <button className="add-button">
        {button_name === "add" ? "Add" : "Update"}
      </button>
    </div>
  );
}

export default Input;
