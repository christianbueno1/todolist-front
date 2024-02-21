import { useState, useEffect } from 'react';

export function useFetchTasks() {
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
    isCompleted: task.status === 'DONE' ? true : false,
    status: task.status,
    description: task.description,
    createdAt: task.created_at,
    userId: task.user_id
  };
}

export function useAddTask() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addTask = async (userId, description) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:49153/api/v1/tasks/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description: description,
          status: 'OPEN'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      const data = await response.json();
      // console.log("data-task", data);

      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return { addTask, isLoading, error };
}

export function useUpdateStatusTask() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateStatusTask = async (taskId, status) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:49153/api/v1/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: status
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update status task');
      }

      const data = await response.json();
      console.log("data-hook", data);

      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return { updateStatusTask, isLoading, error };
}

export function useDeleteTask() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteTask = async (taskId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:49153/api/v1/tasks/${taskId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return { deleteTask, isLoading, error };
}