import "./Todo.css";
import List from './List';
import { useTodo } from './useTodo';

export default function Todo() {

    const {
        todoList,
        input,
        emptyInput,
        handleInputChange,
        addTodo,
        removeTodo,
    } = useTodo();

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
                        placeholder="Add something to do."
                        className="input"
                        value={input}
                        onChange={handleInputChange}
                        data-testid="input"
                    />
                    <button className="button" data-testid="addButton">+</button>
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
                    <div className="form">{emptyInput}</div>
                </div>
            </div>
        </div>
    );
};
