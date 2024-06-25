import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export const Gallery = () => {
    
    const { store, actions } = useContext(Context);
    const { section } = useParams();

    useEffect(() => {
        if(section === 'characters'){
            actions.getCharacters();
        }else if (section === 'films'){
            actions.getFilms();
        }else if(section === 'species'){
            actions.getSpecies();
        }else if(section === 'starships'){
            actions.getStarships();
        }else if(section === 'vehicles'){
            actions.getVehicles();
        }else if(section === 'planets'){
            actions.getPlanets();
        }
    }, [section])

    return (
        <>
            <main>
                <section className="gallery">
                         {(
                            store[section].map((item, index) => {
                                return <GalleryItem item={item} section={section} key={index} actions={actions}/>
                            })
                        )}
                </section>
            </main>
        </>
    );
}

const GalleryItem = ({item, section, actions}) => {

    const [headerContent, setHeaderContent] = useState("");
    const [colorClick, setColorClick] = useState(false);

    const styleHeart = {
        fill: colorClick ? 'orange' : 'white',
        stroke: colorClick? 'orange' : 'black',
        borderColor: 'orange',
        borderRadius: '5px',
        backgroundColor: colorClick ? 'white' : 'transparent', 
    }

    const handleClickHeart = () => {
        setColorClick(!colorClick);
    }
    
    useEffect(() => {
        if(section === 'characters' || section === 'species' || section === 'starships' || section === 'vehicles' || section === 'planets'){
            setHeaderContent(item.name) 
        }else if(section === 'films'){
            setHeaderContent(item.properties.title)
        }

    })


    return (
        <>
            <div className="card">
                <h1>{headerContent}</h1>
                <img src={`https://starwars-visualguide.com/assets/img/${section}/${item.uid}.jpg`}/>
                <div className="options">
                    <Link to={`/${section}/${item.uid}`}>
                        <button className="learnMore"><strong>Learn more!</strong></button>
                    </Link>
                    <button className="heart" style={colorClick ? styleHeart : null} onClick={() => { actions.addFavorites(item, section); handleClickHeart() }}>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
    
}
