import { useState } from "react";

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
}];

export const useTodo = () => {
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
            setEmptyinput("Please Enter a Task!")
        } else {
            const task = { id: todoList.length + 1, task: input, complete: false, }
            setTodoList([...todoList, task]);
            setInput("")
            console.log(todoList);
        };
    };

    const removeTodo = (todoToDelete) => {
        console.log(todoToDelete)
        const filterTodo = todoList.filter(todo => {
            return todo.id !== todoToDelete
        });
        setTodoList(filterTodo)
    };

    return {
        todoList,
        input,
        emptyInput,
        handleInputChange,
        addTodo,
        removeTodo,
        initialList,
    };

}
