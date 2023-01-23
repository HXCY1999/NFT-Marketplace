import {createContext, FunctionComponent, useContext, useState} from "react";
import {useSearchParams} from "next/navigation";

const web3Context = createContext<any>(null);

const web3Provider: FunctionComponent = ({children}) =>{

    const [web3Api, setWeb3Api] = useState({test:"Hello Provider!"})
    
    return(
        <web3Context.Provider value={web3Api}>
            {children}
        </web3Context.Provider>
    )

}

export function useWeb3(){
    return useContext(web3Context)
}

export default web3Provider;