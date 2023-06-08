import React from 'react'
import styles from './page.module.css'


const Catagory = ({ params }) => {
    console.log(params)
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.catagory}</h1>
            <div className={styles.item}>

            </div>
        </div>
    )
}

export default Catagory