import React from 'react';
import "./List.css";
import { MdDelete } from "react-icons/md"

export default function List(props) {

    return (
        <div className="list" data-testid="todo-list">
            <div className="list-item">
                <p>{props.todo.task}</p>
                <div>
                    <MdDelete
                        onClick={() => props.removeTodo(props.todo.id)}
                        className="delete"
                    />
                </div>
            </div>
        </div>
    );
};
