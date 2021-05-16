import React, { useContext } from "react";
import {AppContext} from "./context";
import { BiEdit} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri";
const Card = ({ content,id }) => {

    const {handleEdit,handleDelete}=useContext(AppContext);
    return (
        <div className="card">
            <h2 className="card__title">{content}</h2>
            <div className="card__icons">
                <BiEdit className="icon icon--edit" onClick={()=>handleEdit(id,content)}/>
                <RiDeleteBin6Line className="icon icon--delete" onClick={()=>handleDelete(id)}/>
            </div>
        </div>
    )
}
export default Card;