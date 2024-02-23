import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CarDetails from "./CarDetails";

export default function AllRoutes() {
    return <>
    <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/login" element= {<Login />}/>
        <Route path="/register" element= {<Register />}/>
        <Route path="/car/:carId" element= { <CarDetails />}/>
    </Routes>
    </>
}