import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';
import { RWebShare } from 'react-web-share';
import {  IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InterestsTwoToneIcon from '@mui/icons-material/InterestsTwoTone';
import { CalendarTodayRounded } from '@mui/icons-material';
export default function BottomNav(){
    function WebShare(){
        return (
          <div>
            <RWebShare
              data={{
                text: "Web Share - Coding Chrysanthemums",
                url: window.location,
                title: "Coding Chrysanthemums",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <ShareIcon sx={{color:"#b377bf"}}/>
            </RWebShare>
          </div>
        );
      };
      function Copy(){
          return(
              <IconButton onClick={() =>  navigator.clipboard.writeText(window.location)}>
              <FileCopyIcon sx={{color:"#b377bf"}}/>
              </IconButton>
          )
      }
      function Github(){
        return(
          <IconButton href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums">
            <GitHubIcon sx={{color:"#b377bf"}}/>
          </IconButton>
        )
      }
      function Calendly(){
        return(
          <IconButton href="https://calendly.com/rakshaa2000/mock-interviews">
            <CalendarTodayRounded sx={{color:"#b377bf"}}/>
          </IconButton>
        )
      }
      const actions = [
        { icon:<Github/>, name:"Repo"},
        { icon: <Copy />, name: 'Copy' },
        { icon: <WebShare />, name: 'Share' },
        { icon: <Calendly/>, name: "Mock Interviews"}
      ];
      
    return(
        <>
            <SpeedDial ariaLabel="SpeedDial basic example"  FabProps={{
                color: "secondary",
            }}
        sx={{ position: "fixed", bottom: 20, right: 20, }}
        icon={<SpeedDialIcon icon={<InterestsTwoToneIcon/>} openIcon={<CloseIcon/>} />}>
            {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                    ))}
        </SpeedDial>
        </>
    )
}