import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import Head from "./head";
import Loader from "../loader";
import Error from "../error";
import Gallery from "./gallery";
import Airport from "./airport";
import Time from "./time";
import Aircraft from "./aircraft";

const Modal = () => {
  const dispatch = useDispatch();
  const { flightId, isLoading, error, info } = useSelector((store) => store.detail);

  useEffect(() => {
    dispatch(getDetail(flightId));
  }, [flightId]);

  return (
    flightId && (
      <div className="detail-modal">
        <div className="modal-inner">
          <Head info={info} />

          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
          ) : (
            info && (
              <div className="info-wrapper">
                <div className="info-box">
                  <div>
                    <Gallery data={info.aircraft.images} />
                    <Airport data={info.airport} />
                    <Time data={info.time} />
                  </div>

                  <Aircraft data={info.aircraft} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
