import React, { useContext, useEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { object } from "prop-types";

export const Item = () => {
    
    const { store, actions } = useContext(Context);
    const {section, uid} = useParams()

    useEffect(() => {
        actions.getItemProperties(section, uid);
    },[section, uid])

    return (
        <>
            <div className="item">
                <img className="img" src={`https://starwars-visualguide.com/assets/img/${section}/${uid}.jpg`}/>
                <div className="properties">
                    {Object.keys(store.itemProperties)
                    .filter((key) => typeof store.itemProperties[key] === "string" && store.itemProperties[key].trim() !== "https://")
                    .map((key, index) => {
                        return (
                            <span key={index}>{`${key}: ${store.itemProperties[key]}`}</span>
                        );
                        })
                    }
                </div>
            </div>
        </>
    );
}