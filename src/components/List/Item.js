import ErrorView from '../ErrorView/ErrorView';
import styles from './Item.module.css';

function Item({ item, modify , onModifySubmit, onModifyChange , onModify , modiError , checkChange , itemDel }){
    
    return (
        <>
           <li key={item.id} >
                <div className={item.check ? styles.item_check : styles.item} >
                    {
                    item.modify ?
                        <>
                            <form onSubmit={onModifySubmit} className={styles.modi_form}>
                                <input type="text" 
                                    value={modify} 
                                    onChange={onModifyChange} 
                                    placeholder="please press enter..."
                                    className={styles.modi_input}
                                />
                            </form>
                            <ErrorView text="🚫 Oops! Please, enter item" error={modiError}/>
                        </>
                    :
                        <span className={styles.span} onClick={() => checkChange(item.id)}>{item.value}</span> 
                    }
                    <div className={styles.btnWrap}>
                    {
                        item.modify ? 
                        <button onClick={onModifySubmit} >✍️</button>
                        :
                        <button onClick={()=> onModify(item.id , item.value)} >✍️</button>
                        }
                        <button onClick={() => itemDel(item.id)}>❌</button>
                    </div>
                </div>
                
            </li>
        </>
    );
}

export default Item;