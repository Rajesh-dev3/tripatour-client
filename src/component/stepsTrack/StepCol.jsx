import RoomIcon from '@mui/icons-material/Room';

const StepCol = ({data,length,index}) => {
  const isLastIndex = index === length ;
  console.log(length)
  const isSecondLastIndex = index === length - 1;
  const hasArrived = index == 0;
  const circleCoverClass = isLastIndex
  ? "bg-white"
  : hasArrived
    ? "bg-white"
    : "bg-transparent";
    const stepBarClass = isSecondLastIndex ? "step-bar-bg" : "step-bar";
  return (
    <div className="step-col">
      {stepBarClass == "step-bar-bg"?
      !isLastIndex && (
        <div style={{display:"flex",position:"absolute",width:"100%",justifyContent:"space-between",  top: "8px",
        left: "3px"}}>
          <div className={stepBarClass}></div>
          <div className={stepBarClass}></div>
          <div className={stepBarClass}></div>
          <div className={stepBarClass}></div>
          <div className={stepBarClass}></div>
          <div className={stepBarClass}></div>
          <div className={stepBarClass}></div>
        </div>
        ):!isLastIndex && (
          <div className={stepBarClass}></div>
        )
      }
   
  <div className={`step-circle-cover ${circleCoverClass}`}>
    <div className="step-circle"><RoomIcon/></div>
  </div>
  <div className="step-col-desc">
    <ul>
      <li className="step-col-desc-list-heading">{data?.name}</li>
      <li className="step-col-desc-list">{data?.description}</li>
    </ul>
  </div>
</div>
  )
}

export default StepCol