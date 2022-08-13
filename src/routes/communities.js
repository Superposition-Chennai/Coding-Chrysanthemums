import { Button, Card, CardActions, IconButton,  } from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";
import { Avatar, Pagination,  } from "@mui/material";
import { useState } from "react";
import { pink } from "@mui/material/colors";

function Community(props){
    return(
        <Card className="Card2 item1 opp">
        <h5><Avatar src={props.img} alt={props.name}/> {props.name}</h5>
            {/* <img src={props.img}/> */}
            <p style={{fontSize:"12px", textAlign:"left"}}>{props.desc}</p>
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
            img:"https://media-exp1.licdn.com/dms/image/C4E0BAQG3bOhbcrbRFg/company-logo_200_200/0/1645828129794?e=1666828800&v=beta&t=ZqSbkM6IxIMfhmab0apNUAHh79w4TkUlL5HzoHdicZ8"
        },
        {
            img:"https://media-exp1.licdn.com/dms/image/C560BAQFp1nxqCZ3pBA/company-logo_200_200/0/1587356018352?e=1666828800&v=beta&t=wGjoHg9HzdHbi0hks1eA0EW9C6VnBn6QLSawFH3OmNo",
            name:"Girls in Tech, Inc.",
            desc:"Girls in Tech is a nonprofit organization dedicated to eliminating the gender gap in tech.",
            link:"https://girlsintech.org/"
        },
        {
            img:"https://media-exp1.licdn.com/dms/image/C4E0BAQFXsxKx8RHwug/company-logo_200_200/0/1640097726558?e=1666828800&v=beta&t=QC7fdLsrOU5MqFpQhK98Lr4P3xRNABCZV72HCBuIhK8",
            name:"Rewriting the Code",
            desc:"Empowering College Women in Tech. 15,000+ members and growing!",
            link:"https://teamrtc.org/"
        },
        {
            img:"https://media-exp1.licdn.com/dms/image/C4D0BAQG_Jl1mhgaivQ/company-logo_200_200/0/1625154139770?e=1666828800&v=beta&t=NvOMK60E29xEMp2KYgHU0NAqS-tDYqU2y_vTV-VaqIw",
            name:"AnitaB.org",
            desc:"Your donations allow us to continue the fight to elevate the next generation of women leaders.",
            link:"https://anitab.org/"
        },
        {
            desc:"Empowers girls and women at every stage of their STEAM careers - classroom to the boardroom.",
            link:"http://www.mywit.org/",
            name:"Women in Technology (WIT)",
            img:"https://media-exp1.licdn.com/dms/image/C4D0BAQGgaZidvAMUDQ/company-logo_200_200/0/1658852876088?e=1666828800&v=beta&t=ECOwhotuBY_fRj_x5RldnGFaxBr0QaCV-E79pvKwJqk"
        },
        {
            name:"Women Techmakers",
            link:"https://developers.google.com/womentechmakers",
            desc:"Google's Women Techmakers program provides visibility, community, and resources for women in technology.",
            img:"https://media-exp1.licdn.com/dms/image/C4D0BAQEeSHaUr7UlZA/company-logo_200_200/0/1614199777968?e=1666828800&v=beta&t=jc8ZBHJvm4Qt8GDJA7P93bBw1gY7aM-DlbcaPeahquA"
        },
        {
            name:"Ada's List",
            link:"https://www.adaslist.co/",
            desc:"Ada's list is a global community for women in tech, based on principles of inclusion, empowerment and diversity.",
            img:"https://media-exp1.licdn.com/dms/image/C4E0BAQGV0epQ5RLY9Q/company-logo_200_200/0/1636042853887?e=1668038400&v=beta&t=uNzXoUjXQzY7C1NxerQu0Nt2mTy5U2eUl8r_Tv3VcJU"
        },
        {
            name:"Command Tech",
            link:"https://commandtech.dev/",
            desc:"Command Tech is a student-led nonprofit empowering using tech to empower female and nonbinary students.",
            img:"https://media-exp1.licdn.com/dms/image/C560BAQGWifukjBPWIA/company-logo_200_200/0/1594344144862?e=1668038400&v=beta&t=fFtGF6iamDCXTkU99LMp1mifRpUf0K-iJFb6Ja3twd8"
        },
        {
            name:"Girls Who Code",
            link:"https://girlswhocode.com/",
            desc:"An international non-profit organization working to close the gender gap in technology",
            img:"https://media-exp1.licdn.com/dms/image/C4D0BAQEHUTYYyPFEhQ/company-logo_200_200/0/1588694948823?e=1668038400&v=beta&t=MlvgqgfMDn-QTeRZkqj4nFKm4dPfnIxOkQTXcnH2i1E"
        },
        {
            name:"AI Inclusive",
            link:"https://www.ai-inclusive.org/",
            desc:"Worldwide organization to promote diversity in the AI Community. Our mission is to increase the representation and participation of minority groups in Artificial Intelligence.",
            img:"https://media-exp1.licdn.com/dms/image/C560BAQGd1T76vAlwyw/company-logo_200_200/0/1572897274483?e=1668038400&v=beta&t=mRaZ5cZ2TseZmKkIwPkGAwICG_7oXMR4-hlsIbgM2kI"
        },
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
                <h6>Want to add your community here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><IconButton><GitHub/></IconButton></a></h6>
                <input type="text" placeholder="Search a community 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <Pagination siblingCount={0} showFirstButton showLastButton count={Math.ceil(list.length/4)} sx={{display:"flex",justifyContent:"center"}} color="secondary" page={page} onChange={handlePageChange}/>
                <div className="list1">
                {search==""?list.slice((page-1)*4,page*4).map(Community):list.filter((val)=>{
                    if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    else if(val.desc.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                    
                }).slice((page-1)*4,page*4).map(Community)}
                </div>
          
                
        </div>
    );
}