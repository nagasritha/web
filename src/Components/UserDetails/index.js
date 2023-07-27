import {AiOutlineRight} from 'react-icons/ai'
import React, {useState,useEffect} from 'react'
import {BiSolidPhoneCall,BiLogoTwitter} from 'react-icons/bi'
import {CiFacebook} from 'react-icons/ci'
import {AiOutlineInstagram,AiFillCaretRight} from 'react-icons/ai'
import {GrLinkedinOption,GrMail} from 'react-icons/gr'
import {SlSocialYoutube} from 'react-icons/sl'
import {BsWhatsapp} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import NavBar from '../NavBar'
import MoveBar from '../MoveBar'
import './index.css'
import AnimatedParagraph from '../Animation'

const Cards=(props)=>{
    const [isActive,setISActive]=useState(true)
    const bool=()=>setISActive(!isActive)
    const {itemDetails}=props
    const {url,h1,li,p,classValue} = itemDetails
    return <div className={`card tilt-card ${classValue}`} onMouseEnter={bool} onMouseLeave={bool}>
      <img src={url} alt={h1} className={isActive ?'show onLine':'hide'}/>
      <h1>{h1}</h1>
      <div className='onLine'>
        {li.map(item=>(
        <div className='onLine'>
          <p className='bold'>{item}</p>
          <hr className='bar'/>
        </div>))}
        </div>
      <p className={isActive?'hide':'show onLine'}>{p}</p>
    </div>

  }
const cardList=[
  {url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690347293/step1_iujeon.png',
   h1:'Web Development',
   li:['PHP', 'HTML5' ,'REACT' ,'WORDPRESS'],
   p:'Creating and Maintaining a website to provide the best looking and efficiently working websites for a seamless user experience.',
   classValue:'card1 bgcolor1'
},{url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690350542/step2_uwwctw.png',
h1:'App development',
li:['PWA','REACT NATIVE','KOTLINE'],
p:'Creation of Software Applications that run on a mobile device. They utilize a network connection to work with remote computing resources.',
classValue:'bgcolor2'},
{
  url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690351069/step3_xhchgs.png',
  h1:'Graphic Designing',
  li:['BRAND','LOGO','BANNER','VC'],
  p:'The creation of styles through the method of communication and problem-solving through the utilization of typography, photography, illustrations, and lots more.',
  classValue:'bgcolor3'
},
{url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690352301/mike_rtbh06.png',
   h1:'Digital Marketing',
  li:['PPC','SMM','AD CREATE','B2BLEAD'],
  p:'Use of the Internet and Digital Technologies/ Media to promote/ sell people, products, businesses, etc.',
  classValue:'bgcolor4'
},
{
  url:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690351052/STEP4_z4pcqm.png',
  h1:'SEO',
  li:['ONPAGE','BACLKLINE','ANALYTICS'],
  p:'The process of increasing and improving the quality and quantity of traffic to a website via search engines',
  classValue:'bgcolor5'
}
]
const DisplayImage=(props)=>{
  const [isActive,setISActive]=useState(true)
    const bool=()=>setISActive(!isActive)
  const {image}=props 
return <div onMouseEnter={bool} onMouseLeave={bool}>
  <img src={image} alt='logos' className={`circularStyle ${isActive?null:'border'}`}/>
</div>
}
const SecondCardStyle=(props)=>{
  const {itemDetails}=props
  const {imageUrl,heading,content}=itemDetails
  return (
    <div className='sec-card'>
      <img src={imageUrl} alt='heading' className='sec-icon'/>
      <div className='align-left'>
        <h1>{heading}</h1>
        <p className='sec-para'>{content}</p>
      </div>
    </div>
  )
}

const FourthCardStyle=(props)=>{
  const {itemDetails}=props
  const {color,imageUrl,heading,content}=itemDetails
  return (
    <div className='fourth-card' style={{backgroundColor:color, color:'#ffffff'}}>
      
      <div className='align-left'>
        <p className='sec-para'>{heading}</p>
        <h1>{content}</h1>
      </div>
      <img src={imageUrl} alt='heading' className='fourth-icon'/>
    </div>
  )
}

