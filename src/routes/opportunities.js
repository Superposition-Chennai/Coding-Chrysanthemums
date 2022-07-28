import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardActions, IconButton, Typography } from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { Badge, Pagination } from "@mui/material";
import { useState } from "react";

function Opportunity(props){
    return(
        <Card className="Card2 item1 opp">
            <h5>{props.name} </h5><br/>
            <Badge badgeContent={props.type} sx={{".MuiBadge-badge":{backgroundColor:"#f06c91", color:"#fff"}}}className="opptype"></Badge>
            <CardActions className="ca">
                <Button size="small" href={props.link} className="lm" target="_blank">Learn More <OpenInNew/></Button>
                <Button size="small" color="secondary" className="lm">{props.time}</Button>
            </CardActions>
        </Card>
    )
}

export default function Opportunities(){
    const [search, setSearch] = useState('');
    const [page, setpage] = useState(1);
    const handlePageChange = (event, newPage) => {
        setpage(newPage);
    }
    // const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let name = d.getMonth()+1;
    let list = [
        {
            name:"MLH Fellowship",
            type:"Fellowship",
            time:"All Year",
            month:"20",
            link:"https://fellowship.mlh.io"
        },
        {
            name:"Microsoft Learn Student Ambassador",
            type:"Student Ambassador",
            time:"All Year",
            month:"20",
            link:"https://studentambassadors.microsoft.com/"
        },
        {
            name:"Github Campus Expert",
            type:"Student Ambassador",
            time:"All Year",
            month:"20",
            link:"https://education.github.com/experts"
        },
        {
            name:"Grace Hopper Conference",
            link:"https://ghc.anitab.org/",
            type:"Scholarship",
            month:"2",
            time:"Feb"
        },
        {
            name:"Generation Google Scholarship (APAC)",
            link:"https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac/",
            type:"Scholarship",
            month:"3",
            time:"March"
        },
        {
            name:"LinkedIN CoachIN",
            type:"Mentorship",
            time:"March",
            month:"3",
            link:"https://coachin2021.splashthat.com/"
        },
        {
            name:"Code in Place by Stanford",
            type:"Mentorship",
            time:"March",
            month:"3",
            link:"https://codeinplace.stanford.edu/"
        },
        {
            name:"Google Summer of Code",
            type:"Internship",
            time:"April",
            month:"4",
            link:"https://summerofcode.withgoogle.com/",
        },
        {
            name:"Code Jam to I/O for Women",
            link:"https://codingcompetitions.withgoogle.com/codejamio/",
            time:"April",
            month:"4",
            type:"Scholarship"
        },{
            name:"GDSC Applications (India)",
            type:"Developer Community",
            time:"April",
            month:"4",
            link:"https://developers.google.com/community/gdsc/leads"
        },{
            name:"Women TechMakers Ambassador",
            type:"Ambassador",
            time:"April",
            month:"4",
            link:"https://docs.google.com/forms/d/e/1FAIpQLSclJkcN8kjG5Cn1grhw4tjc_NojZoGj9Ewah8UDK61KpJmUXA/viewform"
        },{
            name:"Kode with Klossy",
            type:"Scholarship",
            time:"May",
            month:"5",
            link:"https://www.kodewithklossy.com/"
        },{
            name:"Women in Product",
            type:"Scholarship",
            time:"May",
            month:"5",
            link:"https://www.womenpm.org/conference-scholarships"
        },{
            name:"Girl Up",
            type:"Scholarship",
            time:"May",
            month:"5",
            link:"https://clubs.girlup.org/blogs/169/3653"
        },{
            name:"Think Swiss Research",
            type:"Scholarship",
            time:"Aug",
            month:"8",
            link:"https://swissnex.org/india/thinkswiss/"
        },{
            name:"Rolls Royce Unnati",
            type:"Scholarship",
            time:"Aug",
            month:"8",
            link:"https://www.buddy4study.com/page/rolls-royce-unnati-scholarships-for-women-engineering-students" 
        }, {
            name:"Google Intern Takeover",
            type:"Event",
            time:"Aug",
            month:"8",
            link:"https://careersonair.withgoogle.com/events/google-intern-takeover" 
        }, {
            link :"https://www.facebook.com/codingcompetitions/hacker-cup",
            name:"Meta Hacker Cup",
            type:"Internship",
            time:"Aug",
            month:"8"
        }
    ]
    list = list.filter((val)=>{
        if (val.month>=name){
            return val;
        }
    })
    return(
        <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            padding: "2%"}}
            >
                <h2 >Opportunities</h2>
                <h4>Check out upcoming scholarships, fellowships and more</h4>
                <h6>Want to add an opportunity here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><IconButton><GitHub/></IconButton></a></h6>
                <input type="text" placeholder="Search an opportunity 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <Pagination siblingCount={0} showFirstButton showLastButton count={Math.ceil(list.length/8)} sx={{display:"flex",justifyContent:"center"}} color="secondary" page={page} onChange={handlePageChange}/>
                <div className="list1">
                {search==""?list.slice((page-1)*8,page*8).map(Opportunity):list.filter((val)=>{
                    if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.type.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.time.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    
                }).slice((page-1)*8,page*8).map(Opportunity)}
                </div>
                
        </div>
    );
}