import { useState, useEffect } from 'react';

function useFetchTasks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:49153/api/v1/tasks')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(data => {
        data = data.map(taskDto);
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // console.log("data", data, typeof data);

  return { data, loading, error };
}

function taskDto(task) {
  return {
    id: task.id,
    title: task.description,
    isCompleted: task.status === 'DONE' ? true : false
  };
}

export default useFetchTasks;