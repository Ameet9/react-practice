function ToDoItem1() {
  let toDoName = 'Go To Gym';
  let toDoDate = '4/10/2023';

  return (
    <div class="container">
      <div class="row ourRow">
        <div class="col-6"><span>{toDoName}</span></div>
        <div class="col-4">{toDoDate}</div>
        <div class="col-2"><button type="button" class="btn btn-danger ourButton">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;