import React, { useEffect, useState } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
////styles
import "./mobileDetail.scss";
import { Rating } from "@mui/material";
import { CustomAccordion } from "./styled";
import { useDetailHighlightQuery } from "../../service/detailPage/Detail";
import { Link, useOutletContext, useParams } from "react-router-dom";
import BasicModal from "../../component/modal/Modal";
import EnquiryForm from "../../component/enquiryForm/EnquiryForm";
import Loader from "../../component/loader/Loader";
const MobileDetailPage = () => {
  const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
  const { id } = useParams();
  const [value, setValue] = useState(4);
  const { data,isLoading } = useDetailHighlightQuery(id);

  useEffect(() => {
    setValue(data?.data?.star);
  }, [data]);
  
  return (
    <>
       <BasicModal  Children={<EnquiryForm setOpen={setOpen} id={id} width={"100%"}/>}  setOpen={setOpen} open={open}/>
    <div className={`${isLoading ?"cen":""}`}>

      {  isLoading ?<Loader/> :
      <div className="detail-center-col">
        <div className="mobile-detail-top-banner" style={{backgroundImage:`url(${data?.data?.images})`}}>
          <div className="mobile-deatil-banner-head">
            <div className="head-left-col">
              <Link to={"/"}> 
                <div className="head-icon">
                  <KeyboardBackspaceOutlinedIcon />
                </div>
              </Link>
              <button>Buggy Tours</button>
            </div>
            <div className="head-right-col">
              <button onClick={()=>handleOpen()}>Book Now</button>
              <div className="head-icon">
                <ReplyOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="mobile-detail-banner-bottom-col">
            <ul>
              <li>
                <div className="icon">
                  <AccessAlarmsIcon />
                </div>
                <div className="text-b">Duration 6Hr.</div>
              </li>
              <li>
                <div className="icon">
                  <AirportShuttleOutlinedIcon />
                </div>
                <div className="text-b">Transfer Included</div>
              </li>
              <li>
                <div className="icon">
                  <LocalHotelOutlinedIcon />
                </div>
                <div className="text-b">Hotel Pickup</div>
              </li>
              <li>
                <div className="icon">
                  <RamenDiningOutlinedIcon />
                </div>
                <div className="text-b">Meals Included</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="detail-heading">
          <h2>{data?.data?.name}</h2>
        </div>
        <div className="price-rating-section">
          <p>AED {data?.data?.price}/-</p>
          <div>
            <div className="star-rating">
              <Rating
                size="small"
                name="simple-controlled"
                color="green"
                value={data?.data?.star || value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className="number-rating">
              <span>{data?.data?.star}</span> <p>Very Good</p>
              (44 VERIFIED RATINGS)
            </div>
          </div>
        </div>
        <hr />
        <div className="detail-description">
          {data?.data?.description}
          <span>SHOW MORE</span>
        </div>
        <div className="experience-section">
          <h2>Experience</h2>
          <CustomAccordion>
            <AccordionSummary
              expandIcon={null}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                // filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Highlights
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: data?.data?.highlights }}
              />
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <AccordionSummary
              expandIcon={null}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Inclusions
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: data?.data?.inclusions }}
              />
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <AccordionSummary
              expandIcon={null}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Need To Know
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: data?.data?.needToKnow }}
              />
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <AccordionSummary
              expandIcon={null}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                filter: "drop-shadow(0px 1px 8px rgba(0,0,0,0.09))",
                backgroundColor: "#ffffff",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "green",
                    borderRadius: "100px",
                  }}
                ></span>
                Cancel Policy
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                dangerouslySetInnerHTML={{ __html: data?.data?.canclePolicy }}
              />
            </AccordionDetails>
          </CustomAccordion>
        </div>
      </div>
      }
    </div>
    </>

  );
};

export default MobileDetailPage;
