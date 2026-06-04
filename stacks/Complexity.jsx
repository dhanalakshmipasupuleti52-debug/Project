import "./ComplexityTable.css";

const data = [
  {
    operation: "Insert",
    linkedList: "O(1)",
    stack: "O(1)",
    queue: "O(1)",
  },
  {
    operation: "Delete",
    linkedList: "O(1)",
    stack: "O(1)",
    queue: "O(1)",
  },
  {
    operation: "Search",
    linkedList: "O(n)",
    stack: "O(n)",
    queue: "O(n)",
  },
  {
    operation: "Access by Index",
    linkedList: "O(n)",
    stack: "O(n)",
    queue: "O(n)",
  },
  {
    operation: "Space Complexity",
    linkedList: "O(n)",
    stack: "O(n)",
    queue: "O(n)",
  },
];

function getClassName(value) {
  if (value === "O(1)") return "good";
  if (value === "O(log n)") return "average";
  return "poor";
}

export default function ComplexityTable() {
  return (
    <div className="container">
      <h1>Linked List vs Stack vs Queue</h1>

      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Linked List</th>
            <th>Stack</th>
            <th>Queue</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.operation}</td>

              <td className={getClassName(item.linkedList)}>
                {item.linkedList}
              </td>

              <td className={getClassName(item.stack)}>
                {item.stack}
              </td>

              <td className={getClassName(item.queue)}>
                {item.queue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}        