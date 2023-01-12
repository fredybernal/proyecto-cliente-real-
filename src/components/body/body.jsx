import "./styles.css" 
import Portada from './img/portada2.png'

export default function Body() {

    return (
        <>
        <body>
            <p>Mis Yulian’s, es un negocio con mas de 10 años de experiencia en el ambito de venta de abarrotes
                 y atencion al cliente, con altas espectativas de llevar nuestra experiencia y atencion a cada 
                 uno de sus hogares, en nuestro portafolio podras encontrar cualquier insumo que necesites para
                  tu hogar de la mejor calidad. <br />! Siempre al alcance de tu mano ! </p>
            <img src={Portada} alt="segunda-portada" />
            <button>mira aqui nuestro portafolio</button>
        </body>
        </>
    );
}