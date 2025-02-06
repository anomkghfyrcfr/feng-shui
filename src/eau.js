import  {useState , useRef , forwardRef, useEffect} from "react";
import Paraeau from "./paraeau";
import Felicitation from "./felicitation";
const Eau = forwardRef(({inputvalue , isended , setisended}, ref)=>{

    const paraeauRefs = useRef([]);
    const [hidden, setHidden] = useState(true);
    const [timers, setTimers] = useState([
        { id:1, title: "EAU : Réfléchir et planifier avec calme.",active:true , originalNumber: 900,number: 900, color: "#ADD8E6", originalColor: "#ADD8E6", hrcolor: "3px solid #add8e6aa" },
        { id:2, title: "BOIS : Stimuler votre créativité pour développer des idées.",active:false , originalNumber: 600, cursor: "not-allowed" , loun:"gray", number: 600, color: "grey", originalColor: "#4CAF50", colorr:"white" ,hrcolor: "3px solid #4CAF50" },
        { id:3, title: "FEU : Agir avec passion pour concrétiser vos projets." ,active:false, originalNumber: 3600,cursor: "not-allowed" , loun:"gray" ,number: 3600, color: "grey", originalColor: "#FF4500", colorr:"white" , hrcolor: "3px solid #FF4500" },
        { id:4, title: "TERRE : Renforcer la stabilité et structurer vos efforts." ,active:false, originalNumber: 1800,cursor: "not-allowed" , loun:"gray" , number: 1800, color: "grey", originalColor: "#D2B48C", hrcolor: "3px solid #D2B48C" },
        { id:5, title: "MÉTAL : Affiner les détails pour atteindre la perfection.",active:false, originalNumber: 900, cursor: "not-allowed" , loun:"gray", number: 900, color: "grey", originalColor: "#C0C0C0", hrcolor: "3px solid #C0C0C0" }
    ]);


    const handleSkip = (index) => {
        setTimers((prevTimers) =>
            prevTimers.map((timer, i) => {
                if (index === prevTimers.length - 1) { // clique sur le dernier index
                    
                    paraeauRefs.current.forEach((resetFunc , idx) => {
                        if (resetFunc && idx !== 0 ) { resetFunc() ; 
                        }else if (idx === 0) {resetFunc() ;
                            setTimers((prev) =>
                                prev.map((t, index0) =>
                                    index0 === 0
                                        ? {
                                            ...t,
                                            color: "#ADD8E6", 
                                            loun: "#190061",
                                            cursor:"pointer",
                                            active:true
                                          }
                                        : t
                                )
                            );
                        }
                    
                    });
                    setHidden(false); 


                    return {
                        ...timer,
                        color: "gray", 
                        colorr: "black",
                        loun: "grey",
                        cursor: "not-allowed",
                        active:false
                        
                    };
                }
                

                if (i < index) {// les index precedantes
                    
                    return {
                        ...timer,
                        color: "#00FF00",
                        colorr:"white", 
                        loun:"#190061",
                        cursor:"pointer",
                        // isended:true
                        
                    };
                } else if (i === index) { //l index actuelle
                    
                    if (timer.color === "#00FF00") { //green
                        return {
                            ...timer,
                            color: timer.originalColor, 
                            colorr: "black",
                            loun:"#190061", 
                            cursor:"pointer",
                            number: timer.number,
                            active:true,
                            // isended:false
                        };
                    } else {
                        return {
                            ...timer,
                            color: "#00FF00", 
                            colorr: "white",
                            loun:"#190061",
                            active:true,
                            // isended:false
                        };
                    }
                } else if (i === index + 1) { // l index suivant
                    
                    return {
                        ...timer,
                        color: timer.originalColor,
                        loun:"#190061",
                        cursor:"pointer",
                        active:true,
                        // isended:true,
                    };
                } else { // les autres index
                    
                    return {
                        ...timer,
                        color: "gray",
                        colorr:"black",
                        // isended:false

                        
                    };
                }
            })
        );
    };
    return(
        <div className="eau-container" ref={ref}> 
            <div className="timers-container">
            <p className="titre2"><b>{inputvalue}</b></p>
            {timers.map((timer, index) => (
                <Paraeau
                    key={index}
                    index={index}
                    title={timer.title}
                    number={timer.number}
                    isended={timer.isended}
                    color={timer.color}
                    hrcolor={timer.hrcolor}
                    colorr={timer.colorr}
                    loun={timer.loun}
                    cursor={timer.cursor}
                    onSkip={() => handleSkip(index)}
                    active={timer.active || false}
                    onReset={(handlerest) => {
                        paraeauRefs.current[index] = handlerest;
                    }} 
                    
                />
                    

            ))}   
            </div>     
            <Felicitation hidden={hidden} setHidden={setHidden} />
            </div>
    )
});
export default Eau;