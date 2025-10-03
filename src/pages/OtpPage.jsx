import { useState } from "react";
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Otp } from "../components/Otp"
import { useLocation } from "react-router-dom";

export const OtpPage = ()=> {
    const [disabled, setDisabled] = useState(true);
    const location = useLocation();
    let inputValue =  location.state?.inputValue || "";
    if (inputValue != "") {
        inputValue = "Hello " + inputValue;
    }
    return( <div className="flex flex-col items-center h-screen bg-blue-700">
        <div className="mb-48">
        <Heading/>
        </div>
        <div className="text-white text-5xl mb-20"> {inputValue}</div>
        <div className="mb-24">
        <Otp number={6} setDisabled={setDisabled} className="mb-10"></Otp>
        </div>
        <Button disabled={disabled}>Submit</Button>
        </div>
    )
}