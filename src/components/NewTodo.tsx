import React, { useRef } from "react";


const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current?.value;
    // Het '?' stelt de vraag of er een waarde aanwezig is (niet null)
    // Een '!' kan ook als men zeker is dat er een value zal zijn. 
    if(enteredText?.trim().length === 0) {
      // throw an error
      return;
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;