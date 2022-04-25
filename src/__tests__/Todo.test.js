import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Todo from "../components/Todo";
import List from "../components/List";

test("should render todo component", () => {
    render(<Todo />);
    const todoElement = screen.getByTestId("todo");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("+");
    screen.getByPlaceholderText('Add something to do...');

    //Form input should be blank
    const input = screen.getByTestId("input");
    expect(input.getAttribute("value")).toBe("");
    fireEvent.change(input, { target: { value: "Test to do list" } });
});

//test("adds a new todo", () => {
//    const initialList = [{
//        "id": 1,
//        "task": "Give dog a bath",
//        "complete": false
//    }, {
//        "id": 2,
//        "task": "Do laundry",
//        "complete": false
//    }, {
//        "id": 3,
//        "task": "Vacuum floor",
//        "complete": false
//    }];
//
//    render(initialList.map((todo) => {
//        <List
//            key={todo.id}
//            props={todo}
//            testID="foo"
//        />
//    }))
//    
//    //expect(screen.queryAllByTestId("foo")).toHaveLength(3);
//    console.log(screen.queryAllByTestId("foo"))
//    //queryByTestId("foo");
//
//    //console.log(listElement.lastChild.textContent);
//});