const IconsData=(props)=>{
  const {value}=props
  const {color,icon,text}=value
  return <div style={{backgroundColor:color}} className='diffStyle'>
      <img src={icon} alt={text} className='icon'/>
      <p style={{color:'black', fontSize:'15px',fontWeight:'300'}}>{text}</p>
  </div>
}

const CountDown=(props)=>{
  const {itemDetails}=props
  const {num,text,icon}=itemDetails
  return <div style={{display:'flex',alignItems:'center', marginRight:'25px'}}>
    <img src={icon} alt={num} className='lastIcon'/>
    <div className='align-left' style={{marginLeft:'10px'}}>
      <h1 className='first-title'>{num}</h1>
      <p className='color-white'>{text}</p>
    </div>
  </div>
}

const FourthList=[
  {heading:'DESIGN',
    content:'Graphic Designing and Branding',
  imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690373476/fourthcard_f8vz8g.png',color:'#1360f0'},
 
  {heading:'APPLICATION',
  content:'Application Based Software',
  imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690373482/fourthcard2_ikl5ao.png',
  color:'#f01343'},

{heading:'SEO',
content:'Search Engine Optimization',
imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690373509/fouthcard4_fcaqdw.png',
color:'#f05513'},

{heading:'WEB DESIGN',
content:'Website Design & Development',
imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690373489/fouthcard3_atmsjm.png',
color:'#8048ab'}
]
const imageUrls=['https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690355007/php_fvtsul.png','https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690355017/icon2_bfwrpb.png','https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690355022/icon3_nv3iaz.png','https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690355029/icon4_picdo1.png','https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690355036/icon5_oseiuz.png','https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690355043/icon6_amfzsf.png','https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690355060/icon7_hdilek.png','https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690355108/ison8_lxmuc4.png',]
const firstCardsList=[
  {id:'card1', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297399/card1_yslwig.png'},
  {id:'card2', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297437/card2_dhhect.png'},
  {id:'card3', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297459/card3_ai0frm.png'},
  {id:'card4', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297476/card4_ff4w7u.png'},
  {id:'card5', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297494/card5_pz2bkt.png'},
  {id:'card6', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297513/card6_uoqezh.png'},

]
const specialCardsList=[
  {id:'item1', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297752/short13_bob8ia.png'},
  {id:'item2', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297732/short12_gpiyvw.png'},
  {id:'item3', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297716/short11_izfb4w.png'},
  {id:'item4', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297700/short10_pfpjlg.png'},
  {id:'item5', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297684/short9_jbrf1y.png'},
  {id:'item6', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297669/short8_bdksya.png'},
  {id:'item1', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297653/short7_fuki4l.png'},
  {id:'item2', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297637/short6_dhlp74.png'},
  {id:'item3', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297619/short5_ndjxg2.png'},
  {id:'item4', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297604/short4_bgi6u6.png'},
  {id:'item5', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297584/short3_isean5.png'},
  {id:'item6', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297562/short2_skz1fs.png'},
  {id:'item6', imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690297538/short1_zyhclz.png'},

]
const secondCardList=[
  {imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690358605/sec1_gic1fe.png',
heading:'Trustworthy Service',
content:'We work to serve you so that you can make your business stronger.'},

{imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690358609/sec2_kvktqo.png',
heading:'Dedicated Manager and Team',
content:'We assign a manager and a team to your project for better and perfect results.'},

{imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690358615/sec3_jlqdr8.png',
heading:'Technical Proficiency',
content:'Our Team is highly proficient in the technology they use. They believe in understanding technology to a deeper level.'},

{imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690358619/sec4_dnyjep.png',
heading:'Customer Friendly',
content:'We listen to your problems with the utmost professionalism and friendly nature.'},

{imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690358625/sec5_bawc46.png',
heading:'Timely reports',
content:'We give you knowledge about your project progress timely and communicate regarding the same.'},

{imageUrl:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690358631/sec6_ixlrxb.png',
heading:'Punctuality',
content:'The best delivered in time is our prime focus to increase satisfaction and trust. For us, time is the key!'},

]
const iconsList=[
  {color:'#40cef5',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379341/icon1_jaul9d.png',
   text:'Social Media'},
   {color:'#fccc6a',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379347/icon22_d8wcod.png',
   text:'Manufacturing Industry'},
   {color:'#93f3fa',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379352/icon33_r1w1rx.png',
   text:'Online Shopping'},
   {color:'#d4995f',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379358/icon44_bka9g4.png',
   text:'Dental Health Care'},
   {color:'#d7fa75',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379363/icon55_xbhzx4.png',
   text:'Hospitality'},
   {color:'#f59dbe',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379373/icon66_io3oq6.png',
   text:'Enterprise Service'},
   {color:'#f59def',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379383/icon77_cbsafk.png',
   text:'Educational Industry'},
   {color:'#c99df5',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379390/icon88_uwz6ts.png',
   text:'Corporate & Enterprise'},
   {color:'#9dc0f5',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379397/icon99_kpnjyv.png',
   text:'Health Care'},
   {color:'#9de8f5',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379406/icon10_m2k9hf.png',
   text:'Event Management'},
   {color:'#e0bf9f',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379412/icon11_kdyyvs.png',
   text:'Food & Restaurant'},
   {color:'#93f3fa',
   icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690379420/icon12_ijfdqq.png',
   text:'Consultancy'},
   
]
const countdownList=[
  {
    num:'200+',
    text:'Happy clients',
    icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690382262/last1_m0y5o9.png'
  },
  {
    num:'500+',
    text:'Project Down',
    icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690382265/last2_vdv1nc.png'
  },
  {
    num:'3+',
    text:'Years Served',
    icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690382269/last3_enkzhp.png'
  },
  {
    num:'5+',
    text:' Foreign Projects',
    icon:'https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690382275/last4_t5br0n.png'
  },
]
const UserDetails=()=><div>
<NavBar/>
<div style={{ paddingTop: '54px' }}>
   <div className='blue-container'>
        <div className='first'>
            <h1 className='first-title'>WEBSITE GRAPHICS MARKETING APPLICATION</h1>
            <p className='first-para'>Digital IT Sollutions for Transforming and innovating Businesses.</p>
            <button type='button' className='first-but'>View Portfolio <AiOutlineRight/></button>
        </div>
        <MoveBar classValue='marquee-container1' list={firstCardsList}/>
    </div>
    <MoveBar classValue='marquee-container2' list={specialCardsList}/>
      <div className='flex'>
            <div className='first'>
               <h1 className='part2-heading'>Why to take your business Online?</h1>
               <p className='part2-para'>The Internet may be a deep-sea expecting to be explored. 
                You can get all you want if you dive in. If you're taking your business online,
                 it has certain benefits. It improves your brand image, your business is often available to consumers 24/7,
                  the start-up cost is extremely less, it reduces operation cost, you'll work from anywhere around the world,
                   but most significantly, the web was made for Business.</p>
                   <p className='part-2-bolder'>In todays market, is it required-</p>
                   <ul className='align-left'>
                    <li className='type'>To beat the Competition.</li>
                    <li className='type'>To Gain Leverage in the Market.</li>
                    <li className='type'>To get exposure and expansion.</li>
                   </ul>
                   <button type='button' className='first-but'>Request A Quote <AiOutlineRight/></button>
            </div>
            <div className='align'>
               <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690305573/part-2_ourncr.png' alt='part2' className='right-align'/>
            </div>
      </div>
      <div className='overLapingelement'>
        <p className='para-line'>Need <span className='spanedColor'><AnimatedParagraph text='Solutions to all your business Complications?'/></span></p>
        <button type='button' className='third-but'>Get in Touch</button>
      </div>
      <div className='addPadding color-blue align-center'>
           <p className='firAni'>WE ARE INNOVATIVE SOLLUTION PROVIDERS</p>
           <h1 className='first-title'>Top rated-IT Solutions Company</h1>
           <p className='color-white'>WEBINGO® is a renowned end-to-end IT company in India that 
            provides ultimate IT solutions and has provided consultancy to 
            numerous start-ups across India, making a name as one of the best 
            IT consulting companies in Kolkata. WEBINGO provides Innovative IT 
            Solutions at minimal Investments at the best price and excellent Customer Service.</p>
      </div>
      <div className='cardsContainer'>
        <div className='card card1'>
            <h1 className='first-title'>Integrated Services</h1>
            <p className='color-white'>We have worked over the years to Integrate all the services 
                in one place so that you don’t have to go door-to-door for 
                the best quality of service.</p>
        </div>
        {cardList.map(item=><Cards itemDetails={item} key={item.h1}/>)}
      </div>
      <div className='flex-item'>{imageUrls.map(item=><DisplayImage image={item}/>)}</div>
      <div className='addPadding color-blue align-center'>
           <p className='firAni'>WE DELIVER OUR BEST</p>
           <h1 className='first-title'>WE DELIVER OUR BEST</h1>
           <p className='color-white'>We are the best at what we do.</p>
           <div className='sec-card-container'>
            {secondCardList.map(item=><SecondCardStyle itemDetails={item} key={item.heading}/>)}
           </div>
           <div className='flex-item'>
            <h1 className='first-title bold'>Want to <span className='spanBold'>start a</span> new project?</h1>
            <button type='button' className='first-but'>Enquire Now <AiOutlineRight/></button>
           </div>
      </div>
      <div className='white-container'>
         <p className='firAni'>OUR EXCELLENCE</p>
         <h1 className='voilet-color'>Our Key Expertise Areas</h1>
        <div className='sec-card-container'>
          {FourthList.map(item=><FourthCardStyle key={item.heading} itemDetails={item}/>)}
        </div>
        <div className='flex-item' style={{paddingBottom:'25px;'}}>
            <h1 className='first-title bold' style={{color:'black',fontWeight:'800',fontSize:'25px;'}}>Get Your Free <span className='spanBold' style={{color:'GrayText'}}>Customized Quotation</span></h1>
            <button type='button' className='first-but'>Today <AiOutlineRight/></button>
           </div>
      </div>
      
      <div className='addPadding color-blue align-center' style={{paddingTop:'40px;'}}>
        <p className='firAni'>SERVICE TESTIMONIALS</p>
        <h1 className='first-title'>Client Testimonials</h1>
        <p className='color-white'>Check out what our happy customers say.</p>
      </div>

      <div className='flex'>
        <div className='wrap1'>
          <p className='firAni'>INDUSTRIES WE WORKED FOR</p>
          <h1 className='voilet-color'>Helping Businesses in All Domains</h1>
          <p className='part2-para'>Successfully delivered digital products and solutions to a wide variety of industries.</p>
        </div>
        <div className='sec-card-container wrap2'>
          {iconsList.map(item=><IconsData key={item.color} value={item}/>)}
        </div>
      </div>
      <div className='addPadding color-blue align-center' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {countdownList.map(item=><CountDown key={item.num} itemDetails={item}/>)}
      </div>
      <div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <h1 className='buttonType'>Webingo was featured on</h1>
          <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690443126/announcement_a1v4n9.png' className='toggle' alt='toggle'/>
        </div>
        <MoveBar classValue='marquee-container3' list={specialCardsList}/>
      </div>
      <div className='column-style'>
           <p className='firAni'>LET’S BUILD SOMETHING TOGETHER</p>
           <h1 className='voilet-color'>Our Pleasure is to listen to your requirements</h1>
           <button type='button' className='trans-button'>Estimate Project <AiOutlineRight/></button>
           <div style={{display:'flex', alignItems:'center'}}>
            <p style={{marginRight:'10px'}}>Or call us now</p>
            <p className='firAni'><BiSolidPhoneCall/>8001-81-1234</p>
           </div>
      </div>
      <div className='item10'>
        <div>
          <h1 className='voilet-color'>Stay Tuned with us:</h1>
          <p style={{color:'GrayText'}}>Get WebInGo news and announcements delivered
           right to your inbox.</p>
        </div>
        <div>
          <input type='text' placeholder='Enter Your Address'/>
          <button type='button' className='item10-but'>Subscribe <AiOutlineRight/></button>
        </div>
     
      </div>
      <div className='middle-page'>
        <div style={{width:'200px'}}>
          <h1>About Webingo Infotech Solutions LLP</h1>
          <p>End-to-End IT Solutions and business consultation provider</p>
          <button type='button' className='first-but'>Pay Us Online <AiOutlineRight/></button>
          <p>We Accept :</p>
          <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690390349/opions_ough8p.png' alt='payment'/>
        </div>
        <div style={{width:'200px'}}>
          <h1>Contact Us</h1>
               <div className='row'>
                        <GrMail className='bullet' style={{fontSize:'40px', marginRight:'10px'}}/>
                        <div>
                          <h1>Email</h1>
                          <p>info@webingo.in</p>
                        </div>
                    </div>
                <div className='row'>
                        <BiSolidPhoneCall style={{fontSize:'40px', marginRight:'10px'}} className='bullet'/>
                        <div>
                          <h1>Phone</h1>
                          <p>(+91) 8001-81-1234</p>
                        </div>
                    </div>
                    <div className='row'>
                        <ImLocation style={{fontSize:'40px', marginRight:'10px'}} className='bullet'/>
                        <div>
                          <h1>Address</h1>
                          <p>7th Floor, Monibhandar Building Webel Bhavan Premises, Sector V, Ring Rd, Bidhannagar, West Bengal 700091</p>
                        </div>
                    </div>
        </div>
        <div style={{width:'200px'}}>
          <h1>Quick link</h1>
            <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Seo</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Logo Design</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Graphic Design</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>App Development</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Bulk Sms</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Content Writting</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Sitemap</p>
              </div>
        </div>
        <div style={{width:'200px'}}>
          <h1>Company</h1>
            <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Contact Us</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>About us</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Our Achievements</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Payment Policy</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Privacy policy</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Terms and Conditions</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>License & Copyright</p>
              </div>
              <div className='row' >
                <AiFillCaretRight className='bullet'/>
                <p className='item'>Refund Polocy</p>
              </div>
            </div>
      </div>
      
      
      <div className='item11'>
        <div>
          <h1 style={{color:'black'}}>India's Most Reliable IT Solution Company</h1>
          <p style={{color:'GrayText'}}>Acclaimed, Certified and Reviewed by some biggest names and organisations.</p>
        </div>
        <div>
          <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690388245/long_lxihmr.png' alt='long' className='long'/>
        </div>
        
      </div>
      <div className='last-info-container'>
          <div className='socialLogos'>
            <CiFacebook style={{fontSize:'25px' ,marginRight:'10px'}}/>
            <BiLogoTwitter style={{fontSize:'25px', marginRight:'10px'}}/>
            <AiOutlineInstagram style={{fontSize:'25px', marginRight:'10px'}}/>
            <GrLinkedinOption style={{fontSize:'25px', marginRight:'10px'}}/>
            <SlSocialYoutube style={{fontSize:'25px', marginRight:'10px'}}/>
            <BsWhatsapp style={{fontSize:'25px', marginRight:'10px'}}/>
            <GrMail style={{fontSize:'25px', marginRight:'10px'}}/>
          </div>
          <p>Copyright © 2017-23 Webingo. All rights reserved.</p>
          <img src='https://res.cloudinary.com/dwoqcvsxt/image/upload/v1690389557/lastImage_zzl0kr.png' alt='lastImage' className='lastImage'/>
      </div>
</div>
</div>

export default UserDetails