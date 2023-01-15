import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const StripeCallback = ({ history }) => {
  return (
    <div className="d-flex justify-content-center p-5">
      <LoadingOutlined className="display-1 p-5 text-danger" />
    </div>
  );
};

export default StripeCallback;
