import React from 'react'
import { useState } from 'react';
import styles from './todo.module.css';

const Todosinput = ({addItem}) => {
    const [value, setValue] = useState('');
  return (
    <div className={styles.mainInput}>
        <input
            className={styles.inputBar}
            type="text"
            value={value}
            placeholder='Write Something'
            onChange={ (e) => {
                setValue(e.target.value);
            }}
        />

        <button
        className={styles.inputBtn}
            onClick={ () => {
                if(value !== '')
                {
                    addItem(value)
                }
                setValue('');
            }}>
            +
        </button>
    </div>
  )
}

export default Todosinput