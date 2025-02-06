import { useState , useRef , useEffect} from "react";
import Eau from './eau'; 

function Home(){
    const [inputvalue, setInputvalue] = useState("");
    const [displayedTask, setDisplayedTask] = useState(null);
    const [showContainer, setShowContainer] = useState(false);
    const [showfalse, setshowfalse] = useState(false);

    const containerRef = useRef(null)

    const handlechange = (e) =>{
        setInputvalue(e.target.value)
    }

    useEffect(() => {
    if (containerRef.current && showContainer) {
        containerRef.current.scrollIntoView({ behavior: "smooth" });
        
      }
    }, [showContainer , displayedTask]);



    const handleCommencer = () => {
        if (inputvalue.trim() !== "") {
            setDisplayedTask(inputvalue);
            setInputvalue("");   
            setShowContainer(true); 
            setshowfalse(false);
        }else{
            setshowfalse(true);
        }
    };
    
   
    return(
        <>
        <div className="feng">
            <h1>FENG SHUI</h1>
            <div className="yss0">
                <div className="yassine">
                    <div className="yass">
                        <h2>DONNER UN NOM POUR VOTRE TACHE</h2>
                        <input placeholder="Ecriver Votre Tache" value={inputvalue} onChange={handlechange} />
                    </div>
                        {showfalse && <h4 className = "hh44" style={{color:"red"}}>.Entrez une tâche correcte</h4>}
                    
                    <p>Bienvenue sur FENG SHUI une approche innovante et inspirante pour organiser vos projets.<br/>
                        Basée sur la philosophie ancestrale des 5 éléments chinois <b>Eau, Bois, Feu, Terre, Métal</b><br/>
                        cette méthode vous guide étape par étape pour mener à bien vos tâches avec équilibre et efficacité.
                    </p>
                    <div className="btn" >
                        <button onClick={()=>{handleCommencer(Eau.setTimers)} }>COMMENCER</button>
                    </div>
                </div>
                <div className="yassine2">
                    <img src="feng.jpg" alt="feng"/>
                </div>
            </div>
                
                
            </div>
            {displayedTask ? <Eau ref={containerRef} inputvalue={displayedTask}/> : null}
            
            </>
    )
}
export default Home;