import title from "../img/Software engineer-cuate.png";
import { useState } from "react";
import CardRes from "../components/cardres"
import { Pagination } from "@mui/material";
export default function General() {

  let resources = [
    {
      title:"Self-Learning Resources Wiki",
      name:"NW Plus",
      link:"http://resources.nwplus.io/"
    },
    {
      title:"Hacker Resources",
      name:"Techtogether",
      link:"https://techtogether.io/hacker_resources"
    },
    {
      title:"Hack Design Toolkit",
      name:"Hack Design",
      link:"https://hackdesign.org/toolkit/"
    },
    {
      title:"Hack Club Workshops",
      name:"Hack Club",
      link:"https://workshops.hackclub.com/"
    },
    {
      title:"Github College Student Pack",
      link:"ttps://education.github.com/pack",
      name:"Github Education"
    },
    {
      title:"Notion",
      link:"https://www.notion.so/",
      name:"Notion"
    },
    {
      title:"Cuckoo",
      link:"https://cuckoo.team/",
      name:"Cuckoo"
    },
    {
      title:"Replit",
      link:"https://replit.com/",
      name:"Replit"
    },
  ];
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const handlePageChange = (event, newPage) =>{
      setPage(newPage);
  }
  return (
      <div
        className="App"
        id="head" style={{
          fontFamily: "Poppins",
          width: "100%",
          alignContent: "center",
          padding: "1.5%"}}
      >
        <div
          style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
          }}
        >
          <h2>Getting Started</h2>
          <h4>Some cool tech resource databases</h4>
          <img src={title} alt="title" width="200px" />
          <input type="text" placeholder="Search a resource 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
          <Pagination siblingCount={0} showFirstButton showLastButton count={Math.ceil(resources.length/4)} sx={{display:"flex",justifyContent:"center"}} color="secondary" page={page} onChange={handlePageChange}/>
          <div className="list1">
            {resources.filter((val)=>{
              if(search==""){
                return val;
              }
              else if (val.title.toLowerCase().includes(search.toLowerCase())){
                return val;
              }
              else if (val.name.toLowerCase().includes(search.toLowerCase())){
                return val;
              }  
            }).slice((page-1)*4, page*4).map(CardRes)}
          </div>
        </div>
      </div>

  );
}
