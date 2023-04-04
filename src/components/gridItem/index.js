import * as React from "react";
import { connect } from "react-redux";
import {Grid,styled, Paper,Button,Modal,Box } from '@mui/material';
import "./index.css"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function GridItem(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
          justifyContent: 'center',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "147px"
      }));
      
  return (
        <Grid item style={{ minWidth: '147px' }}  xs={1}>
          <Item>
            {props.data.type==="Image" ? 
            <img style={{ height: "147px", width: "147px" }}  class="our-team-video-img" src={props.data.thumbnail} alt="Generic placeholder thumbnail"></img> : 
            <div class="play-button-div">
                <img style={{ height: "147px", width: "147px" }}  class="our-team-video-img" src={props.data.thumbnail} alt="Generic placeholder thumbnail"/>
                
                <Button class="play-button-icon" onClick={handleOpen}><PlayCircleIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <iframe
            width="853"
            height="480"
            src={props.data.media}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </Box>
      </Modal>
            </div>
            }
          
          </Item>
        </Grid>
        
  );
}

const mapStateToProps = (state) => ({
//   isLoggedIn: get(state, "userData.isLoggedIn"),
//   currentUser: get(state, "userData.currentUser"),
});

export default connect(mapStateToProps, {})(GridItem);
