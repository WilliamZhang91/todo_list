import {
    render,
    screen,
    fireEvent,
    cleanup,
    renderHook,
    act,
} from "@testing-library/react";
import Todo from "../components/Todo";
import { useTodo } from "../components/useTodo";

const addTodo = (todo) => {
    const input = screen.getByTestId("input");
    const addButton = screen.getByTestId("addButton", { name: "+" });
    todo.forEach(task => {
        fireEvent.change(input, { target: { value: task } });
        fireEvent.click(addButton);
    })
};

describe("todo tests", () => {

    let wrapper

    beforeEach(() => {
        wrapper = render(<Todo />);
    });

    afterEach(() => {
        cleanup();
    })

    test("should render todo component", () => {
        const todoElement = screen.getByTestId("todo");
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent("+");
        screen.getByPlaceholderText('Add something to do.');
    });

    test("can type into input element", () => {
        const input = screen.getByTestId("input");
        expect(input.getAttribute("value")).toBe("");
        fireEvent.change(input, { target: { value: "Test to do list" } });
        expect(input.value).toBe("Test to do list");
    });

    test("input should be empty when a task is added", () => {
        const input = screen.getByTestId("input");
        const addButton = screen.getByTestId("addButton", { name: "+" });
        fireEvent.click(addButton);
        expect(input.value).toBe("");
    });

    test("can add a task to do", async () => {
        addTodo(["Learn testing"]);
        const result = screen.getByText(/Learn testing/i);
        expect(result).toBeInTheDocument();
    });

    test("can add multiple tasks to do", async () => {
        addTodo(["Learn testing", "Practice motorbike", "Eat some food"]);
        const result = screen.getAllByTestId("todo-list");
        expect(result.length).toBe(6);
    });

    test("can remove a todo", async () => {
        const { result } = renderHook(() => useTodo());
        //console.log(result.current.removeTodo);
        console.log({ todoList: result.current.todoList });
        expect(result.current.todoList.length).toBe(3);
        act(() => {
            result.current.removeTodo(1);
        });
        expect(result.current.todoList.length).toBe(2);
    });
});


