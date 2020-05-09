const React = require("react");

class Index extends React.Component {
render() {
const todo = this.props.todo;
const task = this.props.task;
return (
    <>
    <h1>To Do list</h1>
    {task <= 0 ? (
        <h3>There are no To Dos yet!</h3>
    ) : (
        <ul>
        {todo.map((task, index) => {
            return (
            <li>
                {`${task.task} ${
                task.complete === false
                    ?  "not Complete"
                    :  "Complete"
                }`}
                <form action={`/todo/${task._id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
                </form>
            </li>
            );
        })}
        </ul>
    )}
    <form action="/todo/new" method="POST">
        <input type="text" name="task"/>
        <input type="submit" />
    </form>
    </>
);
}
}

module.exports = Index;
