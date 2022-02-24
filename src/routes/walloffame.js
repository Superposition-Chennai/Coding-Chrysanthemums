import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Card } from '@mui/material';
function Person(props){
    return(
        <Card className='wof'>
            <EmojiEventsIcon className="icon" htmlColor="#fa6695"/>
            <h6><a href={props.link} >{props.name}</a> from {props.community} {props.action}</h6>
        </Card>
    )
}
export default function WallofFame(){
    let people=[
        {
            name:"Rakshaa Viswanathan",
            link:"https://www.linkedin.com/in/rakshaa-viswanathan",
            community:"Superposition Chennai",
            action:"created this website :D"
        },
    ];
    return(
        <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            padding: "2%"}}
            >
            <h2>Wall of Fame</h2>
            <h4>Highlight the achievements of womxn you know</h4>
            <h6>Know someone who should be here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></h6>
            <div className='list1'>
                {people.map(Person)}
            </div>
        </div>
    )
}