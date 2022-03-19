import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardActions,  } from "@material-ui/core";
import { OpenInNew } from "@mui/icons-material";
import { Avatar, Pagination,  } from "@mui/material";
import { useState } from "react";

function Community(props){
    return(
        <Card className="Card2 item1 opp">
        <h5><Avatar src={props.img} alt={props.name}/> {props.name}</h5>
            {/* <img src={props.img}/> */}
            <p>{props.desc}</p>
            <CardActions className="ca">
                <Button size="small" href={props.link} target="_blank" className="lm">Learn More <OpenInNew/> </Button>
            </CardActions>
        </Card>
    )
}

export default function Communities(){
    const [search, setSearch] = useState('');
    const [page, setpage] = useState(1);
    const handlePageChange = (event, newPage) => {
        setpage(newPage);
    }
    let list = [
        {
            name:"Women Who Code",
            desc:"WWCode is an international nonprofit dedicated to inspiring women to excel in technology careers.",
            link:"https://womenwhocode.com",
            img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAEAAdwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABwYFAgQD/8QAMRAAAQMDAgQFAgUFAAAAAAAAAQACAwQFEQYSExQhMQciQVFxYcEVMnKBoRY2UpGS/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AuCIiAiIgIiICIiAiIgIiICIiAiIgIiICzepKW5PrI47ZJLG25R8pNK055fbl4kA9PLxG59yxaRY/xE1a/TlHDBQhhr6nOwvGRGwd3Y9T6AfPthB5bzlQKevvkVTHS1MjuYp4tx4W0BsYcG9dhIkcfq5uegXh8tyjiY63NqzTQ1z6mnZK15fJTMiAdH5uo3Pc/bu9MY6YWCtE+s7lPBdY6m7zUgnbvkZM4RkbgD5AcEd84GBgrV+Jus6q11TbRaJODPsD55wAS0Hs1vscdc/UYQfVWG6PhjbcTJG43MyuJhlkY2N9MXBpEZBIa87e/doK/WubeIqS+y0YqKinkcImwgFroxwI8SxZ643E7m59MjqCHT2G/as07U01TVVdfidoljjrZXSMmZ8OJx+2CFuNeX6St0FQXa11NRSmonYcwzOY5vR25pLSOxGP2QaXUsVc19PNbeIXzB1HIGnpG2TGJce7CP8ARK5UcV5lpRUSufHVMq4KSPeC5rmxvw6UtBHR7i49+wapZSX3U9LB+IwXS5up2ycIyyzuljD8Z2kOJGcEKoWPVbtQ6MutQ7ENwpKaQS8JxGDsJa9vqM4PwQVR721LapovZnkoeZqOKYGSBhk8nDLmgk7McTuS3OM9cLu6cEvJSbhOKfjO5UVG7iCLpjdu83fOM9cYyodaqrVN3qeWttyu9ROGF5Y24SA7RgZ6vHuFZNA090pdNwxXzmedEkhdzM3EfguOPNk+n1QaJERQEREBERAUW8YC/wDq2MOztFGzb/0/srSsR4l6Snv9NDW21odXUoLeGSBxWHrgE+oPb5KQaDSQiGlrQIMbOTixj9Iz/Ki/iD/e914+Q3itz+nht+y+yyTazozBZoI7rDSmYNczlnDY0u82HbctHfsVqPFDR1ZcKsXi0wmd5YGVEDB5jjs4D16dCO/QfVUePGvhins+Mbw6Xbj/ABw3P2XCqdx8IaPOdv4m7Z8ef75XOFs1Xqaqpaappq6QwMEUclVEY2RN9ySB7de5OPVbfXdidbvD+gtVvhlqOXnZnhxFznHa4udge5Of3QZ/TjY3+FepONjAqgR9HbYsfzhfj4cl4t+qQPyfhjt3zh+PuuHTUGpJaJ1qp6C4mlllEzoRTOa1z8AAkkewHc49VS9OaVm09ou7ioaHXGsppDIxnm24Y4NYMdz1Pb1KCV6fZd5K8t0/zPN8I55dxa7Z0z19uyuui23FmmaJt543PDfxeO7L/wA7sZPxhROzDUdlqjV2yir4Jywx7+Tc7ynBIwWn2CsGi7ndKqw0kt4imfVyzSNeXxCMtAd0JbgeiDToiKAiIgIiICIiAiIgIiICIiAiIgIiICIiD//Z"
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
            img:"https://media-exp1.licdn.com/dms/image/C4E0BAQG3bOhbcrbRFg/company-logo_200_200/0/1645828129794?e=1655942400&v=beta&t=D9y0fEZ8iuc1ZS0WSUN44n9uwPxuYKpYJ0MvdARIcLU"
        },
        {
            img:"https://media-exp1.licdn.com/dms/image/C560BAQFp1nxqCZ3pBA/company-logo_200_200/0/1587356018352?e=1653523200&v=beta&t=9-Ur6JYfwI6OgFLzO5wGsJ8gO2Lb2RlqUrMl47HZLC4",
            name:"Girls in Tech, Inc.",
            desc:"Girls in Tech is a nonprofit organization dedicated to eliminating the gender gap in tech.",
            link:"https://girlsintech.org/"
        },
        {
            img:"https://media-exp1.licdn.com/dms/image/C4E0BAQFXsxKx8RHwug/company-logo_200_200/0/1640097726558?e=1653523200&v=beta&t=keMcvJ1bIuUBScDzyz7Gb8w-lXKyKUFhQkJtvYUTkFI",
            name:"Rewriting the Code",
            desc:"Empowering College Women in Tech. 15,000+ members and growing!",
            link:"https://teamrtc.org/"
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
                <h4>Check out some amazing Womxn-in-Tech communities to join</h4>
                <h6>Want to add your community here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></h6>
                <input type="text" placeholder="Search a community 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <Pagination showFirstButton showLastButton count={Math.ceil(list.length/10)} sx={{display:"flex",justifyContent:"center"}} color="secondary" page={page} onChange={handlePageChange}/>
                <div className="list1">
                {search==""?list.slice((page-1)*10,page*10).map(Community):list.filter((val)=>{
                    if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.desc.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    
                }).slice((page-1)*10,page*10).map(Community)}
                </div>
          
                
        </div>
    );
}