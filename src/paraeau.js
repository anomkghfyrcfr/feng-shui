import { useEffect ,useState } from "react";
// import Eau from "./eau";

export default function Paraeau(props){
    const [second,setSeconds] = useState(props.number);
    const [run ,setRun] = useState(false);
    const [ isended , setisended] = useState(false);
    useEffect(()=>{
                let timer;
                if(run){
                    timer = setInterval(() => {
                       setSeconds((prevSeconds)=> prevSeconds - 1) 
                    }, 1000);
                }else{
                    clearInterval(timer)
                }
                return ()=> clearInterval(timer);
            }, [run])
    
            const formatTime = (seconds) => {
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                return `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
              };
    
            const handlestart = ()=> setRun(true);
            const handlepause = ()=> setRun(false);
            const handlerest = ()=>{
                setRun(false);
                setSeconds(props.number);
                setisended(false);
            }

            useEffect(() => {
                if (props.onReset) {
                    props.onReset(handlerest);  
                    
                }
            }, [props, handlerest]);

    return(
    <>
        <div className="divhr">
        <hr className="hr" style={{border:props.hrcolor}}/>
    </div>
    <div className="diveau">
        <div className="eau" style={{backgroundColor:props.color , color:props.colorr}}>
            <p><b>{props.title} </b></p>
            <div className="chrono" style={{backgroundColor:props.lon}}>
            <div className="chronometre" style={{ fontSize: "2.1vw", marginBottom: "1.5vw", color :"white"}}>
                {formatTime(second)}
            </div>
            <div className="btn">
                <button onClick={handlestart}>START</button>
                <button onClick={handlepause}>PAUSE</button>
                <button onClick={handlerest}>RENOUVLER</button>
            </div>
            
            </div>
            <div className="btn">
            <button 
                onClick={ 
                    ()=>{  
                        props.onSkip();
                        setSeconds(isended ? props.number : 0);
                        handlepause();
                        setisended(!isended);
                        
                    }
                }
                disabled={!props.active}
                style={{backgroundColor:props.loun , cursor:props.cursor , fontSize:isended ? "0.9vw":"0.9vw"}}
            >
                {isended ? "RECOMMENCER" : "TERMINER"}
                {console.log(isended)}
            </button>
            </div>
        </div>
        {/* <Eau isended={isended} setisended={setisended}/> */}
    </div>
</>
    )
}