import {Component} from 'react'
import './index.css'; // Import the CSS file with animation styles
let intervall=null

const DisplayItem=(props)=>{
  const {itemDetails}=props
  const {id,imageUrl}=itemDetails
  return <img src={imageUrl} alt={id} className='slide'/>
}

class MoveBar extends Component{
   state={
    currentStatus:true
   }

   componentDidMount(){
    this.activateInterval()
   }  

   componentWillUnmount(){
    clearInterval(intervall)
   }

   activateInterval=()=>{
   intervall = setInterval(() => {
      this.setState(prevState=>({currentStatus:!prevState.currentStatus})); 
    }, 100);
   }
   
  render(){
    const {currentStatus}=this.state
    console.log(currentStatus)
    const {classValue,list}=this.props
    return (
    <div className='inlineblock'>
      <div className={`${classValue} ${currentStatus ? 'paused' : ''}`}>
    <div className="marquee-content">
      {list.map(item=><DisplayItem key={item.id} itemDetails={item}/>)}
    </div>
  </div>
    </div>
  )
    }
};

export default MoveBar;