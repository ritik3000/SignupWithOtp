import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/Main'
import { useState } from "react";
import { OtpPage } from './pages/OtpPage';

export function App() {
return (<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPage/>} />
  <Route path="/otp" element={<OtpPage/>} />
</Routes>
    
</BrowserRouter>)
}

export default App
