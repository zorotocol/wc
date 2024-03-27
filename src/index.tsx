import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './web3';

import PurchasePage from "./PurchasePage";
import {useWeb3ModalAccount} from "@web3modal/ethers/react";
import ConnectPage from "./ConnectPage";

function App(){
    const {isConnected} = useWeb3ModalAccount();
    if (isConnected) {
        return (<PurchasePage/>);
    }else{
        return (<ConnectPage/>);
    }
}



createRoot(document.getElementById('app')!).render(<App/>);

