import { useState, useEffect } from 'react';
import { PokemonModel } from '../Model/PokemonModel';

const ESTADO_INICIAL = [
    { Name: "Pikachu", Life: 100, Image: "https://www.icegif.com/wp-content/uploads/2024/05/pikachu-icegif-5.gif", Type: "Eléctrico", Level: 89 },
    { Name: "Charizard", Life: 90, Image: "https://giffiles.alphacoders.com/990/9902.gif", Type: "Fuego", Level: 92 }
];

export const usePokemonController = () => {
    const [mensaje, setMensaje] = useState("");

    const [pokemonList, setPokemonList] = useState(ESTADO_INICIAL);

    useEffect(() => {
        const pokemonModel = new PokemonModel('http://backend.com/ruta-de-eventos');

        // Callback
        const onMensajeRecibido = (data) => {
            console.log("¡El backend envió algo nuevo!", data);

            if (data && typeof data === 'object' && data.jugador !== undefined) {
                setPokemonList(prevList => {
                    const nuevaLista = [...prevList];
                    nuevaLista[data.jugador].Life = data.vidaActual;
                    return nuevaLista;
                });
            } else {
                setMensaje(data);
            }
        };

        pokemonModel.suscribirse(onMensajeRecibido);


        return () => {
            pokemonModel.desconectarse();
        };

    }, []);

    // Retorno de cosas necesarias para el render
    return {
        mensaje,
        pokemonList,
        setPokemonList
    };
};
