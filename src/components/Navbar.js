import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div>Services</div>
        <div>Product</div>
        <div>Technology</div>
        <div className='expandable__link'>About <ExpandMoreOutlinedIcon /></div>
        <div className='expandable__link'>Client <ExpandMoreOutlinedIcon/></div>
        <div>Partner</div>
      </div>
      <div className="navbar__icons">
      <HomeOutlinedIcon className='navbar__icon'/>
      <MailOutlinedIcon className='navbar__icon' />
      <ShuffleOutlinedIcon className='navbar__icon'/>
      </div>
    </div>
  )
}

export default Navbar