import "./App.css";
import { useThings } from "./api";
import { useSort } from "./hooks/use-sort-generic";

function App() {
  const things = useThings();

  const { sortedItems, setSort } = useSort({
    items: things,
    defaultSort: {
      sortBy: "value1",
      direction: "ASC",
    },
  });

  return (
    <div className="App">
      <table>
        <tr>
          <th onClick={() => setSort({ sortBy: "name", direction: "ASC" })}>
            Name
          </th>
          <th onClick={() => setSort({ sortBy: "value1", direction: "ASC" })}>
            Value 1
          </th>
          <th onClick={() => setSort({ sortBy: "value2", direction: "ASC" })}>
            Value 2
          </th>
        </tr>
        {sortedItems.map((thing) => {
          return (
            <tr key={thing.id}>
              <td>
                {" "}
                {thing.name} {thing.isGood ? "a good thing" : "a bad thing"}
              </td>
              <td>{thing.value1}</td>
              <td>{thing.value2}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
