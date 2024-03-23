import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return(
        <div>
            <img src="https://is.zobj.net/image-server/v1/images?r=79ysalhmJ5jKHj8qlNbS7Ot968A6pUFZIrTcP4mHqVMTLcIp5_leDeO3chSI2KOToeHpsUll06PzbxyzJebw5LdpfIHCpwBoJT_rjJHToTClOOlKTkHdGSyW7r2JGGpAtK1hOv3qooNQt5ktmy3Mt9JEWF32DSz-hEldwORtTSenxCuDjzlctfLwMWE2xaOhVN5aiajuuCeA72p0" 
            alt="logo"
            className='logo' />
            {auth? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
                :
            <ul className='nav-ul nav-right'>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/Login">Login</Link></li> 
            </ul>   
        }    
        </div>
    )
}

export default Nav;