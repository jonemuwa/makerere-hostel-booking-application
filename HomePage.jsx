// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// // import Header from './Header';
// // import Footer from './Footer';

// const hostels = [
//   { id: 1, name: 'Hostel A', location: 'City Center', price: '$50/night', images: ['r1.png', 'r2.png', 'r1.png'] },
//   { id: 2, name: 'Hostel B', location: 'Near Beach', price: '$45/night', images: ['r2.png', 'r3.png', 'r2.png'] },
//   { id: 3, name: 'Hostel C', location: 'Downtown', price: '$55/night', images: ['r3.png', 'r2.png', 'r3.png'] },
//   { id: 4, name: 'Hostel D', location: 'Mountain View', price: '$60/night', images: ['r1.png', 'r2.png', 'r1.png'] },
//   { id: 5, name: 'Hostel E', location: 'Riverside', price: '$48/night', images: ['r2.png', 'r3.png', 'r2.png'] },
//   { id: 6, name: 'Hostel F', location: 'Old Town', price: '$52/night', images: ['r3.png', 'r2.png', 'r3.png'] },
//   { id: 7, name: 'Hostel G', location: 'Lakefront', price: '$58/night', images: ['r2.png', 'r3.png', 'r1.png'] },
//   { id: 8, name: 'Hostel H', location: 'Countryside', price: '$56/night', images: ['r2.png', 'r2.png', 'r1.png'] },
//   { id: 9, name: 'Hostel I', location: 'Seaside', price: '$62/night', images: ['r3.png', 'r2.png', 'r3.png'] },
  
// ];

