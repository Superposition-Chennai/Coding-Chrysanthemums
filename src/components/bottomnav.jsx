import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { RWebShare } from 'react-web-share';
import { IconButton } from '@mui/material';
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
              <ShareIcon/>
            </RWebShare>
          </div>
        );
      };
      function Copy(){
          return(
              <IconButton onClick={() =>  navigator.clipboard.writeText(window.location)}>
              <FileCopyIcon/>
              </IconButton>
          )
      }
      const actions = [
        { icon: <Copy />, name: 'Copy' },
        { icon: <WebShare />, name: 'Share' },
      ];
      
    return(
        <>
            <SpeedDial ariaLabel="SpeedDial basic example"  FabProps={{
                color: "secondary",
            }}
        sx={{ position: "fixed", bottom: 16, right: 16, }}
        icon={<SpeedDialIcon  />}>
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