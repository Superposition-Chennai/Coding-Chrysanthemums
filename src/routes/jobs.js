
import { GitHub } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
class Jobs extends React.Component {
constructor(props) {
	super(props);
}
componentDidMount(){
    (function() {
      var cx = '04d1a92502d0bb73b';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
};
render() {
	return(<>
        <div style={{
                fontFamily: "Poppins",
                width: "100%",
                alignContent: "center",
                padding: "2%"}}
                >
                    <div style={{textAlign:"center"}}>
                    <h2 ><b>Jobs</b></h2>
                    <h4>Search for some awesome Tech jobs</h4>
                    <h6>Want to contribute? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><IconButton><GitHub/></IconButton></a></h6>
                    </div>
                    <br/>

            <div style={{
                fontFamily: "Poppins",
                width: "100%",
                textAlign: "left",
                padding: "2%"}} className="gcse-search"></div>
        </div>
    </>);
}
}
export default Jobs;