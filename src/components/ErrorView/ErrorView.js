import styles from './ErrorView.module.css';

function ErrorView({text , error}){
    

    return (
        error ? 
        <div className={styles.on_error}> 
            {text}
        </div>
        : 
        null
    );
}

export default  ErrorView;