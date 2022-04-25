import React, { useState } from 'react';
import "./Todo.css";
import List from './List';

export default function Todo() {

    const initialList = [{
        "id": 1,
        "task": "Give dog a bath",
        "complete": false
    }, {
        "id": 2,
        "task": "Do laundry",
        "complete": false
    }, {
        "id": 3,
        "task": "Vacuum floor",
        "complete": false
    }]

    const [todoList, setTodoList] = useState(initialList);
    const [input, setInput] = useState("");
    const [emptyInput, setEmptyinput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.currentTarget.value);
        console.log(input)
    };

    const addTodo = (e) => {
        e.preventDefault();
        if (input === "") {
            setEmptyinput("Please Enter a task")
        } else {
            const task = { id: todoList.length + 1, task: input, complete: false, }
            setTodoList([...todoList, task]);
            setInput("")
            console.log(todoList)
        };
    };

    const removeTodo = (todoToDelete) => {
        console.log(todoToDelete)
        const filterTodo = todoList.filter(todo => {
            return todo.id !== todoToDelete
        });
        setTodoList(filterTodo)
    }

    return (
        <div className="layout" data-testid="todo">
            <div className="todo_modal">
                <form
                    className="form"
                    onSubmit={addTodo}
                >
                    <input
                        type="text"
                        id="addToDo"
                        placeholder="Add something to do..."
                        className="input"
                        value={input}
                        onChange={handleInputChange}
                        data-testid="input"
                    />
                    <button className="button" data-testid="button">+</button>
                </form>
                <div className="list-margin" >
                    {todoList.map((todo, index) => {
                        return <List
                            todo={todo}
                            key={index}
                            removeTodo={removeTodo}
                            data-testid="todo"
                        />
                    })}
                    <p>{emptyInput}</p>
                </div>
            </div>
        </div>
    );
};
