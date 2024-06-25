import React from "react";
import "./about.scss";
import CloseIcon from "@mui/icons-material/Close";

const TermsandConditions = ({ setOpen }) => {
  return (
    <div
      style={{
        marginTop: "71px",
        color: "white",
        borderRadius: "20px",
        padding: "10px",
        overflowY: "scroll",
      }}
    >
      <div className="about-main">
        <div
          className="cross"
          style={{
            color: "black",
            position: "absolute",
            right: "3%",
            top: "5%",
          }}
        >
          <CloseIcon onClick={() => setOpen()} />
        </div>
        <h2> Terms and Conditions </h2>
        <hr style={{ background: "black" }} />
        <p>
          We thank you for opting for our tour package(s). If you book your tour
          through our official website, then it is automatically implied that
          you’re agreeing with our stipulated terms and conditions. Kindly read
          out the below presented conditions as well as the procedures to ensure
          that you truly understand the applicable conditions on your trip. The
          below information consists of clear and precise trip services we will
          offer you with Tripatours. Further, all these below conditions are
          applicable on any of the trips you book with our official website.
          Some of those conditions are:
          <h3>
            <ol>
              <li>Price</li>
              <p>
                We can assure you that we provide the best economic trop costing
                with the facility of online booking to make it even more
                convenient. Unless we’ve stated or notified, all the quoted
                prices on the website are per person only and not for a whole
                group. Further, this cost does not include the tips a person
                will give to the drivers, tour guides, visa/passport fee, drinks
                or food, travel insurance, room service, accommodation, and
                laundry. Also, the rates of the trips can be changed without any
                prior notice. This might happen only in the case of any
                unforeseen circumstances, for instance, a rise in the airline
                ticket price, transport expenses, or hotel rates.
              </p>
              <li>Modes of Payment</li>
              <p>
                Generally, we accept the majority of the payment modes like
                Visa, MasterCard, American Express, Discover, and Diners. You
                can make your full trip payment through the credit card, though
                the person has to compulsorily provide their credit card number
                to make the transaction successful. Remember that this will be
                shown in your statement as a charge.
              </p>
              <li>Payment Confirmation</li>
              <p>
                After booking your tour with us, our specialized travel
                consultant will give you a slip of confirmation through an
                email. You can print it out to serve it as evidence to the
                service provider for redeeming your booked package. However,
                ensure that you have given the correct information related to
                your travel needs during the booking of the package.
              </p>
              <li>
                No-Show as well as Cancellation Policy
                <h4>4.1 Cancelling Policy</h4>
                <ul className="bullets">
                  <li>
                    Every tourist place, hotel, and activity has its policies
                    related to cancellation before you book any of the activity
                    with Tripatours, you must go through the cancellation policy
                    of that tour.
                  </li>
                  <li>
                    You can cancel the combo tours easily, but if you are
                    canceling any one tour out of the booked combo package, then
                    you will not be eligible for the combo offer. In a situation
                    like this, we will charge you with the Individual price, and
                    return any of the remaining amount.
                  </li>
                  <li>
                    The fees such as Tourist/ transit / Service Visa fees cannot
                    be claimed for the refund after the payment is completed on
                    our website.
                  </li>
                  <li>
                    During the booking ensure that all the combo tours have the
                    available status. Otherwise, you only have the chance to
                    enjoy the tours that are shown in the options.
                  </li>
                </ul>
                <h4>4.2 Not Showing Up</h4>
                <ul className="bullets">
                  <li>
                    If you fail to reach the pickup point at the time of the
                    tour, then no refund (neither its part nor full payment)
                    will be returned as a refund. The same condition is
                    applicable in the case of unused tickets for attraction and
                    sightseeing tours, car rental, or chauffeur-driven services.
                    Also, there is no such option of rescheduling the tours with
                    confirmation, transfers from and to airports, or any other
                    travel-related services.
                  </li>
                </ul>
              </li>
              <li>Process of Cancellation</li>
              <p>
                Before you proceed with the cancellation procedure, we will
                suggest you read all the cancellation policies stipulated by us
                on your selected tour package. If you want to cancel any of your
                tour reservations or the whole tour, then you must remember to
                send a notification to the Tripatours in writing. Once, we
                receive your cancellation request, we’ll either revert you
                through fax, email, or telephone to confirm the cancellation
                request and the fee for it. Our Tripatours are not to be held
                liable for any of the cancellations that haven’t been made by
                you or the ones that have not been confirmed from our end.
              </p>
              <li>Amendments in Itinerary</li>
              <p>
                If we are unable to book your accommodation in the hotel you
                prefer, we will take all the measures to provide you with any
                other similar alternative of the same budget. Also, the
                check-ins and the check-out policy depends upon the selected
                hotel. The Tripatours is not liable for the late check-ins and
                check-outs because usually hotels do not adhere to those due to
                their busy schedules.
              </p>
              <li>Accommodations Policy</li>
              <p>
                If we are unable to book your accommodation in the hotel you
                prefer, we will take all the measures to provide you with any
                other similar alternative of the same budget. Also, the
                check-ins and the check-out policy depends upon the selected
                hotel. The Tripatours is not liable for the late check-ins and
                check-outs because usually hotels do not adhere to those due to
                their busy schedules.
              </p>
              <li>Travel Insurance</li>
              <p>
                Tripatours cannot be blamed for any of the damages incurred as a
                result of an illness, injury, or accident, or for the loss of
                any personal belongings including the cancellation of the trip.
                We advise travelers to avail their purchased travel insurance
                policy for these unforeseen events. Insurance for personal
                coverage is highly recommended.{" "}
              </p>
              <li>Documents for Travel</li>
              <p>
                The traveler is responsible for carrying the needed documents
                for their tour, including their valid ID proof and passport as
                well. This is majorly important for people who are traveling
                from different countries. If somehow, you lose these documents
                then it is not liable for a refund.{" "}
              </p>
              <li>Website Usage Restrictions</li>
              <p>
                All the information given on the website including pictures,
                logos, images, details of the tour package, visiting spots,
                pricing information, and all the other things are proprietary to
                Tripatours. As per the agreement of this website usage, you
                agreed to not use this content or the website for your personal,
                commercial, illegitimate, and non-personal objectives.{" "}
              </p>
            </ol>
          </h3>
        </p>
      </div>
    </div>
  );
};

export default TermsandConditions;
