import { Button, Card, CardActions, IconButton, Typography } from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { Badge, Pagination } from "@mui/material";
import { useState } from "react";

function Opportunity(props){
    return(
        <Card className="Card2 item1 opp">
            <h5>{props.name} </h5><br/>
            <p style={{fontSize:"12px", textAlign:"left"}}>{props.desc}</p>
            <Badge badgeContent={props.type} sx={{".MuiBadge-badge":{backgroundColor:"#f06c91", color:"#fff"}}}className="opptype"></Badge>
            <CardActions className="ca">
                <Button size="small" color="secondary" className="lm">{props.time}</Button>
                <Button size="small" color="secondary" href={props.link} className="lm" target="_blank"><OpenInNew/></Button>
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
            link:"https://fellowship.mlh.io",
            desc:"A fully remote, 12-week internship where participants earn a stipend and learn to collaborate on real open source projects with peers and engineers from top companies."
        },
        {
            name:"Microsoft Learn Student Ambassador",
            type:"Student Ambassador",
            time:"All Year",
            month:"20",
            link:"https://studentambassadors.microsoft.com/",
            desc:"Amplify your impact and bring together your peers to learn new skills, solve real-world problems, and build communities across the globe."
        },
        {
            name:"Github Campus Expert",
            type:"Student Ambassador",
            time:"All Year",
            month:"20",
            link:"https://education.github.com/experts",
            desc:'Learn the skills to build and grow diverse technology communities on campus with training, mentorship, and support from GitHub.'
        },
        {
            name:"Grace Hopper Conference",
            link:"https://ghc.anitab.org/",
            type:"Scholarship",
            month:"2",
            time:"Feb",
            desc:""
        },
        {
            name:"Generation Google Scholarship (APAC)",
            link:"https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac/",
            type:"Scholarship",
            month:"3",
            time:"March",
            desc:""
        },
        {
            name:"LinkedIN CoachIN",
            type:"Mentorship",
            time:"March",
            month:"3",
            link:"https://coachin2021.splashthat.com/",
            desc:""
        },
        {
            name:"Code in Place by Stanford",
            type:"Mentorship",
            time:"March",
            month:"3",
            link:"https://codeinplace.stanford.edu/",
            desc:""
        },
        {
            name:"Google Summer of Code",
            type:"Internship",
            time:"April",
            month:"4",
            link:"https://summerofcode.withgoogle.com/",
            desc:""
        },
        {
            name:"Code Jam to I/O for Women",
            link:"https://codingcompetitions.withgoogle.com/codejamio/",
            time:"April",
            month:"4",
            type:"Scholarship",
            desc:""
        },{
            name:"GDSC Applications (India)",
            type:"Developer Community",
            time:"April",
            month:"4",
            link:"https://developers.google.com/community/gdsc/leads",
            desc:""
        },{
            name:"Women TechMakers Ambassador",
            type:"Ambassador",
            time:"April",
            month:"4",
            link:"https://docs.google.com/forms/d/e/1FAIpQLSclJkcN8kjG5Cn1grhw4tjc_NojZoGj9Ewah8UDK61KpJmUXA/viewform",
            desc:""
        },{
            name:"Kode with Klossy",
            type:"Scholarship",
            time:"May",
            month:"5",
            link:"https://www.kodewithklossy.com/",
            desc:""
        },{
            name:"Women in Product",
            type:"Scholarship",
            time:"May",
            month:"5",
            link:"https://www.womenpm.org/conference-scholarships",
            desc:""
        },{
            name:"Girl Up",
            type:"Scholarship",
            time:"May",
            month:"5",
            link:"https://clubs.girlup.org/blogs/169/3653",
            desc:""
        },{
            name:"Think Swiss Research",
            type:"Scholarship",
            time:"Aug",
            month:"8",
            link:"https://swissnex.org/india/thinkswiss/",
            desc:"ThinkSwiss Research Scholarships is a program that opens doors for students from India, Singapore and Australia to the world of Swiss academia, that combines high quality curriculum with innovative thinking."
        },{
            name:"Rolls Royce Unnati",
            type:"Scholarship",
            time:"Aug",
            month:"8",
            link:"https://www.buddy4study.com/page/rolls-royce-unnati-scholarships-for-women-engineering-students",
            desc:"‘Rolls-Royce Unnati Scholarships for Women Engineering Students’ is an initiative of Rolls-Royce India Pvt. Ltd. to financially support meritorious girl students in completing their engineering programme."
        }, {
            name:"Google Intern Takeover",
            type:"Event",
            time:"Aug",
            month:"8",
            link:"https://careersonair.withgoogle.com/events/google-intern-takeover",
            desc:"This summer, two Google interns, Brian and Whitney created a Careers OnAir event to showcase the Google internship from an intern’s point of view." 
        }, {
            link :"https://www.facebook.com/codingcompetitions/hacker-cup",
            name:"Meta Hacker Cup",
            type:"Internship",
            time:"Aug",
            month:"8",
            desc:"Hacker Cup is Meta's annual open programming competition. Open to participants around the world, we invite you to apply problem-solving and algorithmic coding skills to advance through each year’s online rounds and win prizes",
        }, {
            link:"https://www.deshawindia.com/desis-ascend-educare/about.pdf",
            name:"DESIS Ascend Educare",
            type:"Mentorship",
            time:"Aug",
            month:"8",
            desc:"D. E. Shaw India is pleased to invite applications for the next edition of DESIS Ascend Educare—a six-month mentorship program for women in tech."
        }, {
            link:"https://codingcompetitions.withgoogle.com/kickstart",
            name:"Google Kick Start",
            type:"Competition",
            time:"Aug",
            month:"8",
            desc:"Ready to solve fun, challenging problems? Kick Start hosts online rounds throughout the year, giving participants the opportunity to test and grow their coding abilities while getting better acquainted with competitive programming."
        }, {
            link:"https://www.uni-bonn.de/en/university/",
            name:"DAAD Scholarship",
            type:"Research Intern",
            time:"Aug",
            month:"8",
            desc:"The Deutscher Akademischer Austauschdienst (DAAD) 2022-2023 is a scholarship in Germany that targets students who come from developing countries."
        }, {
            link:"https://www.mitacs.ca/en/programs/globalink",
            name:"Mitacs Globalink",
            type:"Research Intern",
            time:"Sept",
            month:"9",
            desc:"Mitacs Globalink Research Internship is a competitive initiative for international undergraduates from the following countries and regions: Australia, Brazil, Chile, China, Colombia, France, Germany, Hong Kong, India, Mexico, South Korea, Taiwan, Tunisia, Ukraine, United Kingdom and the United States."
        }, {
            link:"https://ghc.anitab.org/",
            name:"Grace Hopper Conference 2022",
            type:"Conference",
            time:"Sept",
            month:"9",
            desc:"Created in 1994 and inspired by the legacy of Admiral Grace Murray Hopper, the AnitaB.org flagship event Grace Hopper Celebration brings the research and career interests of women in computing to the forefront."
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
                <Pagination siblingCount={0} showFirstButton showLastButton count={Math.ceil(list.length/4)} sx={{display:"flex",justifyContent:"center"}} color="secondary" page={page} onChange={handlePageChange}/>
                <div className="list1">
                {search==""?list.slice((page-1)*4,page*4).map(Opportunity):list.filter((val)=>{
                    if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.type.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.time.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    
                }).slice((page-1)*4,page*4).map(Opportunity)}
                </div>
                
        </div>
    );
}