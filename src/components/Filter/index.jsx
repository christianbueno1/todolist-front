import todoLogo from '../../assets/todoLogo.svg';
import styles from './filter.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineFilter } from "react-icons/ai";


import { useEffect, useState } from 'react';
// import { UserContext } from '../../MyContext';

export function Filter({ onFilterTextChange }) {
  // const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const user = useContext(UserContext);


  // function handleSubmit(event) {
  //   event.preventDefault();

  //   handleAddTask(user.id, description);
  //   // setTitle('');
  //   setDescription('');
  // }

  function onChangeTitle(event) {
    // setTitle(event.target.value);
    setDescription(event.target.value);
    onFilterTextChange(event.target.value);
  }
  useEffect(() => {
    console.log("description:", description);
  }, [description]);

  return (
    <header className={styles.header}>
      {/* <header > */}
      {/* <img src={todoLogo} /> */}

      {/* <form onSubmit={} className={styles.newTaskForm} style={{ position: 'relative' }}> */}
      <form className={styles.newTaskForm} style={{ position: 'relative' }}>
        {/* <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} /> */}
        <AiOutlineFilter size={20} style={{ position: 'absolute', left: '25px', top: '18px' }} />
        <input placeholder="filter" type="text" onChange={onChangeTitle} value={description} />
        {/* <button>Create <AiOutlinePlusCircle size={20} /></button> */}
      </form>
    </header>
  )
}