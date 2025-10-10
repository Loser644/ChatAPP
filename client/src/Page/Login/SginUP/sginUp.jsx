import { useState } from "react";
import UserNameEl from "./Nameuser";
import CpassEL from "./picPassEl";

export default function SginUp({toggle}) {
    const [isTrue,setTrue] = useState({
        usernameCom:false,
        passDiv:true
    })
    return(
        <div className="underTaker">
            <div className="baseSginComponent flex items-center justify-center p-2.5">
                {isTrue.usernameCom && <UserNameEl stoggle={setTrue}/>}
                {isTrue.passDiv && <CpassEL stoggle={setTrue}/>}
            </div>
        </div>
    )
}