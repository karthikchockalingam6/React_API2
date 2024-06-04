import { useEffect, useState } from "react";

const TrainAPI = () => {
  const [trainDetails, setTrainDetails] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTrainDetails(data))
      .catch((err) => console.log(err));
  }, []);

  console.log("trainDetails", trainDetails);

  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
        {trainDetails.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TrainAPI;
