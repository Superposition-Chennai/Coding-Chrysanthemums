import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardActions, Typography } from "@material-ui/core";
import { Badge } from "@mui/material";
import { useState } from "react";

function Opportunity(props){
    return(
        <Card className="Card2 item1 opp">
            <h5>{props.name} </h5><br/>
            <Badge badgeContent={props.type} sx={{".MuiBadge-badge":{backgroundColor:"#f06c91", color:"#fff"}}}className="opptype"></Badge>
            <CardActions className="ca">
                <Button size="small" href={props.link} className="lm">Learn More </Button>
                <Button size="small" className="lm">{props.time}</Button>
            </CardActions>
        </Card>
    )
}

export default function Opportunities(){
    const [search, setSearch] = useState('');
    let list = [
        {
            name:"MLH Fellowship",
            type:"Fellowship",
            time:"All Year",
            link:"https://fellowship.mlh.io"
        },
        {
            name:"Microsoft Learn Student Ambassador",
            type:"Student Ambassador",
            time:"All Year",
            link:"https://studentambassadors.microsoft.com/"
        },
        {
            name:"Github Campus Expert",
            type:"Student Ambassador",
            time:"All Year",
            link:"https://education.github.com/experts"
        }
    ]
    return(
        <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            padding: "2%"}}
            >
                <h2 >Opportunities</h2>
                <input type="text" placeholder="Search an opportunity 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <div className="list1">
                {list.filter((val)=>{
                    if(search==""){
                        return val
                    }
                    else if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.type.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.time.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    
                }).map(Opportunity)}
                </div>
          <h6>Want to add an opportunity here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></h6>
                
        </div>
    );
}