import FaceToggle from "../../../lib/tabToggle";
export default function UserNameEl({stoggle}) {
    const {setTab} = FaceToggle();
    return(
        <div className="underTaker">
            <div className="nameComDiv flex items-center justify-center">
                <div className="formDiv">
                    <form action="">
                        <div className="Logotxt flex items-center flex-col w-[120px] absolute top-[-100px]">
                            <i className='bx bx-code-block text-5xl
                            transition-all duration-500 ease-in-out bg-[length:200%_200%]
                            bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                            bg-clip-text text-transparent
                            '></i>
                            <h2 className=' font-bold text-2xl transition-all duration-500 ease-in-out bg-[length:200%_200%]
                            bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                            bg-clip-text text-transparent'>CodeCove</h2>
                        </div>
                        {/* <h1 className="flex items-center justify-center text-red-600 font-bold">Stay 
                            <span>
                                <span>Safe, Stay Anonymous</span>
                                <span>Curious, Keep Building</span>
                                <span>Connected, Without Labels</span>
                                <span>Ahead, Follow the Revolution</span>
                                <span>Hidden, Yet Heard</span>
                            </span>
                        </h1> */}
                        <div className="inputDiv">
                            <input type="text" id="FullName" required />
                            <label htmlFor="FullName"><i className="bx bx-id-card">Name</i></label>
                        </div>
                        <div className="inputDiv">
                            <input type="text" id="UserName" required/>
                            <label htmlFor="UserName"><i className="bx bx-user">Username</i></label>
                        </div>
                        <div className="inputDiv">
                            <button type="button" className="text-btn" onClick={()=>setTab("front")} >Create Account</button>
                            <button type="submit" className="btn">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}