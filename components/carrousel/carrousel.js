import { useState, useEffect } from 'react';

import styles from './carrousel.module.css'

export default function Carrousel({images}){
	const [position,setPosition] = useState(0);
	const [reset,setReset] = useState(true);
	const [animation,setAnim] = useState("inherit");

	function functionSettimeout(){
		setReset(true);
		setAnim("inherit");
		clearInterval(this);
	}

	useEffect(()=>{
		return ()=>{
            clearTimeout(functionSettimeout)
        }
	},[images])

	function nextimg(){
		if(!reset){
            return
        }
		if(position === images.length - 1){
            setAnim("prevAnim")
            setTimeout(functionSettimeout,400);
			setPosition(0)
		}else{
			setAnim("nextAnim")
			setTimeout(functionSettimeout,400);
			setPosition(e=> e+1)
		}
	}

	function previmg(){
		if(!reset){
            return
        }
		if(position === 0){
			setAnim("nextAnim")
            setTimeout(functionSettimeout,400);
			setPosition(images.length - 1)
			
		}else{
            setAnim("prevAnim")
            setTimeout(functionSettimeout,400);
			setPosition(e=>e-1)
		}
	}

	return (
		<>
			<div className={styles.carrousel}>
				<span onClick={previmg} className={styles.left}>  </span>
						
					<figure className={animation}>
						<img src={images[position]} />
					</figure>

					<div className={styles.position}>
						{
							images.map((e,i)=>{
								return <span className={styles.imgposition} id={i === position ? styles.actived : null} key={i}></span>
							})
						}
					</div>
				<span onClick={nextimg} className={styles.right}>  </span>
			</div>
			<style jsx>
				{`

					.prevAnim{
                        animation:.4s linear prevMove;
                    }
                    .nextAnim{
                        animation:.4s linear nextMove;
                    }
					@keyframes prevMove{
                        from{
							
                            transform:translateX(0%);
                        }
						20%{
							opacity:0;
						}
                        50%{
                            opacity:0;
                            transform:translateX(100%);
                        }
                        70%{
                            opacity:0;
                            transform:translateX(-100%);
                        }
                        90%{
                            opacity:1
                        }
                        to{
                            transform:translateX(0%);
                        }
                    }   
                    @keyframes nextMove{
                        from{
                            transform:translateX(0%);
                        }
						20%{
							opacity:0;
						}
                        50%{
                            opacity:0;
                            transform:translateX(-100%);
                        }
                        70%{
                            opacity:0;
                            transform:translateX(100%);
                        }
                        90%{
                            opacity:1;
                        }
                        to{

                            transform:translateX(0%);
                        }
                    }       
					
					`
				}
			</style>
		</>
	)
	
}