// const HomePage = () => {
//   const [currentImageIndex, setImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex(prevIndex => (prevIndex + 1) % 3); // Assuming each hostel has 3 images
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   return (
//     <div>
//       {/* <Header /> */}
//       <h2 style={{color: 'orange', fontWeight: '800', textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', marginTop: '1rem'}}>Choose a Hostel</h2>
//       <div className="card-grid ">
//         {hostels.map(hostel => (
//           <div className='card' key={hostel.id}>
//             <img src={process.env.PUBLIC_URL + '/' + hostel.images[currentImageIndex]} alt={`Hostel ${hostel.name}`} className='card-img-top' />
//             <div className="card-body">
//               <h5 className='card-title'>{hostel.name}</h5>
//               <p className='card-text'>Easy Easy Easy Easy Easy!</p>
//               <p><span className="locate">Location:</span> {hostel.location}</p>
//               <p className='card-title'>Price: {hostel.price}</p>
//               <div className='row'>
//                 <div className='col-6'>
//                   <Link to={`/book/${hostel.id}`}>
//                   <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link to='/rooms'>Book Now</Link></button>
//                   </Link>
//                 </div>
//                 <div className='col-6'>
//                   <div className='rating'>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default HomePage;



// HomePage.js

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// const hostels = [
//   { id: 1, name: 'Hostel A', location: 'City Center', price: '$50/night', images: ['r1.png', 'r2.png', 'r1.png'] },
//   { id: 2, name: 'Hostel B', location: 'Near Beach', price: '$45/night', images: ['r2.png', 'r3.png', 'r2.png'] },
//   { id: 3, name: 'Hostel C', location: 'Downtown', price: '$55/night', images: ['r3.png', 'r2.png', 'r3.png'] },
//   { id: 4, name: 'Hostel D', location: 'Mountain View', price: '$60/night', images: ['r1.png', 'r2.png', 'r1.png'] },
//   { id: 5, name: 'Hostel E', location: 'Riverside', price: '$48/night', images: ['r2.png', 'r3.png', 'r2.png'] },
//   { id: 6, name: 'Hostel F', location: 'Old Town', price: '$52/night', images: ['r3.png', 'r2.png', 'r3.png'] },
//   { id: 7, name: 'Hostel G', location: 'Lakefront', price: '$58/night', images: ['r2.png', 'r3.png', 'r1.png'] },
//   { id: 8, name: 'Hostel H', location: 'Countryside', price: '$56/night', images: ['r2.png', 'r2.png', 'r1.png'] },
//   { id: 9, name: 'Hostel I', location: 'Seaside', price: '$62/night', images: ['r3.png', 'r2.png', 'r3.png'] },
// ];

// const amenitiesData = {
//   "1": {
//     "wifi": "Free WiFi",
//     "security": "Security 24/7",
//     "phone": "Contact: +123-456-7890",
//     "roomType": "Room Type: Single",
//     "socialMedia": "www.nanahostel.com",
//     "whatsapp": "+123-456-7890",
//     "facebook": "Nana Hostel",
//     "instagram": "Nana Hostel"
//   },
//   "2": {
//     "wifi": "Free WiFi",
//     "security": "Security 24/7",
//     "phone": "Contact: 123-7243-3450",
//     "roomType": "Room Type: Double",
//     "socialMedia": "www.olympiahostel.com",
//     "whatsapp": "+123-7243-3450",
//     "facebook": "Olympia Hostel",
//     "instagram": "Olympia Hostel"
//   },
//   "3": {
//     "wifi": "Free WiFi",
//     "security": "None",
//     "phone": "Contact: +256 700 786535",
//     "roomType": "Room Type: Double",
//     "socialMedia": "www.jj.com",
//     "whatsapp": "+256 700 786535",
//     "facebook": "JJ Hostel",
//     "instagram": "JJ Hostel"
//   },
//   "4": {
//     "wifi": "Free WiFi",
//     "security": "Security 24/7",
//     "phone": "Contact: +256-7896-7890",
//     "roomType": "Room Type: Single",
//     "socialMedia": "www.dreamWorld .com",
//     "whatsapp": "+256-7896-7890",
//     "facebook": "DreamWorld  Hostel",
//     "instagram": "DreamWorld Hostel"
//   },
//   // Add entries for other hostels as needed
// };

// const HomePage = () => {
//   const [currentImageIndex, setImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex(prevIndex => (prevIndex + 1) % 3);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h2 style={{color: 'orange', fontWeight: '800', textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', marginTop: '1rem'}}>Choose a Hostel</h2>
//       <div className="card-grid">
//         {hostels.map(hostel => (
//           <div className='card' key={hostel.id}>
//             <img src={process.env.PUBLIC_URL + '/' + hostel.images[currentImageIndex]} alt={`Hostel ${hostel.name}`} className='card-img-top' />
//             <div className="card-body">
//               <h5 className='card-title'>{hostel.name}</h5>
//               <p className='card-text'>Easy Easy Easy Easy Easy!</p>
//               <p><span className="locate">Location:</span> {hostel.location}</p>
//               <p className='card-title'>Price: {hostel.price}</p>
//               <div className='row'>
//                 <div className='col-6'>
//                   <Link to={`/book/${hostel.id}`}>
//                     <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
//                       <Link to={{
//                         pathname: '/rooms',
//                         state: { amenities: amenitiesData[hostel.id] }
//                       }}>Book Now</Link>
//                     </button>
//                   </Link>
//                 </div>
//                 <div className='col-6'>
//                   <div className='rating'>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;





// HomePage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

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


const HomePage = () => {
  const [currentImageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 style={{color: 'orange', fontWeight: '800', textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', marginTop: '1rem'}}>Choose a Hostel</h2>
      <div className="card-grid">
        {dummyhostels.map(hostel => (
          <div className='card' key={hostel.id}>
            <img src={process.env.PUBLIC_URL + '/' + hostel.images[currentImageIndex]} alt={`Hostel ${hostel.name}`} className='card-img-top' />
            <div className="card-body">
              <h5 className='card-title'>{hostel.name}</h5>
              <p className='card-text'>Easy Easy Easy Easy Easy!</p>
              <p><span className="locate">Location:</span> {hostel.location}</p>
              <p className='card-title'>Price: {hostel.price}</p>
              <div className='row'>
                <div className='col-6'>
                  <Link to={{
                    pathname: `/book/${hostel.id}`,
                    state: { hostel }
                  }}>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                      Book Now
                    </button>
                  </Link>

                </div>
                <div className='col-6'>
                  <div className='rating'>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
