import react from "react";

function Felicitation({ hidden, setHidden }) {

    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Animation fluide
        });
    };
    
    return (
        !hidden && ( 
            <div className="felici">
                <div className="felicitation-container">
                    <h1>Félicitations !</h1>
                    <img src ="true.png" alt = "true" className="img22" />
                     <h2> Vous avez accompli votre tâche en appliquant la méthode Feng Shui avec succès.</h2>
                    <button className="btn2" onClick={() => {setHidden(true);scrollToTop()}}>
                        <b>TERMINER</b>
                    </button>
                </div>
            </div>
        )
    );
}

export default Felicitation;