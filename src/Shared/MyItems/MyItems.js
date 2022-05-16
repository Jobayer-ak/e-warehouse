import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useItems from "../../hooks/useItems";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [items, setItems] = useItems();
  const [user] = useAuthState(auth);

  // console.log(items.email);

  return (
    <div className="container">
      <h2 className="my-4">My Items</h2>

      {items.map((item) => (
        <MyItem key={item._id} item={item}></MyItem>
      ))}
    </div>
  );
};

export default MyItems;

// import React, { useEffect, useState } from "react";
// import auth from "../../firebase.init";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import axiosPrivate from "../../axiosPrivate";
// import { signOut } from "firebase/auth";

// const MyItems = () => {
//   // hooks
//   const [user] = useAuthState(auth);
//   const [myitems, setMyitems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getItems = async () => {
//       const email = user?.email;
//       const url = `http://localhost:3000/myitems?email=${email}`;

//       try {
//         const { data } = await axiosPrivate.get(url);
//         setMyitems(data);
//       } catch (error) {
//         if (error.response.status === 401 || error.response.status === 403) {
//           signOut(auth);
//           navigate("/login");
//         }
//       }
//     };
//   }, [user]);
//   return (
//     <div className="w-50 mx-auto">
//       <h2>My Items: {myitems.length}</h2>
//       {myitems.map((myitem) => (
//         <div key={myitem._id}>
//           <p>
//             {myitem.email}: {myitem.name}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyItems;
