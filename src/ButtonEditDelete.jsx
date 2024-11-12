import Button from "./Button";

function ButtonEditDelete() {
  return (
    <div className="button">
      <span>
        <Button action="Edit" />
      </span>
      <span>
        <Button action="Delete" />
      </span>
    </div>
  );
}
export default ButtonEditDelete;
