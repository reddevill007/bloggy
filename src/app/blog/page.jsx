import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // next: { revalidate: 10 } --> revalidates every 10 sec
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const Blog = async () => {
    const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {data.map((item) => (
                <Link key={item.id} href="/blog/testId" className={styles.container}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                            alt='anc'
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blog