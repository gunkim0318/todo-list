import React from "react";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import "./Item.scss";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../modules/todos";

function Item({ id, text, check }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({
      type: "SET_REVERSE_CHECK_TODO",
      id: id,
    });
  };
  const onDelete = () => {
    console.log(id);
    dispatch(deleteTodo(id));
  };
  return (
    <div className="item">
      {!check ? (
        <GrCheckbox onClick={onClick} />
      ) : (
        <GrCheckboxSelected onClick={onClick} />
      )}
      <span>{text}</span>
      <AiFillDelete className="floatRight" onClick={onDelete}>
        삭제
      </AiFillDelete>
    </div>
  );
}

export default Item;
