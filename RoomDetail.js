// import React from "react";
// import hero5 from '../images/hero-5.jpg'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"; 
// import { faInstagram } from "@fortawesome/free-brands-svg-icons"; 
// import {
//   faWifi,
//   faShieldAlt,
//   faPhone,
//   faBed, 
//   faUserFriends,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const RoomDetails = () => {
//   return (
//     <div>
//     <div className="room-details">
//       <div className="slideshow-container">
//         <img src={hero5} alt="Room Image" className="room-image" />
//       </div>
//       <div className="room-container">
//         <h2>Book for a room at our Hostel Bookiing App Today</h2>
//         <p>
//           Experience Fantastic Benefits and Obtain Better Rates When You Make a
//           Direct Booking on Our Official Website
//         </p>

//         <div>
//         <h2> Room Amenities</h2>
//         </div>

//         <div className="amenities">
//         <div className="amenity">
//           <FontAwesomeIcon icon={faWifi} />
//           <span>Free WiFi</span>
//         </div>
//         <div className="amenity">
//           <FontAwesomeIcon icon={faShieldAlt} />
//           <span>Security 24/7</span>
//         </div>
//         <div className="amenity">
//           <FontAwesomeIcon icon={faPhone} />
//           <span>Contact: +123-456-7890</span>
//         </div>
//         <div className="room-type">
//           <FontAwesomeIcon icon={faBed} />
//           <span>Room Type: Single</span>
//         </div>
//         <div className="social-media">
//           <FontAwesomeIcon icon={faUserFriends} />
//           <span>www.nanahostel.com</span>
//         </div>
//         <div className="amenity">
//           <FontAwesomeIcon icon={faWhatsapp} />
//           <span>+123-456-7890 </span>
//         </div>
//         <div className="amenity">
//           <FontAwesomeIcon icon={faFacebook} />
//           <span>Nana Hostel </span>
//         </div>
//         <div className="amenity">
//           <FontAwesomeIcon icon={faInstagram} />
//           <span>Nana Hostel </span>
//         </div>
//       </div>
//       <div className="emptyDiv"></div>
//       <div>
//        <Link to='/booking'> <button className="booknowButton">Book Now!</button> </Link>
//       </div>
//       </div>
      
//     </div>
//     <div>
//       <h2 style={{color: 'orange', fontWeight: '700', fontSize: '20', textAlign: 'center'}}>View Hostel Location</h2>
//     <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.994002901523!2d32.5711991!3d0.33896155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb14292435e3%3A0xf74918dbc6cfae87!2sKann%20Hostel!5e0!3m2!1sen!2sug!4v1699453420195!5m2!1sen!2sug"
//         width={1350}
//         height={450}
//         style={{ border: 0}}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
// />

//     </div>
//     </div>
//   );
// };

// export default RoomDetails;


// import React from "react";
// import hero5 from '../images/hero-5.jpg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faWifi, faShieldAlt, faPhone, faBed, faUserFriends } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const RoomDetails = () => {
//   return (
//     <div>
//       <div className="room-details">
//         <div className="slideshow-container">
//           <img src={hero5} alt="Room Image" className="room-image" />
//         </div>
//         <div className="room-container">
//           <h2>Book for a room at our Hostel Booking App Today</h2>
//           <p>
//             Experience Fantastic Benefits and Obtain Better Rates When You Make
//             a Direct Booking on Our Official Website
//           </p>

//           <div>
//             <h2>Room Amenities</h2>
//           </div>

//           <table className="amenities-table">
//             <tbody>
//               <tr>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faWifi} />
//                   <span>Free WiFi</span>
//                 </td>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faShieldAlt} />
//                   <span>Security 24/7</span>
//                 </td>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faPhone} />
//                   <span>Contact: +123-456-7890</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="room-type">
//                   <FontAwesomeIcon icon={faBed} />
//                   <span>Room Type: Single</span>
//                 </td>
//                 <td className="social-media">
//                   <FontAwesomeIcon icon={faUserFriends} />
//                   <span>www.nanahostel.com</span>
//                 </td>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faWhatsapp} />
//                   <span>+123-456-7890</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faFacebook} />
//                   <span>Nana Hostel</span>
//                 </td>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faInstagram} />
//                   <span>Nana Hostel</span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="emptyDiv"></div>
//           <div>
//             <Link to="/booking">
//               <button className="booknowButton">Book Now!</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div>
//         <h2 style={{ color: 'orange', fontWeight: '700', fontSize: '20', textAlign: 'center' }}>View Hostel Location</h2>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.994002901523!2d32.5711991!3d0.33896155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb14292435e3%3A0xf74918dbc6cfae87!2sKann%20Hostel!5e0!3m2!1sen!2sug!4v1699453420195!5m2!1sen!2sug"
//           width={1350}
//           height={450}
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;





// RoomDetails.js

// import React from 'react';
// import hero5 from '../images/hero-5.jpg'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faWifi, faShieldAlt, faPhone, faBed, faUserFriends } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const RoomDetails = ({ location }) => {
//   // const { amenities } = location.state || {};
//   const amenities = location?.state?.amenities || {};
//   // const RoomDetails = (props) => {
//   // const amenities = props.location.state.amenities || {};

