import React from "react";
import practikumLogo from "../../../images/praktikum-logo.svg";
import "./Promo.css";
import {NavTab} from "../NavTab/NavTab";


export function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="promo__image" src={practikumLogo} alt="Логотип Практикум" />
            </div>
            <NavTab/>
        </section>
    )
}