import Link from 'next/link'
import { useState } from 'react';
import Header from '../../components/layout/header.jsx';

import json from "../../BBDD/products.json";

import styles from '../../css/pages/menus.module.css'


export default function Menu(){
	const [menu,setMenu]= useState(0); 

	let section=[];

	for(let i in json){
		section = [...section,{...json[i],title:i}]
	}

	console.log(section)

	return(
		<main id={styles.menu}>
			<Header / >
			<section className={styles.container}>
				{
					section.map((e,i)=>{
						return (
							
							<figure key={i} onClick={()=>{setMenu(i)}} data-title={e.title} className={styles.producto} >	
								<img src={e.imagen} />
							</figure>
						
						)
					})
				}

			</section>

				
			<section className={styles.container2}>
				{
					section[menu].productos.map((e,i)=>{
						return (
							<article className={styles.products} key={i}>
								<h6>{e.title}</h6>
								<p>{e.descripcion}</p>
								<footer>
									<span> $ {e.price}</span>
								</footer>
							</article>
						)
					})
				}
			</section>
		</main>
	)
}