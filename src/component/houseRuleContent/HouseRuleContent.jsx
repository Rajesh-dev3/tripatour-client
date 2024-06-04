
import ProgressBar from '../progressBar/ProgressBar'
///styles
import "./styles.scss"

const HouseRuleContent = ({houseRuleData}) => {
 
  return (
    <> <div className="check-in-col"><h5>Check-In</h5>
    <p className='time-p'>
      <span className='progress-time'>{houseRuleData?.check_in}</span>
      <div className="tooltip">{houseRuleData?.check_in}
      
     
        </div>
      <ProgressBar progress={40} trans={true}/></p></div>
    <div className="check-in-col"><h5></h5>
    <p className="clr-gray">Guests are required to show a photo ID and credit card at check-in</p></div>
    <div className="check-in-col"><h5>Check-Out</h5>
    <p className='time-p'>
    <div className="tooltip2">{houseRuleData?.check_out}</div>
    <ProgressBar progress={50} trans={false}/>
    <span className='progress-time2'>{houseRuleData?.check_out}</span></p></div>
    <div className="check-in-col"><h5>Cancellation/<br/>prepayment</h5>
    <p className="clr-gray">{houseRuleData?.cancellation_policy} <span className="clr">condition</span></p></div>
    <div className="check-in-col"><h5>Children & Beds</h5>
    <ul>

  {houseRuleData?.child_policy ? <>
  <li className="list-title">
    Child policies</li>
    <li className="list-para mt-2">{houseRuleData?.child_policy}</li>
    </>:""}
    {/* <li className="list-para mt-5">TO see correct prices and occupancy info, add the number and ages of children in your group to your search.</li> */}
    <li className="list-title mt-2">Crib and extra bed policies</li>
    {houseRuleData?.crib_policy.map((item)=>{
      return(
<>
<li className="list-para mt-5 border p-5 border-radius bold w-80">{item?.age}</li>
    <li className="list-para border p-5 border-radius border-top-none w-80"><p className="w-50 m-0 p-0">{item?.product}</p><span className="clr-green">{item?.price}</span></li>
</>
      )
    })}
   
    {/* <li className="list-para mt-5 border p-5 border-radius bold w-80">12+ years</li>
    <li className="list-para border p-5 border-radius border-top-none w-80"><p className="w-50 m-0 p-0">Extra bed upon request</p><span className="list-para">AED 100 per person, per night</span></li> */}
   <li className="list-para mt-2">Prices for cribs and extra beds aren't included in the total price. They'll have to paid for separatelycduring your stay.<br/>
    The number of extra beds and cribs allowed depends on the option you choose. Check your selected option for more info.<br/>
    All cribs and extra beds are subject to availability.
   </li>
    </ul>
    </div>
    {houseRuleData?.age_restriction ? <div className="check-in-col"><h5>Age restriction</h5>
    <p className='list-para'>{houseRuleData?.age_restriction}</p></div>:""}
    <div className="check-in-col"><h5>Pets</h5>
    <p className='list-para'>{houseRuleData?.pets}</p></div>
{houseRuleData?.accepted_cards?.length ?
    <div className="check-in-col"><h5>Cards accepted at this hotel</h5>
    <p className='list-para'>{houseRuleData?.accepted_cards.map((item)=><span style={{marginRight:"10px"}} key={item}>{item}</span>)}
    </p></div>:""
}
    </>
    
  )
}

export default HouseRuleContent