import React from "react";

export default function Footer() {

    return (
        <div>
            <p>
                This project was coded by {''}
                <a href="https://github.com/irenagrocka-ad" target="_blank" rel="noreferrer"
                >Irena Grocka</a
                >
                {''} and is {''}
                <a
                    href="https://github.com/irenagrocka-ad/weather-react-ig"
                    target="_blank" rel="noreferrer"
                >
                    on GitHub</a
                >
                {''} and {''}
                <a href="https://weather-app-ig.netlify.app/" target="_blank" rel="noreferrer"
                >hosted on Netlify</a
                >
            </p>
        </div>
    );
}