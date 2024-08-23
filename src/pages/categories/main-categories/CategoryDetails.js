import { Button } from "@mui/material"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"


export const CategoryDetails = ()=>{
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
       //API to fetch details of category
    })

    return <div>
        <Button onClick = {()=> navigate(-1)}>Back</Button>
        Category details : {id}
    </div>
}





