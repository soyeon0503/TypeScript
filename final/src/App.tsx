import React ,{ useState, useRef, useEffect, useReducer, useContext } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItems";
import {Todo} from './types';
type Action ={
  type: "CREATE",
  data: {
    id: number;
    content: string;
  }
} | {type: "DELETE", id:number};

function reducer(state:Todo[], action:Action) {
  switch(action.type){
    case "CREATE":{
      return [...state, action.data];
    }
    case "DELETE" :{
      return state.filter((it)=> it.id !== action.id);
    }
  }
}
export const TodoStateContext = React.createContext<Todo[] | null>( null);
export const TodoDispatchContext = React.createContext<{
    onClickAdd: (text:string) => void;
    onClickDelete: (id:number) => void;
  }| null>(null);
export function useTodoDispatch(){
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch) throw new Error("TodoDispatchContext Error");
  return dispatch;
}

function App() {
  // useState함수는 초기값의 타입으로 변수와 설정자 함수의 타입을 추론한다
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(1);
  const onClickAdd = (text: string) =>{
    dispatch({
      type: "CREATE",
      data:{
        id:idRef.current++,
        content: text,
      }
    });
  };

  const onClickDelete = (id: number) =>{
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(()=>{
    console.log(todos);
  },[todos]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{
          onClickAdd,
          onClickDelete,
        }}
        >
          <Editor></Editor>
            <div>
              {
                todos.map((todo) =>(
                <TodoItem key={todo.id} {...todo} />
              ))}
            </div>     
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
