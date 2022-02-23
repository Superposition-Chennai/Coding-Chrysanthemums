import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Card, CardActions,  } from "@material-ui/core";
import { Badge, Button, CardActionArea } from '@mui/material';
import { useState } from "react";
import { withStyles } from "@material-ui/core";
  

function Hackathon(props){
    return(
        <Card className="hack">
            <Badge badgeContent={props.type} sx={{"& .MuiBadge-badge":{backgroundColor:"#db608b", color:"#fff"}}}>
            <img src={props.img} width="100px" style={{margin:"5px"}}/></Badge>
            <h5>{props.name} <a href={props.link} target="_blank"><FontAwesomeIcon icon={faLink}/></a></h5>
            <CardActionArea className="ca">
            <Button size="small" className="lm" color="secondary">{props.date}</Button>
            </CardActionArea>
            
        </Card>
    )
}

export default function Hackathons(){
    const [search, setSearch] = useState('');
    let list = [
        {
            name:"WiCHacks",
            img:"https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/210/565/thumb/WiCHacks_Event_Background.png?1643061518",
            link:"https://wichacks.io/",
            date:"Feb 26 - 27",
            type:"Diversity"
        },
        {
            name:"TechTogether Chicago",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/779/222/datas/medium.png",
            link:"https://chicago.techtogether.io/",
            date:"Feb 25 - 27",
            type:"Diversity"
        },
        {
            name:"Creatica",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/816/045/datas/medium.png",
            link:"https://www.creatica.io/",
            date:"April 29 - May 1",
            type:"Diversity"
        },
        
    ]
    return(
        <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            padding: "2%"}}
            >
                <h2 >Hackathons</h2>
                <input type="text" placeholder="Search an opportunity" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <div className="list1">
                {list.filter((val)=>{
                    if(search==""){
                        return val
                    }
                    else if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.date.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.type.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    
                }).map(Hackathon)}
                </div>
                <h6>Want to add your hackathon here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></h6>
        </div>
    );
}