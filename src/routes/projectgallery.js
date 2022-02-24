import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Typography } from "@material-ui/core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Carousel, CarouselItem } from "react-bootstrap";

function ProjectGallery(props){
    return(
        <CarouselItem className="caroitem" >
        <Card className="carocard">
        <img src={props.img} width="300px"/>
        <Carousel.Caption>
        <h5 style={{fontWeight:"600", color:"#fff"}}>{props.name}{" "}<a href={props.link} target="_blank"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h5>
        <p style={{flexWrap:"wrap", color:"#fff"}}>{props.desc}</p>
        </Carousel.Caption>
        </Card>
        </CarouselItem>
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
            name:"Universe of Covid Consciousness",
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
            justifyContent:"center",
            padding: "2%"}}
            >
                <h2 >Project Gallery</h2>
                <h4>Cool projects by Womxn in Tech</h4>
                <h6>Want to add your project here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></h6>
                <div style={{display: "flex",justifyContent: "center"}}>
                <div className="caro">
                    <Carousel variant='dark' fade indicators="true">
                    {projects.map(ProjectGallery)}
                    </Carousel>
                </div>
                </div>
                <br/>
            </div>
    );
}