
import { Button } from '../components/Button'
import { MainBody } from '../components/MainBody'
import { Heading } from '../components/Heading'
import { InputComponent } from '../components/InputComponent'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const MainPage = () => {
    const [inputValue, setInputValue] = useState('');
     const navigate = useNavigate();
      return (
        <div className="flex flex-col h-screen bg-blue-700">
            <div className="flex flex-col items-center text-center gap-y-72">
        <Heading></Heading>
          <MainBody></MainBody>
          </div>
          <div className="flex flex-col  items-center justify-start space-y-11 mt-20">
            <InputComponent type="text" placeholder="User Name"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <Button disabled={!inputValue} onClick={()=> {
                navigate("/otp", {state: {inputValue}});
            }}>Sign Up</Button>
          </div>
        </div>
      )
}