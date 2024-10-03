import axios from "axios";
import { BASE_URL } from '../utils/Constant';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addConnections } from '../utils/connectionSlice';
import CardConnection from "./CardConnection";

const Connection = () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((store) => store.connections);

  const showConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    showConnection();
  }, []);

  if (!userSelector || userSelector.length === 0) {
    return <p>No connections available.</p>;
  }

  return (
    <div className=" bg-base-100 flex flex-col items-center gap-6 my-5">
      {userSelector.map((user, index) => (
        <CardConnection key={index} user={user} />
      ))}
    </div>
  );
};

export default Connection;
