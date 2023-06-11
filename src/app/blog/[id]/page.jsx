import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation';

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        // next: { revalidate: 10 } --> revalidates every 10 sec
        cache: "no-store"
    });

    if (!res.ok) {
        return notFound()
    }

    return res.json();
}

const BlogPost = async ({ params }) => {
    const data = getData(params.id);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut alias ipsum non voluptatibus optio obcaecati explicabo eum corporis voluptatum quam, quaerat autem sed iure enim culpa quisquam architecto fuga tenetur.
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>Lorem Ipsum</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis officia aspernatur consequatur excepturi voluptates tempora temporibus alias, sed expedita culpa mollitia nobis, labore est magni ut dignissimos vitae harum exercitationem nulla. Doloribus veniam eum cupiditate minima, ullam ratione nemo esse iste pariatur, velit nobis ex! Consequuntur, fugit nesciunt quia natus distinctio animi quas quaerat ducimus laudantium voluptates veritatis in placeat ab perferendis quod itaque esse quidem tenetur delectus libero perspiciatis quasi fugiat cupiditate molestiae? Voluptatem, ipsa explicabo cupiditate assumenda similique ipsam totam, non rem molestiae dolorum voluptate eaque voluptates. Atque incidunt similique iusto non eum laboriosam rerum corporis, nostrum harum.
                </p>
            </div>
        </div>
    )
}

export default BlogPost