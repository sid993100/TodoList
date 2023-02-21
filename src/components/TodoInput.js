import React,{useState} from "react";

function TodoInput(props) {

  //here i create a state to store data at run time
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />

      {/* in this line we pass the value that is write by user */}
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>Add</button>      
    </div>
  );
}

export default TodoInput;
