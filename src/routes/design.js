import title from "../img/Software engineer-cuate.png";
import { useState } from "react";
import CardRes from "../components/cardres"
import { Pagination } from "@mui/material";
export default function Design() {

  let resources = [
    {
      title:"100 Best Graphic Design Tutorials",
      name:"Melody Nieves - EnvatoTuts+",
      link:"https://design.tutsplus.com/articles/100-best-graphic-design-tutorials--cms-32999"
    },
    {
      title:"Getting Interactive: Designing Games in Adobe XD",
      name:"Matt Rae - Design Buddies",
      link:"https://www.youtube.com/watch?v=E8Tu7kpUXj4"
    },
    {
      title:"Learn Design with Figma",
      name:"Figma",
      link:"https://www.figma.com/resources/learn-design/"
    },
    {
      title:"Learning design as a developer",
      name:"Uku Taht - Plausible",
      link:"https://plausible.io/blog/learning-design-as-a-developer"
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
          <h2>Design</h2>
          <h4>Getting started with Design</h4>
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
