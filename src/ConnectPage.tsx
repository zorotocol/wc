import * as React from 'react';
import {Box, Button, CircularProgress} from "@mui/joy";
import {useWeb3Modal} from "@web3modal/ethers/react";

export default function ConnectPage(){
   const {open}= useWeb3Modal()
    return (<Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
       <Button onClick={()=>open()}>Connect Wallet</Button>
    </Box>);
}