import React, { useState, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isInEditingMode,setIsInEditingMode]=useState(false);
    const [id,setId]=useState("");
    const [input,setInput]=useState("");

    const defaultState={
        tasks:(localStorage.getItem("PendingTasks")&&JSON.parse(localStorage.getItem("PendingTasks")))||[],
        isModalOpen:false,
        modalCotent:"",
        modalClass:"danger",
        buttonText:"Add"
    }

    const [state,dispatch]=useReducer(reducer,defaultState); 

   

    useEffect(()=>{
        if(state.tasks!==[]){
            localStorage.setItem("PendingTasks",JSON.stringify(state.tasks));
        }
    },[state.tasks])

    const handleEvent=()=>{
        if(input){
            if(isInEditingMode){
                dispatch({type:"EDIT_ITEM",payload:{id,input}});
                setInput("");
                setIsInEditingMode(false);
                setId("");
            }
            else{
                dispatch({type:"ADD_ITEM",payload:input})
                setInput("");
            }
        }
        else{
            dispatch({type:"INVALID_INPUT",payload:"Please enter some text"})
            setInput("");
        }
    }

    const handleEdit=(id,content)=>{
        setId(id);
        setIsInEditingMode(true);
        setInput(content);
        dispatch({type:"EDITING_MODE",payload:"Save"})
    }

    const handleDelete=(idToBeDeleted)=>{
      dispatch({type:"DELETE_ITEM",payload:idToBeDeleted});
   }
   useEffect(()=>{
       if(state.isModalOpen){
       const timeout=setTimeout(() => {
            dispatch({type:"HIDE",action:"Hide"})
        }, 3000);
        return ()=>{clearTimeout(timeout)}
       }
  },[state.tasks,state.modalContent,state.modalClass])
 
  const clearAll=()=>{
      dispatch({type:"CLEAR_ALL",payload:"success"})
  }
    return (
        <AppContext.Provider value={{isInEditingMode,state,input,setInput,handleEvent,handleEdit,handleDelete,clearAll}}>
            {children}
        </AppContext.Provider>
    )
}
export { AppContext, AppProvider };