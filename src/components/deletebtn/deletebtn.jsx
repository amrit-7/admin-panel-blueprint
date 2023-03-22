import "./deletebtn.scss";
const DeleteBtn = ({ ...otherprops }) => {
  return (
    <div>
      <button className="btn" {...otherprops}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default DeleteBtn;
