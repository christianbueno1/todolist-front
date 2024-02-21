import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {/* {task.isCompleted ? <BsFillCheckCircleFill /> : <div />} */}
        {task.status === "DONE" ? <BsFillCheckCircleFill /> : <div />}
      </button>

      {/* <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p> */}
      <p className={task.status === "DONE" ? styles.textCompleted : ""}>
        {task.description}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}