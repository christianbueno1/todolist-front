import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { UserContext } from '../../MyContext';

export function Header({ handleAddTask}) {
  // const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const user = useContext(UserContext);


  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(user.id, description);
    // setTitle('');
    setDescription('');
  }

  function onChangeTitle(event) {
    // setTitle(event.target.value);
    setDescription(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        {/* <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} /> */}
        <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={description} />
        <button>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}