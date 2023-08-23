import React,{useState,useEffect} from 'react'






export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        console.log("Moviendo el Scroll");

        const detectarScroll=() =>{
            setScrollY(window.pageYOffset);
        }

        window.addEventListener("scroll",detectarScroll);

        //Bajandote el listener en desmontaje

        return () => {
            window.removeEventListener("scroll",detectarScroll)
            console.log("Fase de Desmontaje");
        
        };



    },[scrollY]); //Cada vez que se necesita renderizar, useEffect hará todo lo que esté en esa función, useEffect muestra en todo momento como un didupdate por defecto
        //Se renderizará en loop si no colocamos el 2 argumento,ese es un arreglo que me dice, cada que cambie sus estados
        //De ese arreglo, useEffecto lo hará. Por lo que para el caso de que queremos usar la propiedad del didmouont y la llamada a Apis, se recomiendo dejarlo
        // con un ,[] para que esté en didmount y me permita llamar solo 1 vez y no cada que se renderiza.
        //Igual si quieres que siempre renderice cada que cambie el estado de una variable entonces ponerlo y no suelto para didupdate
        useEffect(() => {
            console.log("Fase de Montaje");
    
    
        },[]);

        useEffect(() => {
            console.log("Fase de Actualización");
    
    
        });

        useEffect(() => {
            //Para desconectarte de API, intervalos de tiempo, limpiar manejadores de evento
            return ()=>{
                    
            console.log("Fase de Desmontaje");

            }
    
        });
   
   
   
   
        return(
        <>
        
        <h2>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    );
}






