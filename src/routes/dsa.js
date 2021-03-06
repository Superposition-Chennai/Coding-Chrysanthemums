import title from "../img/Software engineer-cuate.png";
import CardRes from "../components/cardres";
import { useState } from "react";
export default function DSA() {
  const resources = [
    {title: "DS Collection", name: "GeeksforGeeks", link:"https://www.geeksforgeeks.org/data-structures" },
    {title: "Algo Collection", name: "GeeksforGeeks", link:"https://www.geeksforgeeks.org/fundamentals-of-algorithms/" },
    {title: "Learn DSA", name: "Programiz", link:"https://www.programiz.com/dsa" },
    {title: "Algorithms Notes", name: "GoalKicker", link:"https://books.goalkicker.com/AlgorithmsBook/" },
    {title: "DSA with Java", name: "Community Classroom", link:"https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" },
    {title: "C++, Java, Python Algorithms", name: "The Algorithms", link:"https://github.com/TheAlgorithms/" },
  ];
  const [search, setSearch]= useState('');
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
          <h2>DSA Resources</h2>
          <h4>Getting started with Data Structures and Algorithms</h4>
          <img src={title} alt="title" width="200px" />
          <input type="text" placeholder="Search a resource 🔍" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
          <div className="list">
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
            }).map(CardRes)}
          </div>
        </div>
      </div>
    </>
  );
}
