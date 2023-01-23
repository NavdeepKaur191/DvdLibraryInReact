import Table from "./Table";
import TopBar from "./TopBar";
import {useEffect,useState} from 'react';

export default function MainPage()
{
    const url="http://dvd-library.us-east-1.elasticbeanstalk.com";
    const [dvds,setDvds]=useState([]);
    useEffect(()=>{getDvdData()},[]);
    async function getDvdData()
    {
        const response= await fetch(url+"/dvds");
        const data = await response.json();
        setDvds(data);
    }

    
    function handleEdit(dvdId)
    {
        fetch(url+"/dvd/"+dvdId)

    }
    return(
        <>
        <TopBar/>
        <Table dvds={dvds}         
        handleEdit={handleEdit}
        />
        </>
    )
}