import title from "../img/Software engineer-cuate.png";
import { useState } from "react";
import CardRes from "../components/cardres"
import { Pagination } from "@mui/material";
export default function DataScience() {

  let resources = [
    {
      title:"Datacamp Courses",
      name:"Datacamp",
      link:"https://www.datacamp.com/"
    },
    {
      title:"Data analysis with Python - Full Course for beginners",
      name:"freeCodeCamp",
      link:"https://www.youtube.com/watch?v=r-uOLxNrNk8&list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1&index=3"
    },
    {
      title:"Data Science from Scratch: First principles with Python",
      name:"O'Reilly Media",
      link:"http://math.ecnu.edu.cn/~lfzhou/seminar/%5BJoel_Grus%5D_Data_Science_from_Scratch_First_Princ.pdf"
    },
    {
      title:"Towards Data Science",
      name:"Medium",
      link:"https://towardsdatascience.com/"
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
          <h2>Data Science</h2>
          <h4>Getting started with Android</h4>
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
