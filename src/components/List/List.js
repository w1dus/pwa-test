import React from 'react';
import Item from './Item';
import styles from './List.module.css'; 

function List({list, modify, onModify, onModifyChange, modiError, checkChange, onModifySubmit, itemDel}){
    return (
        <ul>
        {list.length !== 0 ? 
            list.map((item) => 
                <Item 
                    item = {item} 
                    key = {item.id}
                    modify = {modify}
                    onModifySubmit = {onModifySubmit} 
                    onModifyChange = {onModifyChange}
                    onModify = {onModify}
                    modiError = {modiError}
                    checkChange = {checkChange}
                    itemDel = {itemDel}
                />
            ).reverse()
            : 
            <li className={styles.empty}>There are no registered items...</li>
          }
        </ul>
    );
}

export default React.memo(List);