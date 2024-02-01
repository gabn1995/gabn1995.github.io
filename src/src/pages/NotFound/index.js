import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Page = () =>{
    return(
        <>
        <h1>Página não encontrada!</h1>
        <Link to="/">Voltar para Home</Link>
        </>    
    );
};

export default Page;