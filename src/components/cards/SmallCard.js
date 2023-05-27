import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { diffDays } from "../../actions/Hotel";
import { currencyFormatter } from "../../actions/stripe";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const SmallCard = ({
  h,
  handleHotelDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card mb-3" style={{ display: "block" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            {h.image && h.image.contentType ? (
              <img
                src={`${process.env.REACT_APP_API}/hotel/image/${h._id}`}
                alt="default hotel image"
                className="card-image img img-fluid"
              />
            ) : (
              <img
                src="https://placeholder.com/900x500.png?text=MERN+booking"
                alt="default hotel image"
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {h.title}
                <span className="text-primary">
                  {currencyFormatter({
                    amount: h.price,
                    currency: "usd",
                  })}
                </span>
              </h3>
              <p className="alert alert-info">{h.location}</p>
              <p className="card-text">{`${h.content.substring(1, 200)}...`}</p>
              <p className="card-text">
                <span className="float-right text-primary">
                  for {diffDays(h.from, h.to)}
                  {diffDays(h.from, h.to) <= 1 ? " day" : " days"}
                </span>{" "}
              </p>
              <p className="card-text">{h.bed}</p>
              <p className="card-text">
                Available from {new Date(h.from).toLocaleDateString()}
              </p>

              <div className="d-flex justify-content-between h4">
                {showViewMoreButton && (
                  <>
                    <button
                      onClick={() => navigate(`/hotel/${h._id}`)}
                      className="btn btn-primary"
                    >
                      Show more
                    </button>
                  </>
                )}
                {owner && (
                  <>
                    <Link to={`/hotel/edit/${h._id}`}>
                      <EditOutlined className="text-warning1" />
                    </Link>
                    <DeleteOutlined
                      onClick={() => handleHotelDelete(h._id)}
                      className="text-danger"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SmallCard;
