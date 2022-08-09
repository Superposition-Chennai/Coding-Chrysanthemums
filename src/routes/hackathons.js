import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Card, IconButton  } from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { Badge, Button, CardActionArea, CircularProgress, LinearProgress, Pagination } from '@mui/material';
import { useState, useEffect } from "react";
  

function Hackathon(props){
    if(props.url){
        return(
            <Card className="hack">
                <Badge badgeContent={"MLH"} sx={{"& .MuiBadge-badge":{backgroundColor:"#9943ab", color:"#fff"}}}><img src={props.imageUrl} width="100px" style={{margin:"5px"}}/></Badge>
                <h5>{props.name} <a href={props.url} target="_blank"><OpenInNew color="secondary"/></a></h5>
                <CardActionArea className="ca">
                <Button size="small" className="lm" color="secondary">{props.location}</Button>
                </CardActionArea> 
            </Card>
        )
    }
    else{
        return(
            <Card className="hack">
                <Badge badgeContent={props.type} sx={{"& .MuiBadge-badge":{backgroundColor:"#db608b", color:"#fff"}}}>
                <img src={props.img} width="100px" style={{margin:"5px"}}/></Badge>
                <h5>{props.name} <a href={props.link} target="_blank"><OpenInNew color="secondary"/></a></h5>
                <CardActionArea className="ca">
                <Button size="small" className="lm" color="secondary">{props.date}</Button>
                </CardActionArea>
            </Card>
        )
    }
}
export default function Hackathons(){
    const [search, setSearch] = useState('');
    const [mlh, setMlh] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [page, setpage] = useState(1);
    useEffect(()=>{
        fetch("https://mlh-events.vercel.app/2023")
        .then((res)=>res.json())
        .then((val)=>{
            setMlh(val);
            setDataLoaded(true);
        });
        
    });
    const handlePageChange = (event, newPage) => {
        setpage(newPage);
    }
    let list = [
        {
            name:"cmd-f",
            img:"data:image/png;base64,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",
            link:"https://cmd-f.nwplus.io/",
            date:"Mar5th-6th",
            startDate:"2022-03-05",
            endDate:"2022-03-06",
            type:"Diversity"
        },
        {
            name:"Creatica",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/816/045/datas/medium.png",
            link:"https://www.creatica.io/",
            date:"Apr29th-May1st",
            startDate:"2022-04-29",
            endDate:"2022-05-1",
            type:"Diversity"
        },
        {
            name:"TechTogether Chicago",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/779/222/datas/medium.png",
            link:"https://chicago.techtogether.io/",
            date:"Feb25TH-27TH",
            startDate:"2022-02-25",
            endDate:"2022-02-27",
            type:"Diversity"
        },
        {
            name:"TIQC x Code Resolve x Girls Who Code Hacks",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/849/278/datas/medium.png",
            link:"https://tqic-cr-gwc-hacks.devpost.com/",
            date:"Mar4th",
            startDate:"2022-03-04",
            endDate:"2022-03-04",
            type:"Diversity"
        },
        {
            name:"TechNova",
            img:"https://www.itstechnova.org/static/media/logo.a6d44d35.png",
            link:"https://itstechnova.org",
            date:"Aug23rd",
            startDate:"2022-08-23",
            endDate:"2022-08-28",
            type:"Diversity"
        }
    ];
    list = list.concat(mlh);
    mlh.forEach((e)=>{
        e["type"]="MLH";
    })
    let present = list.filter((val)=>{
        var date = new Date();
        date = date.setHours(0,0,0,0);
        var valdate = new Date(val.startDate);
        valdate =  valdate.setHours(0,0,0,0);
        var valenddate = new Date(val.endDate);
        valenddate =  valenddate.setHours(0,0,0,0);
        if(valdate >= date || valenddate>=date){
            return val;
        }  
    });
    present.sort((a,b)=>{return (new Date(a.startDate) - new Date(b.startDate))});
    if(dataLoaded==false){
        return(
            <div className="App" style={{
                fontFamily: "Poppins",
                width: "100%",
                alignContent: "center",
                padding: "2%"}}
                >
                    <h2 >Hackathons</h2>
                    <h4>Check out some awesome inclusive Hackathons</h4>
                    <h6>Want to add your hackathon here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><IconButton><GitHub/></IconButton></a></h6>
                <input type="text" placeholder="Search a hackathon 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <br/>
                <div className="list1">
                <CircularProgress color="secondary"/>
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
                <h2 >Hackathons</h2>
                <h4>Check out some awesome inclusive Hackathons</h4>
                <h6>Want to add your hackathon here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><IconButton><GitHub/></IconButton></a></h6>
                <input type="text" placeholder="Search a hackathon 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <Pagination siblingCount={0} showFirstButton showLastButton count={Math.ceil(present.length/4)} sx={{display:"flex",justifyContent:"center"}} color="secondary" page={page} onChange={handlePageChange}/>
                <div className="list1">
                {search==""?present.slice((page-1)*4,page*4).map(Hackathon):present.filter((val)=>{
                    if(val.location){
                        if(val.location.toLowerCase().includes(search.toLowerCase())){
                            return val;
                        }
                        else if(val.name.toLowerCase().includes(search.toLowerCase())){
                            return val;
                        }
                        else if(val.type.toLowerCase().includes(search.toLowerCase())){
                            return val;
                        }
                    }
                    else{
                        if(val.name.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }
                        else if(val.date.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }
                        else if(val.type.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }
                    }
                    
                }).slice((page-1)*4,page*4).map(Hackathon)}
                </div>
                <br/>
        </div>
    );
}