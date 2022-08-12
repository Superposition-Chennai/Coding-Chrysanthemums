import title from "../img/Software engineer-cuate.png";
import CardRes from "../components/cardres";
import { useState } from "react";
import { Pagination } from "react-bootstrap";
export default function IntPrep() {
  const resources = [
    {title: "DS Collection", name: "GeeksforGeeks", link:"https://www.geeksforgeeks.org/data-structures" },
    {title: "Algo Collection", name: "GeeksforGeeks", link:"https://www.geeksforgeeks.org/fundamentals-of-algorithms/" },
    {title: "Learn DSA", name: "Programiz", link:"https://www.programiz.com/dsa" },
    {title: "Algorithms Notes", name: "GoalKicker", link:"https://books.goalkicker.com/AlgorithmsBook/" },
    {title: "DSA with Java", name: "Community Classroom", link:"https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" },
    {title: "C++, Java, Python Algorithms", name: "The Algorithms", link:"https://github.com/TheAlgorithms/" },
    {title: "The MEGA Interview Guide", name:"Daniel Del Core",link:"https://danieldelcore.github.io/mega-interview-guide/", },
    {title:"Coding Interview University", name:"John Washam", link:"https://github.com/jwasham/coding-interview-university"}
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
            alignContent: "center"
          }}
        >
          <h2>Interview Prep Resources</h2>
          <h4>Ace your Tech Interview with these resources</h4>
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
