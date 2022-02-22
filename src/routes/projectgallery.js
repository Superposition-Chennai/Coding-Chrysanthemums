import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Typography } from "@material-ui/core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectGallery(props){
    return(
        <Card className="Card2 item1">
        <img src={props.img} width="100%"/>
        <Typography variant="h6">{props.name}{" "}<a href={props.link} target="_blank"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></Typography>
        </Card>
    )
};

export default function Gallery(){
    let projects = [
        {
            img: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/375/555/datas/medium.png",
            name:"SafeSpaceBot",
            link:"https://devpost.com/software/safespacebot"
        },
        {
            img: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/393/540/datas/medium.png",
            name:"Tinthon",
            link:"https://devpost.com/software/tinthon"
        },
        {
            link:"https://devpost.com/software/fun-with-flags-a1nm0w",
            name:"Fun with Flags",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/580/933/datas/medium.gif"
        },
        {
            name:"#UofCC A Covid Consciousness App",
            link:"https://devpost.com/software/uofcc-the-universe-of-covid-consciousness-app",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/369/342/datas/medium.png"
        },
        {
            name:"enviMed",
            link:"https://devpost.com/software/envimed",
            img:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/568/690/datas/medium.png"
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