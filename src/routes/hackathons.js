export default function Hackathons(){
    return(
        <div className="App" style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            paddingTop: "2%"
          }}>
            <h2>Gender Focused Hackathons</h2>
            <p>Hackathons are a great space to start out coding, check out these upcoming hackathons:</p>
        <iframe class="airtable-embed" src="https://airtable.com/embed/shrFIvxcU5GUVIVLn?backgroundColor=purple&layout=card&viewControls=on" frameborder="0"  width="80%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
        </div>
    )
}