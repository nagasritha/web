import {Component} from 'react'
import { AiOutlineMenu,AiFillCaretRight } from "react-icons/ai"
import {RxCross2} from 'react-icons/rx'
import {RiArrowDropUpLine,RiArrowDropDownLine} from 'react-icons/ri'
import React, { useState, useEffect } from 'react';
import './index.css'

const Optional=()=>{
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
      // Set up the interval to toggle zoom every 3 seconds
      const interval = setInterval(() => {
        setIsZoomed(prevState => !prevState);
      }, 1000);
  
      // Clean up the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }, []);

   return ( 
   <div>
       <div className='optional'>
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
                <div className={`zoom-container ${isZoomed ? 'zoom-in' : 'zoom-out'}`}>
                  <p className='opt-but-title'>Request a Call Back</p>
                </div>
            </button>
        </div>
       </div>
    </div>  
)
   }

const SubList=(propss)=>{
    const {itemDetails}=propss
    const {comment}=itemDetails
    const [isActive,setISActive]=useState(true)
    const toggle=()=>{
        setISActive(!isActive)
    }
    return <div className={isActive?'row back-color':'row'}  onMouseEnter={toggle} onMouseLeave={toggle}>
    <AiFillCaretRight className='bullet'/>
    <p className='item'>{comment}</p>
 </div>
}

const SimpleElement=(props)=>{
    const {item}=props;
    const [isActive,setISActive]=useState(true)
    const toggle=()=>{
        setISActive(!isActive)
    }
    return (
        <div className={isActive?'back-color':null} onMouseEnter={toggle} onMouseLeave={toggle}>
            <div className='row'>
                <AiFillCaretRight className='bullet'/>
                <p className='item'>{item}</p>
            </div>
        </div>
    )
}

