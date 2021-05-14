
const initalData = {
  list: [],
};
const todoReducers = (state = initalData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      if(data && data.length > 3){
        return {
            ...state,
            list: [
              ...state.list,
              {
                id: id,
                data: data,
              },
            ],
          };
      }
      else{
          alert("Data must be in 3 character")
      }
      
    case "DELETE_TODO":
      const deleteItem = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: deleteItem,
      };
    case "REMOVE_TODO":
      return {
          ...state,
          list:[]
      };
      case "EDIT_TODO" : 
      const editItem = state.list.filter((elem)=> elem.id == action.id)
      return{
          ...state,
        
      }
    default:
      return state;
  }
};
export default todoReducers;
