import title from "../img/Software engineer-cuate.png";
import { useState } from "react";
import CardRes from "../components/cardres"
import { Pagination } from "@mui/material";
export default function GameDev() {

  let resources = [
    {
      title:"Video game programming languages",
      name:"Gaming 101",
      link:"https://www.masterclass.com/articles/guide-to-video-game-programming-languages#what-is-a-video-game-programming-language"
    },
    {
      title:"Game Coding Complete",
      name:"Mike McShaffry and David 'Rez' Graham",
      link:"https://canvas.projekti.info/ebooks/Game%20Coding%20Complete%20-%204th%20Edition.pdf"
    },
    {
      title:"Learn Unity - Beginner's Game Development tutorial",
      name:"freeCodeCamp",
      link:"https://youtube.com/watch?v=gB1F9G0JXOo"
    },
    {
      title:"How to Become a Game Designer",
      name:"Game Maker's Tookit",
      link:"https://www.youtube.com/watch?v=PMXf0e8n2Oc"
    },
  ];
  const [search, setSearch] = useState('');
  const [page, setpage] = useState(1);
  const handlePageChange = (event, newPage) => {
      setpage(newPage);
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
          <h2>Game Development</h2>
          <h4>Getting started with Game Dev</h4>
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
