import { Button } from "@mui/material"
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"


export const CategoryDetails = ()=>{
    const params = useParams();
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('search'))
    const navigate = useNavigate();

    useEffect(()=>{
       //API to fetch details of category
    })

    return <div>
        <Button onClick = {()=> navigate(-1)}>Back</Button>
        Category details : {params.id}
    </div>
}





