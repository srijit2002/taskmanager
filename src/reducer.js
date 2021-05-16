


const reducer=(state,action)=>{

    if(action.type==="INVALID_INPUT"){
        return {...state, modalCotent:action.payload, modalClass:"danger",isModalOpen:true}
    }

    else if(action.type==="ADD_ITEM"){
       
        return {...state,tasks:[...state.tasks,{content:action.payload,id:new Date().getTime().toString()}] ,modalCotent:"Item Added Successfully", modalClass:"success",isModalOpen:true}
    }

    else if(action.type==="EDIT_ITEM"){
        const modifiedTasks=state.tasks.map((task)=>{
            if(task.id===action.payload.id){
                return {...task,content:action.payload.input}
            }
            else{
                return task
            }
        })
        return {...state,tasks:modifiedTasks,modalCotent:"Item Edited Successfully", modalClass:"success",isModalOpen:true,buttonText:"Add"}
    }

    else if(action.type==="DELETE_ITEM"){
        
        const modifiedTasks=state.tasks.filter((task)=>(task.id!==action.payload));
        return {...state,tasks:modifiedTasks,modalCotent:"Item Deleted Successfully", modalClass:"success",isModalOpen:true}
    }


    else if(action.type==="HIDE"){
        return {...state,isModalOpen:false}
    }


    else if(action.type==="EDITING_MODE"){
        return {...state,buttonText:action.payload,modalCotent:"Item is in editing mode", modalClass:"warning",isModalOpen:true}
    }
    else if(action.type==="CLEAR_ALL"){
        return {...state,tasks:[],modalCotent:"All Items cleared successfuly", modalClass:"success",isModalOpen:true}
    }
    else{
      throw new Error("Invalid Action Type");
    }
      
  

}
export default reducer;