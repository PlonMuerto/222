import json from '../../BBDD/products.json'

import Header from '../../components/layout/header'


import styles from '../../css/pages/menu.module.css'

export default function Handler({menus,title}){
	const data = JSON.parse(menus)

	console.log(data);

	return(
		<main id={styles.menu}>
			<Header />
			
			<h1 className={styles.title}>{title}</h1>

			<section className={styles.container}>
				{
					data.map((e,i)=>{
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

export function getStaticPaths(){

	let paths = []

	for( let i in json){
		paths = [...paths,{params:{menu:i}}];
	}

	console.log(paths)

	return {
		paths,
		fallback: false
	};
}

export function getStaticProps({params}){
	
	const listMenus = json[params.menu].productos;


	return{
		props:{
			menus:JSON.stringify(listMenus),
			title:params.menu
		}
	}
}