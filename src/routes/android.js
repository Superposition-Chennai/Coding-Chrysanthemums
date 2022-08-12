import title from "../img/Software engineer-cuate.png";
import { useState } from "react";
import CardRes from "../components/cardres"
export default function Android() {

  let resources = [
    {
      title:"Android Development Tutorials",
      name:"Vogella",
      link:"https://www.vogella.com/tutorials/android.html"
    },
    {
      title:"Android Development for Beginners",
      name:"freeCodeCamp",
      link:"https://www.youtube.com/watch?v=fis26HvvDII"
    },
    {
      title:"Android Basics in Kotlin",
      name:"Google Developers",
      link:"https://developer.android.com/courses/android-basics-kotlin/unit-1"
    },
    {
      title:"Best Way to Become Android Developer - A Complete Roadmap",
      name:"Geeks for Geeks",
      link:"https://www.geeksforgeeks.org/best-way-to-become-android-developer-a-complete-roadmap/"
    },
  ];
  const [search, setSearch] = useState('');
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
          <h2>Android Dev</h2>
          <h4>Getting started with Android</h4>
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

  );
}
