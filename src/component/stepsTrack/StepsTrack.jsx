const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];
import StepCol from "./StepCol";
import "./styles.scss";
import RoomIcon from '@mui/icons-material/Room';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useExperienceQuery } from "../../service/experience/Experience";
import { useParams } from "react-router-dom";
const StepsTrack = () => {
  // const stepOb = [
  //   {
  //     heading:"Pickup Location",
  //     para:"Delhi",
  //     arrive:true,
  //     icon:<RoomIcon/>
  //   },
  //   {
  //     heading:"Lohbab Desert",
  //     para:"Photo stop, Sandboarding, Dune bashing, Camel ride (45 minutes)",
  //     arrive:false,
  //     icon:<RoomIcon/>
  //   },
  //   {
  //     heading:"Ai Aweer",
  //     para:"Coffee, Tea, Dinner, Camp activities, BBQ, Local snacks, Traditional dance show, Welcome refreshments (2.5 hours)",
  //     arrive:false,
  //     icon:<LocalDiningIcon/>
  //   },
  //   {
  //     heading:"Jeep/Suv",
  //     para:"(45 Minutes)",
  //     arrive:false,
  //     icon:<DirectionsCarIcon/>
  //   },
  //   {
  //     heading:"Arrive back at:",
  //     para:"Dubai",
  //     arrive:false,
  //     // icon:<RoomIcon/>
  //   }
  // ]
  const {id}= useParams()
  const {data} = useExperienceQuery(id)
  return (
    <div className="step-container">
      <div className="step-left-col">
        <h4>Experience</h4>
        <p>Itinerary</p>
      </div>
      <div className="step-right-col">
        {data && data?.data?.map((item,index)=>{
          return(

            <StepCol key={item.heading+index} data={item} length={data?.data?.length} index={index}/>
          )
        })}
      </div>
    </div>
  );
};

export default StepsTrack;
