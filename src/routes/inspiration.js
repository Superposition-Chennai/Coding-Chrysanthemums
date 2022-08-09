import { OpenInNew, SportsEsports } from "@mui/icons-material";
import { Avatar, Button, Card, CardActionArea,  CircularProgress, IconButton, LinearProgress, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function People(props){
    return(
        <Card className="person">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Avatar src={props.image_path} alt={props.name} sx={{ width: 50, height: 50, bgcolor:"#db869d", marginRight:"10px"}}></Avatar>
            <h5>{props.name}</h5>
            </div>
            <p style={{fontSize:"12px", textAlign:"left"}}>{props.details}</p>
            <CardActionArea className="ca">
            <Button size="small" className="lm" color="secondary" href={props.website} target="_blank">Learn More<OpenInNew/></Button>
            </CardActionArea> 
        </Card>
    )
}

export default function Inspiration(){
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [search, setSearch] = useState('');
    const [page, setpage] = useState(1);
    useEffect(()=>{
        fetch("https://women-in-tech.apievangelist.com/apis/people/")
        .then((res)=>res.json())
        .then((val)=>{
            setData(val);
            setLoaded(true);
        })
    });
    const handlePageChange = (event, newPage) => {
        setpage(newPage);
    }
    if(loaded==false){
        return(
            <div className="App" style={{
                fontFamily: "Poppins",
                width: "100%",
                alignContent: "center",
                padding: "2%"}}
                >
                    <h2 >Get Inspired</h2>
                <h4>Check out some amazing Womxn pioneers in Tech</h4>
                <input type="text" placeholder="Search a person 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <br/>
                <div className="list1">
                <CircularProgress color="secondary"/>
                </div>
            </div>
        )
    }
    return(
        <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            padding: "2%"}}
            >
                <h2 >Get Inspired</h2>
                <h4>Check out some amazing Womxn pioneers in Tech <Link to="/quiz" style={{textDecoration:"none",}}><IconButton><SportsEsports/></IconButton></Link></h4>
                <input type="text" placeholder="Search a person 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
                <Pagination siblingCount={0} showFirstButton showLastButton count={Math.ceil(data.length/10)} sx={{display:"flex",justifyContent:"center"}} color="secondary" page={page} onChange={handlePageChange}/>
                <div className="list1">
                {search==""?data.slice((page-1)*10,page*10).map(People):data.filter((val)=>{
                    if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val;
                    }
                }).slice((page-1)*10, page*10).map(People)}
                </div>
        </div>
    )
}