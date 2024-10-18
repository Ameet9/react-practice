function ShowTime() {
  let d = new Date().toLocaleDateString();
  let h = new Date().toLocaleTimeString();

  let val = "This is the Current time: ";
  return (
    <div>
      <span className="showTime">{val} {d}-{h}</span>
    </div>
  )
}

export default ShowTime