import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardActions, IconButton, Typography } from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { Badge, Pagination } from "@mui/material";
import { useState } from "react";

function Mentorship(props){
    return(
        <Card className="Card2 item1 opp">
            <h5>{props.name} </h5>
            <p style={{fontSize:"12px"}}>by <b>{props.org}</b></p>
            <h7>Join as</h7>
            <CardActions className="ca">
                <Button size="small" color="secondary" href={props.mentee} className="lm" target="_blank" variant="outlined">Mentee</Button>
                <Button size="small" color="secondary" href={props.mentor} className="lm" target="_blank" variant="outlined">Mentor</Button>
            </CardActions>
        </Card>
    )
}

export default function Mentorships(){
    const [search, setSearch] = useState('');
    const [page, setpage] = useState(1);
    const handlePageChange = (event, newPage) => {
        setpage(newPage);
    }
    let list = [
        {
            name:"Womentors",
            org:"Superposition Chennai",
            mentor:"https://t.co/Blp0y87ZYN",
            mentee:"https://t.co/Blp0y87ZYN"
        },
        {
            name:"Connect",
            org:"Command Tech",
            mentor:"https://connect.commandtech.dev/register",
            mentee:"https://connect.commandtech.dev/register"
        },
        {
            org:"AnitaB.org Mentorship",
            name:"AnitaB.org",
            mentor:"https://membership.anitab.org/page/mentorship",
            mentee:"https://membership.anitab.org/page/mentorship"
        },
        {
            name:"Codess Cafe",
            org:"Codess Cafe",
            mentor:"https://codess.cafe/",
            mentee:"https://codess.cafe/"
        },
    ]
    return(
        <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            padding: "2%"}}
            >
                <h2 >Mentorship</h2>
                <h4>Check out upcoming mentorship programs for Women+ in Tech</h4>
                <h6>Want to add a program  here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><IconButton><GitHub/></IconButton></a></h6>
                <input type="text" placeholder="Search a program 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <Pagination siblingCount={0} showFirstButton showLastButton count={Math.ceil(list.length/8)} sx={{display:"flex",justifyContent:"center"}} color="secondary" page={page} onChange={handlePageChange}/>
                <div className="list1">
                {search==""?list.slice((page-1)*8,page*8).map(Mentorship):list.filter((val)=>{
                    if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.type.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.time.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    
                }).slice((page-1)*8,page*8).map(Mentorship)}
                </div>
                
        </div>
    );
}