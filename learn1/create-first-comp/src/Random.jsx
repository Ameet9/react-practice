function Random() {
  let num = Math.floor(Math.random() * 100);
  return <h2 style={{ backgroundColor: "blue" }}>Random Number: {num}</h2>
}

export default Random;