import React, {useState, useEffect, createRef} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const refBtn = createRef("btn");

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(()=>{
     setAnchorEl(refBtn.current)
  },[])

  return (
    <div>
      <Button ref={refBtn} aria-controls="simple-menu" id="menuAnchor" aria-haspopup="true" onClick={handleClick}>
        Main Menu
      </Button>
      <Menu
        id="simple-menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={refBtn.current}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
