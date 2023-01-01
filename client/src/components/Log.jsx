import React from "react";
import Axios from 'axios';
import { useState } from "react";
export default function Log () {
    
        const [email , setEmail] = useState("");
        const [user, setUser] = useState("");
        const [pwd , setPwd] = useState("");

        const addme = () => {
            Axios.post("http://localhost:3001/profiles", {email : email , user : user , pwd : pwd}).then(() => console.log("Succss"));
        }

        return (
            <>
                    <div className="box" >

                            <div className="miIn">
                                <label>E-mail Yop
                                    <input type="text" placeholder="Email (Yopmail)"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}/>
                                </label>

                                <label>Username
                                    <input type="text" placeholder="Username"
                                    onChange={(e) => {
                                        setUser(e.target.value);
                                    }}/>
                                </label>

                                <label>Password
                                    <input type="password" placeholder="Password"
                                    onChange={(e) => {
                                        setPwd(e.target.value);
                                    }}/>
                                </label>
                                

                                    <button onClick={addme}>Log in</button>

                            </div>

                    </div>
            </>
        )
    
}