//   return (
//     <div>
//       <div className="room-details">
//           <div className="slideshow-container">
//             <img src={hero5} alt="Room Image" className="room-image" />
//           </div>
//         <div className="room-container">
//           <h2>Book for a room at our Hostel Booking App Today</h2>
//           <p>
//             Experience Fantastic Benefits and Obtain Better Rates When You Make
//             a Direct Booking on Our Official Website
//           </p>
//           <div>
//             <h2>Room Amenities</h2>
//           </div>
//           <table className="amenities-table">
//             <tbody>
//               <tr>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faWifi} />
//                   <span>{amenities?.wifi}</span>
//                 </td>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faShieldAlt} />
//                   <span>{amenities?.security}</span>
//                 </td>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faPhone} />
//                   <span>{amenities?.phone}</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="room-type">
//                   <FontAwesomeIcon icon={faBed} />
//                   <span>{amenities?.roomType}</span>
//                 </td>
//                 <td className="social-media">
//                   <FontAwesomeIcon icon={faUserFriends} />
//                   <span>{amenities?.socialMedia}</span>
//                 </td>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faWhatsapp} />
//                   <span>{amenities?.whatsapp}</span>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faFacebook} />
//                   <span>{amenities?.facebook}</span>
//                 </td>
//                 <td className="amenity">
//                   <FontAwesomeIcon icon={faInstagram} />
//                   <span>{amenities?.instagram}</span>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="emptyDiv"></div>
//           <div>
//             <Link to="/booking">
//               <button className="booknowButton">Book Now!</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div>
//         <h2 style={{ color: 'orange', fontWeight: '700', fontSize: '20', textAlign: 'center' }}>View Hostel Location</h2>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.994002901523!2d32.5711991!3d0.33896155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb14292435e3%3A0xf74918dbc6cfae87!2sKann%20Hostel!5e0!3m2!1sen!2sug!4v1699453420195!5m2!1sen!2sug"
//           width={1350}
//           height={450}
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;




import React from 'react';
import hero5 from '../images/hero-5.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faShieldAlt, faPhone, faBed, faUserFriends, faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const dummyhostels = [
  { id: 1, name: 'Hostel A', location: 'City Center', price: '$50/night', phone: '+123-456-7890',shuttle: '2', wifi: 'available', security: '24/7', images: ['r1.png', 'r2.png', 'r1.png'] },
  { id: 2, name: 'Hostel B', location: 'Near Beach', price: '$45/night', phone: '+123-456-7890',shuttle: '1', wifi: 'available', security: '24/7', images: ['r2.png', 'r3.png', 'r2.png'] },
  { id: 3, name: 'Hostel C', location: 'Downtown', price: '$55/night', phone: '+123-456-7890',shuttle: 'N/A', wifi: 'N/A', security: '24/7', images: ['r3.png', 'r2.png', 'r3.png'] },
  { id: 4, name: 'Hostel D', location: 'Mountain View', price: '$60/night', phone: '+123-456-7890',shuttle: '1', wifi: 'available', security: 'N/A', images: ['r1.png', 'r2.png', 'r1.png'] },
  { id: 5, name: 'Hostel E', location: 'Riverside', price: '$48/night', phone: '+123-456-7890',shuttle: '2', wifi: 'available', security: '24/7', images: ['r2.png', 'r3.png', 'r2.png'] },
  { id: 6, name: 'Hostel F', location: 'Old Town', price: '$52/night', phone: '+123-456-7890',shuttle: '1', wifi: 'N/A', security: '24/7', images: ['r3.png', 'r2.png', 'r3.png'] },
  { id: 7, name: 'Hostel G', location: 'Lakefront', price: '$58/night', phone: '+123-456-7890',shuttle: '1', wifi: 'available', security: 'N/A', images: ['r2.png', 'r3.png', 'r1.png'] },
  { id: 8, name: 'Hostel H', location: 'Countryside', price: '$56/night', phone: '+123-456-7890',shuttle: 'N/A', wifi: 'available', security: '24/7', images: ['r2.png', 'r2.png', 'r1.png'] },
  { id: 9, name: 'Hostel I', location: 'Seaside', price: '$62/night', phone: '+123-456-7890',shuttle: '1', wifi: 'N/A', security: 'N/A', images: ['r3.png', 'r2.png', 'r3.png'] },
];

const RoomDetails = ({ location }) => {
  
  const hostel = location?.state?.hostel || {};
  console.log(hostel)

  return (
    <div>
      <div className="room-details">
        <div className="slideshow-container">
          <img src={hero5} alt="Room Image" className="room-image" />
        </div>
        <div className="room-container">
          <h2>Book for a room at our Hostel Booking App Today</h2>
          <p>
            Experience Fantastic Benefits and Obtain Better Rates When You Make
            a Direct Booking on Our Official Website
          </p>
          <div>
            <h2>Room Details</h2>
          </div>
          <table className="student-table">
            <tbody>
              <tr>
                <td>ID: {hostel?.id}</td>
              </tr>
              <tr>
                <td>Name: {hostel?.name}</td>
              </tr>
              <tr>
                <td>Location: {hostel?.location}</td>
              </tr>
              <tr>
                <td>Price: {hostel?.price}</td>
              </tr>
              <tr>
                <td>Contact <FontAwesomeIcon icon={faPhone} />: {hostel?.phone}</td>
              </tr>
              <tr>
                <td>Shuttle: {hostel?.shuttle}</td>
              </tr>
              <tr>
                <td>Wifi <FontAwesomeIcon icon={faWifi}/>: {hostel?.wifi}</td>
              </tr>
              <tr>
                <td>Security: {hostel?.security}</td>
              </tr>
            </tbody>
          </table>
          <div className="emptyDiv"></div>
          <div>
            <Link to="/booking">
              <button className="booknowButton">Book Now!</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ color: 'orange', fontWeight: '700', fontSize: '20', textAlign: 'center' }}>View Hostel Location</h2>
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.994002901523!2d32.5711991!3d0.33896155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb14292435e3%3A0xf74918dbc6cfae87!2sKann%20Hostel!5e0!3m2!1sen!2sug!4v1699453420195!5m2!1sen!2sug"
          width={1350}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         />
      </div>
    </div>
  );
};

export default RoomDetails;

