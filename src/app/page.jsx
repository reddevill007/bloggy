import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design your digital products</h1>
        <p className={styles.containedesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nobis assumenda cumque libero ea, optio eos
          vero explicabo officia fugiat maxime?
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/hero.png"
          width={500}
          height={500}
          alt='hero'
        />
      </div>
    </div>
  )
}
