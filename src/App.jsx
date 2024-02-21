import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useAddTask, useDeleteTask, useFetchTasks, useUpdateStatusTask } from "./Hooks/useFetchTasks";
import { UserContext } from "./MyContext";
import { Filter } from "./components/Filter";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const { data, loading, error } = useFetchTasks();
  const [tasks, setTasks] = useState([]);
  const { addTask: addTaskFetch, isLoading: isLoadingAddTask, error: errorAddTask } = useAddTask();
  const [user, setUser] = useState({ id: 15, username: "steverogers", "email": "steve@ibm.com" });
  const { updateStatusTask, isLoading: isLoadingUpdateStatus, error: errorUpdateStatus} = useUpdateStatusTask();
  const { deleteTask, isLoading: isLoadingTaskDelete, error: errorTaskDelete} = useDeleteTask();
  const [filterText, setFilterText] = useState('');


  // function loadSavedTasks() {
  //   const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   if(saved) {
  //     setTasks(JSON.parse(saved));
  //   }
  //   // setTasks(data);
  // }

  // function setTasksAndSave(newTasks) {
  //   setTasks(newTasks);
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  // }

  useEffect(() => {
    // loadSavedTasks();
    if (data !== null) {
      setTasks(data);
    }
    // console.log("data", data, typeof data);
    console.log("tasks", tasks, typeof tasks);

  }, [data]);

  // useEffect(() => {
  //   console.log("tasks effect", tasks, typeof tasks);
  // }, [tasks]);

  // function addTask(taskTitle) {
  //   setTasksAndSave([...tasks, {
  //     id: crypto.randomUUID(),
  //     title: taskTitle,
  //     isCompleted: false
  //   }]);
  // }

  const handleAddTask = async (userId, description) => {
    const task = await addTaskFetch(userId, description);
    console.log("task", task);
    if (task) {
      setTasks([...tasks, task]);
    } else {
      console.log("error", errorAddTask);
    }
  }

  function deleteTaskById(taskId) {
    deleteTask(taskId);
    const newTasks = tasks.filter(task => task.id !== taskId);
    // setTasksAndSave(newTasks);
    setTasks(newTasks);

  }


  // function toggleTaskCompletedById(taskId) {
  //   const newTasks = tasks.map(task => {
  //     if (task.id === taskId) {
  //       return {
  //         ...task,
  //         isCompleted: !task.isCompleted
  //       }
  //     }
  //     return task;
  //   });
  //   setTasksAndSave(newTasks);
  // }

  function toggleTaskDoneById(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        const newStatus = task.status === "DONE" ? "OPEN" : "DONE";
        updateStatusTask(taskId, newStatus);
        return {
          ...task,
          status: newStatus
        }
      }
      return task;
    });
    // setTasksAndSave(newTasks);
    setTasks(newTasks);
  }



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredTasks = tasks.filter(task => task.description.includes(filterText));
  return (
    <>
      {/* <Header handleAddTask={addTask}/> */}
      <UserContext.Provider value={user}>

        <Header handleAddTask={handleAddTask} />
        <Filter onFilterTextChange={setFilterText} />

        <Tasks
          tasks={filteredTasks}
          onDelete={deleteTaskById}
          onComplete={toggleTaskDoneById}
        />
      </UserContext.Provider>
    </>
  )
}

export default App