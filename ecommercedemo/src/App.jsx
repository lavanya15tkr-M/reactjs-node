import { useState } from "react";
import "./App.css";
import Football from "./football";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello my name is ${this.name} and I am ${this.age} years old`;
  }
}

function FruitList() {
  const fruit = ["apple", "banana", "strawberry"];

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruit.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const first = [1, 2, 3];
  const second = [...first, 4, 5, 6];

  const p = new Person("Lavanya", 20);

  return (
    <div>
      <h1>LAVANYA</h1>

      <p>{p.greet()}</p>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <p>Second Array: {second.join(", ")}</p>

      <FruitList />

      <Football isGoal={true} />
    </div>
  );
}

export default App;