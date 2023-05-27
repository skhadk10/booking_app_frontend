import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import { read } from "../actions/Hotel";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const { Option } = Select;

const EditHotel = () => {
  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  // state
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: "",
    price: "",
    from: "",
    to: "",
    bed: "",
  });
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  const { hotelId } = useParams();

  useEffect(() => {
    loadSellerHotel(hotelId);
  }, []);

  const loadSellerHotel = async () => {
    const res = await read(hotelId);
    console.log(res);
  };
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Edit Hotel</h2>
      </div>
    </>
  );
};

export default EditHotel;
