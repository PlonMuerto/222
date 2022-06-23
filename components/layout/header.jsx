import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from'next/image'
import {useRouter} from 'next/router';

import styles from '../../css/layout/header.module.css'

const logos = ["https://mrjoe.com.co/wp-content/uploads/2022/03/LOGO-MISTER-JOE-WEB-150x150.png","https://mrjoe.com.co/wp-content/uploads/2022/03/LOGO-PLAZA-DEL-JOE-WEB-150x150.png"]



export default function Header(){
	const router = useRouter();

	const [position,setPosit] = useState(0);

	return(
		<header className={styles.header}>

			<nav className={styles.navbar}>
				<div className={styles.menuleft}>
					{/*
						<a id={router.pathname === "/menu" ? styles.actived : null} className={styles.link}>menu</a>
					
	*/}
					<Link href="/ubicanos">
						<a id={router.pathname === "/ubicanos" ? styles.actived : null} className={styles.link}>puntos de atencion</a>
					</Link>
				</div>
				<figure className={styles.logo}>
					<Link href="/menu">
						<div className={styles.menulink}>
						
							<span className={styles.letter}>M</span>
							<span className={styles.letter}>E</span>
							<span className={styles.letter}>N</span>
							<span className={styles.letter}>U</span>
							
						</div>
					</Link>
					<Link className='image' href={"/"}>
						<Image src={logos[position]} alt="logo mrjoe" width={200} height={200} objectFit="contain" />
					</Link>
				</figure>
				<div className={styles.menuright}>
					<Link href="https://docs.google.com/forms/d/13HqIvHKnAnJ0p5aS5m9uXndS5P2A5MRLvkDRHZMCFnc/viewform?edit_requested=true">
						<a className={styles.link} target="_blank">trabaja con nosotros</a>
					</Link>
					
					<Link href="https://docs.google.com/forms/d/1kB5Vgghzdau43BwKEzu4JJ8GQ1O_WqE3qByTe3NQpFM/viewform?edit_requested=true">
						<a className={styles.link} target="_blank">comentarios sobre nosotros</a>
					</Link>
				</div>
			</nav>
		</header>
	)
}
