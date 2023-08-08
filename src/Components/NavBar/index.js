import {Component} from 'react'
import { AiOutlineMenu} from "react-icons/ai"
import {RxCross2} from 'react-icons/rx'
import './index.css'

const Optional=()=>{

   return ( 
   <div>
       <div className='optionall'>
        <div className='row'>
            <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690216991/google-stars_ku0e4a.png' alt='rating' className='rating'
            />
            <h1 className='title'>Excellent 4.8 out of 5</h1>
        </div>
        <div className='row'>
            <p className='opt-para'>Talk to our Exicutive</p>
            <h1 className='title'>(+91) 8001-81-1234</h1>
            <p className='opt-para'>or</p>
            <button type='button' className='row opt-but-style'>
                <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690249180/profile2_hrkuor.png' alt='profile' className='opt-profile'/>
                <div>
                  <p className='zoom-in-out-box'>Request a Call Back</p>
                </div>
            </button>
        </div>
       </div>
    </div>  
)
   }





class NavBar extends Component{
    state={
        selectedMenu:false,
    }

    modify=()=>{
        this.setState(prevState=>({selectedMenu:!prevState.selectedMenu}))
    }

    render(){
        const {selectedMenu}=this.state
        return (
 
    <nav>
        <Optional/>
        <div className='style'>
        <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690251631/logo-2_prwhl4.png'  className='web-logo' alt='logo'/>
        <div className='row nav-sm'>
            <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690252689/call_sm_oxvkgz.png' className='call' alt='call'/>
            <button onClick={this.modify} type='button' className='dropdown'>
            {selectedMenu?<RxCross2 className='icon'/>:<AiOutlineMenu className='icon'/>}
            </button>
        </div>
        <div className='row nav-lg'>
            <p className='nav-title'>IT SOLUTIONS+</p>
            <p className='nav-title'>STARTUP BOX+</p>
            <p className='nav-title'>COMPANY+</p>
            <p className='nav-title'>PURCHASE+</p>
            <p className='nav-title'>PORTFOLIO</p>
            <p className='nav-title'>CAREER</p>
            <p className='nav-title'>REACH US+</p>
            <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690252699/lg-call_gcqoqr.png' alt='call' className='logo'/>
        </div>
        </div>
        
    </nav>

   
        )
    }
}  

export default NavBar