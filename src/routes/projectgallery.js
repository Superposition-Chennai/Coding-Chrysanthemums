import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Typography } from "@material-ui/core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectGallery(props){
    return(
        <Card className="Card2 item1">
        <img src={props.img} width="100%" style={{marginBottom:"2px"}}/>
        <h5>{props.name}{" "}<a href={props.link} target="_blank"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h5>
        <p>{props.desc}</p>
        </Card>
    )
};

export default function Gallery(){
    let projects = [
        {
            img: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/375/555/datas/medium.png",
            name:"SafeSpaceBot",
            link:"https://devpost.com/software/safespacebot",
            desc:"A discord bot to prevent gender-based verbal abuse on servers",
        },
        {
            img: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/393/540/datas/medium.png",
            name:"Tinthon",
            link:"https://devpost.com/software/tinthon",
            desc:"One stop app for Hackathons"
        },
        {
            link:"https://devpost.com/software/fun-with-flags-a1nm0w",
            name:"Fun with Flags",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/580/933/datas/medium.gif",
            desc:"A fun game to recognise the LQBT+ pride flags"
        },
        {
            name:"#UofCC A Covid Consciousness App",
            link:"https://devpost.com/software/uofcc-the-universe-of-covid-consciousness-app",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/369/342/datas/medium.png",
            desc:"An app to engage young people to take COVID seriously."
        },
        {
            name:"enviMed",
            link:"https://devpost.com/software/envimed",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/568/690/datas/medium.png",
            desc:"Learn about Bio-medical waste"   
        }
    ]
    return(
            <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            padding: "2%"}}
            >
                <h2>Project Gallery</h2>
                <div className="list1">
            {projects.map(ProjectGallery)}
            </div>
            <h6>Want to add your project here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></h6>
            </div>
    );
}