import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge, Button, Card, CardActionArea,  CircularProgress, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

function People(props){
    return(
        <Card className="person">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Avatar src={props.image_path} alt={props.name} sx={{ width: 50, height: 50, bgcolor:"#db869d", marginRight:"10px"}}></Avatar>
            <h5>{props.name}</h5>
            </div>
            <p>{props.details}</p>
            <CardActionArea className="ca">
            <Button size="small" className="lm" color="secondary" href={props.website} target="_blank">Learn More</Button>
            </CardActionArea> 
        </Card>
    )
}

export default function Inspiration(){
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch("https://women-in-tech.apievangelist.com/apis/people/")
        .then((res)=>res.json())
        .then((val)=>{
            setData(val);
            setLoaded(true);
        })
    });
    if(loaded==false){
        return(
            <div className="App" style={{
                fontFamily: "Poppins",
                width: "100%",
                alignContent: "center",
                padding: "2%"}}
                >
                    <h2 >Get Inspired</h2>
                <h4>Check out some amazing Womxn pioneers in Tech</h4>
                <input type="text" placeholder="Search a person 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <br/>
                <div className="list1">
                <LinearProgress color="secondary"/>
                </div>
            </div>
        )
    }
    return(
        <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            padding: "2%"}}
            >
                <h2 >Get Inspired</h2>
                <h4>Check out some amazing Womxn pioneers in Tech</h4>
                <input type="text" placeholder="Search a person 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <div className="list1">
                {data.filter((val)=>{
                    if(search==""){
                        return val
                    }
                    else if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val;
                    }
                    
                }).map(People)}
                </div>
        </div>
    )
}