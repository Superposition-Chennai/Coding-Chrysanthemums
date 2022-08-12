import title from "../img/Software engineer-cuate.png";
import CardRes from "../components/cardres";
import { useState } from "react";
import { Pagination } from "@mui/material";
export default function WebDev() {
  const resources = [
    {title: "Web Dev Roadmap", name: "Roadmap.sh", link:"https://roadmap.sh/" },
    {title: "Web Dev Collection", name: "GeeksforGeeks", link:"https://www.geeksforgeeks.org/web-development/" },
    {title: "Web Dev Courses", name: "freeCodeCamp", link:"https://www.freecodecamp.org/learn/" },
    {title: "JavaScript Course", name: "Codecademy", link:"https://www.codecademy.com/learn/introduction-to-javascript" },
    {title: "Eloquent JavaScript", name: "Marijn Haverbeke", link:"https://eloquentjavascript.net/" },
    {title: "Web Dev Courses", name: "W3 Schools", link:"https://www.w3schools.com/" },
    {title: "Awesome Web Development", link:'https://web-dev-resources.com/#/',name:"Marko Denic" },
    {title: "Web Dev For Beginners", link:"https://github.com/microsoft/Web-Dev-For-Beginners", name:"Microsoft"}
  ];
  const [search, setSearch]= useState('');
  const [page, setPage] = useState(1);
  const handlePageChange = (event, newPage) =>{
      setPage(newPage);
  }
  return (
    <>
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
          <h2>Web Dev Resources</h2>
          <h4>Getting started with Web Development </h4>
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
    </>
  );
}
