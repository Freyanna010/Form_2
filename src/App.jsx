import React  from "react";
import "./index.css"
import { Routes, Route, } from "react-router-dom";
import Header from "./Components/Header";
import MUIDemo from "./Components/MUIDemo";

const Step1 = () => <> stp1</>;
const Step2 = () => <> stp2</>
const Step3 = () => <> stp3</>
const Result = () => <> stp1</>



const App = () => {
 return (
   <>
     <Header />
     <Routes>
       <Route path="/" element={<MUIDemo />} />
       <Route path="/step2" element={<Step2/>} />
       <Route path="/step3" element={<Step3/>} />
       <Route path="/result" element={<Result/>} />
     </Routes>
   </>
 );
};

export default App;
