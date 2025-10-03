import { useState } from "react";
import UserNameEl from "./Nameuser";

export default function SginUp({toggle}) {
    const [isTrue,setTrue] = useState({
        usernameCom:true,
        email:false
    })
    return(
        <div className="underTaker">
            <div className="baseSginComponent flex items-center justify-center p-2.5">
                {isTrue.usernameCom && <UserNameEl stoggle={setTrue}/>}
            </div>
        </div>
    )
}