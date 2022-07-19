import { useEffect, useState,useRef } from "react";

export const Timer = () => {
  const [time, setTimer] = useState(0);
  //const [pause,setpause] = useState(false);
  const timerRef = useRef(null)  // current : null
  useEffect(() => {
    
    timerRef.current = setInterval(() => {
      setTimer((prevState) => {
        //console.log(prevState)
        if (prevState >= 10) {
          //console.log("hi")
          clearInterval(id);
          return 0;
        }
        return prevState + 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Time:{time}</h1>
      <button
        onClick={() => {
          setTimer(0);
        }}
      >
        Start
      </button>
      <button onClick={() => {
        clearInterval(timerRef.current);
      
      }}>Pause</button>
    </div>
  );
};
