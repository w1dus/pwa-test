
import React from 'react'; 
import styles from './DateView.module.css';


function DateView(){

    
    const date = new Date();
    const dateArray = {
        year : date.getFullYear(),
        month : String(date.getMonth() + 1).padStart(2,"0"),
        day : String(date.getDate()).padStart(2,"0"),
        week : date.getDay()
    }

    const weekChangeText = [ "Sunday 🖖" ,"Monday 💪😀" ,"Tuesday 😜" ,"Wednesday 😌☕️" ,"Thursday 🤗" ,"Friday 🍻" ,"Saturday 😴" ]


    return (
        <div>
            <h4 className={styles.date}>
            {dateArray.year}. {dateArray.month}. {dateArray.day} 
            </h4>
            <h1 className={styles.week}>Have a nice {weekChangeText[dateArray.week]}</h1>
        </div>
    );
}

export default  DateView;