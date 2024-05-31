import ProgressBar from '../progressBar/ProgressBar'
///styles
import "./styles.scss"
const HouseRuleContent = () => {
  return (
    <> <div className="check-in-col"><h5>Check-In</h5>
    <p className='time-p'>
      <span className='progress-time'>2:00 PM</span>
      <div className="tooltip">From:2:00 PM
      
     
        </div>
      <ProgressBar progress={40} trans={true}/></p></div>
    <div className="check-in-col"><h5></h5>
    <p className="clr-gray">Guests are required to show a photo ID and credit card at check-in</p></div>
    <div className="check-in-col"><h5>Check-Out</h5>
    <p className='time-p'>
    <div className="tooltip2">From:2:00 PM</div>
    <ProgressBar progress={50} trans={false}/>
    <span className='progress-time2'>2:00 PM</span></p></div>
    <div className="check-in-col"><h5>Cancellation/<br/>prepayment</h5>
    <p className="clr-gray">Cancellation and prepayment policies vary according to accommodations type.Check what <span className="clr">condition</span> might applt to each option when making your section</p></div>
    <div className="check-in-col"><h5>Children & Beds</h5>
    <ul>

  <li className="list-title">
    Child policies</li>
    <li className="list-para mt-2">Children of all ages are welcome.</li>
    <li className="list-para mt-5">TO see correct prices and occupancy info, add the number and ages of children in your group to your search.</li>
    <li className="list-title mt-2">Crib and extra bed policies</li>
    <li className="list-para mt-5 border p-5 border-radius bold w-80">0-2 years</li>
    <li className="list-para border p-5 border-radius border-top-none w-80"><p className="w-50 m-0 p-0">Crib upon request</p><span className="clr-green">Free</span></li>
    <li className="list-para mt-5 border p-5 border-radius bold w-80">12+ years</li>
    <li className="list-para border p-5 border-radius border-top-none w-80"><p className="w-50 m-0 p-0">Extra bed upon request</p><span className="list-para">AED 100 per person, per night</span></li>
   <li className="list-para mt-2">Prices for cribs and extra beds aren't included in the total price. They'll have to paid for separatelycduring your stay.<br/>
    The number of extra beds and cribs allowed depends on the option you choose. Check your selected option for more info.<br/>
    All cribs and extra beds are subject to availability.
   </li>
    </ul>
    </div>
    <div className="check-in-col"><h5>Age restriction</h5>
    <p className='list-para'>The minimum age for check-in is 18</p></div>
    <div className="check-in-col"><h5>Pets</h5>
    <p className='list-para'>Pets are not allowed.</p></div>
    <div className="check-in-col"><h5>Cards accepted at this hotel</h5>
    <p className='list-para'>Wyndham Dubai Marina accepts these cards and reserves the right to temporarily hold an amount prior to arrival.</p></div>
    </>
  )
}

export default HouseRuleContent