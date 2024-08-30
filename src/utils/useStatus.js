import { useEffect, useState } from "react";

const useSatus = () =>{

    const [chkStatus,setChkStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("online",(e)=>{
            setChkStatus(true);
        })

        window.addEventListener("offline",()=>{
            setChkStatus(false)
        })
    },[])
   


    return chkStatus;
}

export default useSatus;