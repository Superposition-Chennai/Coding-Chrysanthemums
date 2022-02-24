import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardActions, Typography } from "@material-ui/core";
import { Avatar, Badge } from "@mui/material";
import { useState } from "react";

function Community(props){
    return(
        <Card className="Card2 item1 opp">
        <h5><Avatar src={props.img}/> {props.name}</h5>
            {/* <img src={props.img}/> */}
            <p>{props.desc}</p>
            <CardActions className="ca">
                <Button size="small" href={props.link} className="lm">Learn More </Button>
            </CardActions>
        </Card>
    )
}

export default function Communities(){
    const [search, setSearch] = useState('');
    let list = [
        {
            name:"Major League Hacking",
            desc:"Major League Hacking is a company that operates a league for student hackathons.",
            link:"https://mlh.io",
            img:"https://dnh0aphdpud22.cloudfront.net/social_avatars/48c4f7b4762262d726459ead.jpg"
        },
        {
            name:"Superposition",
            desc:"Superposition is an international non-profit bridging the gender gap in STEM through events, chapters, and mentorship.",
            link:"https://superposition.tech/",
            img:"https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fspppppppppppp.png?v=1575362249071"
        },
        {
            name:"Girls in STEM",
            desc:"Helping young women explore their passions in STEM through exploration, education and inspiration.",
            link:"https://girlsinstem.carrd.co/",
            img:"https://girlsinstemchapters.carrd.co/assets/images/image01.jpg?v=9e91b120"
        }
    ]
    return(
        <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            padding: "2%"}}
            >
                <h2 >Communities</h2>
                <input type="text" placeholder="Search a community 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <div className="list1">
                {list.filter((val)=>{
                    if(search==""){
                        return val
                    }
                    else if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.desc.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    
                }).map(Community)}
                </div>
          <h6>Want to add your community here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></h6>
                
        </div>
    );
}