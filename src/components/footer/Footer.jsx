import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <p>&copy; Inertia. All rights reserved</p>
            </div>

            <div className={styles.social}>
                <Image
                    className={styles.icon}
                    src="/1.png"
                    alt='social icon'
                    height={15}
                    width={15}
                />
                <Image
                    className={styles.icon}
                    src="/2.png"
                    alt='social icon'
                    height={15}
                    width={15}
                />
                <Image
                    className={styles.icon}
                    src="/3.png"
                    alt='social icon'
                    height={15}
                    width={15}
                />
                <Image
                    className={styles.icon}
                    src="/4.png"
                    alt='social icon'
                    height={15}
                    width={15}
                />
            </div>
        </div>
    )
}

export default Footer