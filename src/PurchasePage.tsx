import * as React from 'react'
import {useWeb3ModalAccount, useDisconnect, useWeb3ModalProvider} from "@web3modal/ethers/react";
import {redirect} from "react-router-dom";
import {Box, Button, CircularProgress, Divider, FormControl, Input, Typography} from "@mui/joy";
import {BrowserProvider, ethers} from 'ethers'
import prettyMilliseconds from 'pretty-ms';
import ConnectPage from "./ConnectPage";
import {useAsync} from "react-async";
import {useEffect, useState} from "react";

const contractAddress = '0x25068d6f9Ce647d0F9e65CAC76483c81f532f977';
const abi = [
    'function balanceOf(address) view returns (uint)',
    'function purchase(uint256,string) returns (uint)',

]
export default function PurchasePage() {
    const {disconnect}=useDisconnect()
    const {address, chainId} = useWeb3ModalAccount();
    const {walletProvider} = useWeb3ModalProvider()
    const [hours, setHours] = useState(0n)
    const [email, setEmail] = useState('')
    const [balance, setBalance] = useState(0n)
    const [isLoading, setIsLoading] = useState(false)
    const [lastError, setLastError] = useState<unknown|undefined>()
    if (isLoading){
        return (<Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        ><CircularProgress/></Box>);
    }
    return (<Box>
        <Typography level="h4">Zorotocol</Typography>
        <Typography level="h2">Purchase</Typography>
        <Box>
            <Typography color="primary" level="body-sm" onClick={()=>{
                if (isLoading) return;
                setIsLoading(true)
                balanceOf(walletProvider!,address!).then((n)=>{
                    setBalance(n)
                }).catch((e)=>{
                    setLastError(e)
                }).finally(()=>setIsLoading(false))
            }}><Typography>Your Balance:</Typography> <PrettyHours hours={balance}/></Typography>
        </Box>
        <Box sx={{m:2}}>
            <Input value={hours.toString()} placeholder="hours" onChange={(event) =>{
                try {
                    setHours(BigInt(event.target.value??0))
                }catch (e){}
            }} type="tel"></Input>
            <Typography  level="body-sm" ><PrettyHours hours={hours}/></Typography>
        </Box>
        <Box sx={{m:2}}>
        <Input placeholder="email" value={email.toString()} onChange={(event) => setEmail(event.target.value)} type="email"></Input>
        </Box>
    <Box sx={{m:2}}>
        <Button sx={{width:1}} onClick={()=>{
            if(isLoading)return
            setIsLoading(true)
            purchase(walletProvider!,email,hours).then(()=>{
                setLastError(undefined)
                setEmail('')
                setHours(0n)
                alert('sent')
            }).catch((e)=>setLastError(e)).finally(()=>setIsLoading(false))

        }}>Send</Button>
</Box>
        <Box sx={{m:2}}><Typography level="body-xs">{lastError?.toString()}</Typography></Box>
        <Box sx={{m:2}}><Typography onClick={()=>disconnect()} level="body-xs" color="danger">Disconnect</Typography></Box>
    </Box>)
}

async function purchase(walletProvider:ethers.Eip1193Provider,email:string,hours:bigint){
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)){
        throw new Error('invalid email')
    }
    if (hours <= 0n){
        return new Error('invalid hours')
    }
        const signer = await (new BrowserProvider(walletProvider)).getSigner();
        const contract = new ethers.Contract(contractAddress,abi,signer)
        await contract.purchase(hours,email);
}
async function balanceOf(walletProvider:ethers.Eip1193Provider,address:string){
        const signer = await (new BrowserProvider(walletProvider)).getSigner();
        const contract = new ethers.Contract(contractAddress,abi,signer)
        return await contract.balanceOf(address);

}

function PrettyHours(props:{hours:bigint}){
    if (props.hours === 0n){
        return <Typography></Typography>
    }
    return <Typography>{prettyMilliseconds(props.hours * 3600000n)}</Typography>;
}