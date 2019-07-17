import React from "react";

const Tasks = ({ tasks, finishTask }) => {
  const taskList = tasks.length ? (
    tasks.map(task => {
      return (
        <div className="collection-item" key={task.id}>
          <span onClick={() => finishTask(task.id)}>
            {task.complete ? (
              <i className="far fa-check-square" />
            ) : (
              <i className="far fa-square" />
            )}{" "}
            <span className={task.complete ? "finished-task" : ""}>
              {task.content}
            </span>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">No Tasks Yet!</p>
  );

  return <div className="tasks collection">{taskList}</div>;
};

export default Tasks;