const MenuBar=(props)=>{
    const {cancel}=props
    const [isActive,setISActive]=useState({
        close:true,
        it:false,
        graphic:false,
        web:false,
        mobile:false,
        website:false,
        other:false,
        company:false,
        purchase:false,
        reach:false,
        contact:true,
        enter:false,
        business:false,
        digital:false,
        domains:false,
        hosting:false,
        sever:false,
        professional:false,
        and:false,
    })
    const toggle=(prop)=>{
        console.log(isActive)
        setISActive({...isActive,[prop]:!isActive[prop]})
    }
    const exit=()=>{
        cancel()
    }
    const graphicDesigning=[
        {comment:'Complete Branding'},
        {comment:'Logo Designing'},
        {comment:'Graphic Designs'},
        {comment:'Product Pakaging Designs'},
        {comment:'Business presentation'},
        {comment:'2D & 3D animated videos'},
    ]
    const webDevelopment=[
        {comment:'Custom Website Development'},
        {comment:'PHP based application Development'},
        {comment:'CMS Web Development'},
        {comment:'React JS Development'},
        {comment:'PSD to WORDPRESS Devlopment'},
        {comment:'WORDPRESS Develpoment'},
        {comment:'Node JS Development'},
        {comment:'Angular JS  Develpoment'},
        {comment:'E-Commerce Develpoment'},
        ]
    const mobileAppDevelopment=[
        {comment:'Web App'},
        {comment:'Hybrid App'},
        {comment:'Native'},
    ]
    const websiteDesigning=[
        {comment:'UI-UX Design'},{comment:'Responsive Web Design'},{comment:'Multi-purpose landing page Designing'},{comment:'Website Redesigning'},{comment:'Fully Comstamised Website Design'}
    ]
    const otherServices=[
        {comment:'API Integration Services'},
        {comment:'Custom Software Development'},
        {comment:'Software Testing Service'},
        {comment:'Hosting Migratin Services'},
    ]
    const EnterpriseSollution=[
        {comment:'Start-up MVP Development'},
        {comment:'ERP Sollutions'},
        {comment:'CRM Sollutions'},
        {comment:'Complete Accounting Software'}
    ]
    const businessConsultation=[
        {comment:'Start-Up Tech Consultation'},
        {comment:'Business Planning Consultation'},
        {comment:'Launch Process Plan'},
        {comment:'Feture Growth Plan'}
    ]
    const digitalMarketing=[
        {comment:'Website Speed Boost and Optimization'},
        {comment:'Brand Outreach and Promotion'},
        {comment:'Lead Generation'},
        {comment:'Target Custamer DataBase Acquisition'},
        {comment:'Social Media Marketting'},
        {comment:'Social Media Optimization'},
        {comment:'SEO'},
    ]
    const hostingList=[
        {comment:'Shared Hosting'},
        {comment:'Windows Shared Hosting'},
        {comment:'Cloud Hosting'},
        {comment:'Windows App Development'},
        {comment:'Windows Reseller Hosting'},
        {comment:'Wordpress Hosting'},
        {comment:'Drupal Hosting'},
        {comment:'Joomla hosting'}
    ]
    const serverList=[
        {comment:'VPS Server'},
        {comment:'Plesk VPS Server'},
        {comment:'Bluehost VPS'},
        {comment:'DedicatedServer'},
        {comment:'Windows Dedicated Server'},
        {comment:'Managed Server'},
    ]
    const professionalList=[
        {comment:'Business Mails'},
        {comment:'Web Mail'},
        {comment:'Enterprise Mail'},
        {comment:'G Suite'},
    ]
    const andList=[
        {comment:'Website Backup'},
        {comment:'SSL Certificate'},
        {comment:'Website Security'},
        {comment:'Domain Reseller'},
        {comment:'Domain Registration'},
       
    ]
    const companyList=['How We Work','Why Trust and Choose Us','Technology We Use','Our Achievements','Sister Companies','About']
    const reachList=['Contact Us','Schedule A Meeting','Partner With Us','Join Business Colaboration','Ask for Quotations']
    const domainsList=[{comment:'Register a Domain'},{comment:'Bulk Domain Registration'},{comment:'New Domain Extentions'},{comment:'Sunrise Domains'},{comment:'Premium Domains'},{comment:'IDN Domain Registration'},{comment:'Bulk Domain Transver'},{comment:'Free with Every Domain'},{comment:'Name Suggestion Tool'},{comment:'WHOIS LOOKUP'}]
    return (<div className='menuBar'>
        <div className={isActive.close?'close back-color':'close'} onMouseEnter={()=>toggle('close')} onMouseLeave={()=>toggle('close')}>
            <h1 className='opt-title'>Close</h1>
            <RxCross2 onClick={exit} className='icon color'/>
        </div>
        <div className='padding'>
            <div className='row close'>    
                <p className='item'>It Solutions</p>
                <div onClick={()=>toggle('it')}>
                    {isActive.it?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                </div>
            </div>
            {isActive.it && <div>
                   <div className={isActive.graphic?'close':'close back-color'}>
                     <div className='row'>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Graphic Designing</p>
                     </div>
                     <div onClick={()=>toggle('graphic')}>
                     {isActive.graphic?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.graphic && <div>
                     {graphicDesigning.map(item=><SubList itemDetails={item} key={item}/>)}                 
                   </div> }
                   <div className={isActive.web?'close':'close back-color'}>
                     <div className='row' >
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Web Development</p>
                     </div>
                     <div onClick={()=>toggle('web')}>
                     {isActive.web?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.web && <div>
                    {webDevelopment.map(item=><SubList itemDetails={item} key={item}/>)} 
                    </div> }
                   <div className={isActive.mobile?'close':'close back-color'}>
                     <div className='row' onClick={()=>{toggle('mobile')}}>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Modile App Development</p>
                     </div>
                     <div onClick={()=>toggle('mobile')}>
                     {isActive.mobile?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.mobile && <div>
                    {mobileAppDevelopment.map(item=><SubList itemDetails={item} key={item.comment}/>)} 
                </div> }
                <div className={isActive.website?'close':'close back-color'}>
                     <div className='row' onMouseEnter={()=>toggle('website')} onMouseLeave={()=>toggle('website')}>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Website Designing</p>
                     </div>
                     <div onClick={()=>toggle('website')}>
                     {isActive.website?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.website && <div>
                     {websiteDesigning.map(item=><SubList itemDetails={item} key={item.comment}/>)}
                </div> }
                <div className={isActive.other?'close':'close back-color'}>
                     <div className='row' onMouseEnter={()=>toggle('other')} onMouseLeave={()=>toggle('other')}>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Other Services</p>
                     </div>
                     <div onClick={()=>toggle('other')}>
                     {isActive.other?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.other && <div>
                    {otherServices.map(item=><SubList itemDetails={item} key={item.comment}/>)}
                </div> }
         </div>}
         <div className='row close'>    
                <p className='item'>Startup Box</p>
                <div onClick={()=>toggle('start')}>
                    {isActive.start?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                </div>
            </div>
            {isActive.start && <div>
                   <div className={isActive.enter?'close':'close back-color'}>
                     <div className='row'>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Enterprise Sollution</p>
                     </div>
                     <div onClick={()=>toggle('enter')}>
                     {isActive.enter?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.enter && <div>
                     {EnterpriseSollution.map(item=><SubList itemDetails={item} key={item}/>)}                 
                   </div> }
                   <div className={isActive.business?'close':'close back-color'}>
                     <div className='row' >
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Business Consultation</p>
                     </div>
                     <div onClick={()=>toggle('business')}>
                     {isActive.business?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.business && <div>
                    {businessConsultation.map(item=><SubList itemDetails={item} key={item}/>)} 
                    </div> }
                   <div className={isActive.digital?'close':'close back-color'}>
                     <div className='row' onClick={()=>{toggle('digital')}}>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Digital Marketing</p>
                     </div>
                     <div onClick={()=>toggle('digital')}>
                     {isActive.digital?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.digital && <div>
                    {digitalMarketing.map(item=><SubList itemDetails={item} key={item.comment}/>)} 
                </div> }
         </div>}                  
            <div className='row close'>    
                <p className='item'>Company</p>
                <div onClick={()=>toggle('company')}>
                    {isActive.company?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                </div>
            </div>
            {isActive.company && companyList.map(item=><SimpleElement key={item} item={item}/>)}           
            <div className='row close'>    
                <p className='item'>Purchase</p>
                <div onClick={()=>toggle('purchase')}>
                    {isActive.purchase?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                </div>
            </div>
            {isActive.purchase && <div>
                   <div className={isActive.domains?'close':'close back-color'}>
                     <div className='row'>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Domains</p>
                     </div>
                     <div onClick={()=>toggle('domains')}>
                     {isActive.domains?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.domains && <div>
                     {domainsList.map(item=><SubList itemDetails={item} key={item}/>)}                 
                   </div> }
                   <div className={isActive.hosting?'close':'close back-color'}>
                     <div className='row' >
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Hosting</p>
                     </div>
                     <div onClick={()=>toggle('hosting')}>
                     {isActive.hosting?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.hosting && <div>
                    {hostingList.map(item=><SubList itemDetails={item} key={item}/>)} 
                    </div> }
                   <div className={isActive.server?'close':'close back-color'}>
                     <div className='row' onClick={()=>{toggle('server')}}>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Server</p>
                     </div>
                     <div onClick={()=>toggle('server')}>
                     {isActive.server?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.server && <div>
                    {serverList.map(item=><SubList itemDetails={item} key={item.comment}/>)} 
                </div> }
                <div className={isActive.professional?'close':'close back-color'}>
                     <div className='row' onClick={()=>{toggle('professional')}}>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Professional Emails</p>
                     </div>
                     <div onClick={()=>toggle('professional')}>
                     {isActive.professional?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.professional && <div>
                    {professionalList.map(item=><SubList itemDetails={item} key={item.comment}/>)} 
                </div> }
                <div className={isActive.and?'close':'close back-color'}>
                     <div className='row' onClick={()=>{toggle('and')}}>
                        <AiFillCaretRight className='bullet'/>
                        <p className='item'>Digital Marketing</p>
                     </div>
                     <div onClick={()=>toggle('and')}>
                     {isActive.and?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                     </div>
                   </div>
                   {isActive.and && <div>
                    {andList.map(item=><SubList itemDetails={item} key={item.comment}/>)} 
                </div> }
                </div>}
        
            <div className='row close'>    
                <p className='item'>Portfoli</p>
            </div> 
           
            <div className='row close'>    
                <p className='item'>Careers</p>
            </div> 
       
            <div className='row close'>    
                <p className='item'>Reach us</p>
                <div onClick={()=>toggle('reach')}>
                    {isActive.reach?<RiArrowDropUpLine className='icon'/>:<RiArrowDropDownLine className='icon'/>}
                </div>
            </div>
            {isActive.reach && reachList.map(item=><SimpleElement key={item} item={item}/>)}

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
            {selectedMenu?<MenuBar cancel={this.modify}/>:null}
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