import React from "react";
import Searchsection from "./Searchsection";
import Packages from "./Packages";
import Appdownload from "./Appdownload";
 

export default function Home(){

    return <>
     <Searchsection/>
      <Packages/>  
      <Appdownload/>
    </>
}