import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {

  //click on menu button dispatched an action which calls the reducer function "toggleMenu() which updates the state of our component"
 const dispatch = useDispatch();

 const toggleMenuHandler=()=>{
  dispatch(toggleMenu())
 }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">

      {/* menu section */}
      <div className="flex h-8 col-span-1 cursor-pointer">
        <img
        onClick={()=>toggleMenuHandler()} 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="menu"
        />
 <img className="mx-5"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="youtube-logo"
        />

      </div>


      {/* search section  */}
      <div className="col-span-10 px-10"> 
        <input className="w-1/2 border border-gray-400 rounded-l-full p-2" type="text" />
        <button className="border border-gray-400 bg-gray-100 rounded-r-full px-5 py-2">🔍</button>
      </div>

      
      {/* user logo section  */}
      <div>
        <img className="h-8 col-span-1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc_TaWjbx-6Sfcq3nBfaAMTqMurH3xJ0JO2hoc6wvWQ6hFYkhxW1wxSd_DQwwSn7cAfk&usqp=CAU"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
