import title from "../img/Software engineer-cuate.png";
import { useState } from "react";
import CardRes from "../components/cardres"
export default function AIML() {

  let resources = [
    {
      title:"Machine Learning",
      name:"Geeks for Geeks",
      link:"https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      title:"ML Courses",
      name:"Kaggle",
      link:"https://kaggle.com/learn"
    },
    {
      title:"30 Days of ML",
      name:"Rakshaa Viswanathan",
      link:"https://github.com/rakshaa2000/30-Days-of-ML"
    },
    {
      title:"Crash Course",
      name:"Google Developers",
      link:"https://developers.google.com/machine-learning/crash-course"
    }
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
          <h2>AI and ML Resources</h2>
          <h4>Getting started with Artificial Intelligence</h4>
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
