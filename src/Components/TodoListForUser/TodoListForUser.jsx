import react, { useEffect, useState } from "react";
import "../TodoListForUser/TodoListForUser.css";
import axios from "axios";

//todolist to start the server json-server --watch todolist.json --port 4000.

 
let todolistApi = "http://localhost:8888/todolist";
const TodoListForUser = () => {
  const [inputState, setInputState] = useState({
    id: "",
    title: "",
    descrption: "",
  });

  const [response, setResponse] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputState.title === "" && inputState.descrption === "" ){
        alert("fill the fields");
    }else{
      await axios.post(todolistApi,inputState);
    }

    setInputState({
      id: "",
      title: "",
      descrption: "",
    });
  };

  let fetechingTodoListApi = async () => {
    const response = await axios.get(todolistApi);
    setResponse(response.data);
  };

  console.log({response});
  useEffect(() => {
    fetechingTodoListApi();
  }, []);

  const inputTitleAndDescriptionChangeChange = (e) => {
    let { name, value } = e.target;
    setInputState((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="main-title">You can add you're daily deatails</div>
      <div className="todo-list-user">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="todo-list">
            <div className="input-text-box-for-user">
              <input
                onChange={(e) => inputTitleAndDescriptionChangeChange(e)}
                name="title"
                value={inputState.title}
                type="text"
                placeholder="Title"
              />
            </div>
            <div>
              <textarea
                onChange={(e) => inputTitleAndDescriptionChangeChange(e)}
                name="descrption"
                value={inputState.descrption}
                className="text-area"
                rows="4"
                cols="50"
                placeholder="Description"
              ></textarea>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoListForUser;
