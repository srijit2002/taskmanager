import { useContext } from "react";
import { AppContext } from "./context"
import Modal from "./Modal";
import Card from "./Card";


const Container = () => {
    const {state,input,setInput,handleEvent,clearAll} = useContext(AppContext);
    return (
        <>
           {(state.isModalOpen)&&<Modal {...state}/>}
            <div className="container">
              <div className="input__container">
                    <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="Enter Task" />
                    <button className="btn" onClick={handleEvent}>{state.buttonText}</button>
                </div>
                <div className="tasks__container">
                   {state.tasks.map((task,index)=>{
                       return(
                           <Card key={task.id} {...task}/>
                       )
                   })}
                </div>
               {(state.tasks.length!==0)&&<button className="btn btn--clr" onClick={clearAll}>Clear All</button>} 
            </div>
           
        </>
    )
}

export default Container;