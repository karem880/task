import {
  FaSearch,
  FaGlobe,
  FaChargingStation,
  FaRegFrown,
  FaArrowRight,
  FaBolt,
  FaStar,
  FaRegStar,
  FaClock,

  FaPlayCircle,
  FaCircleNotch
} from "react-icons/fa";
// import {  } from 'react-icons/md';

import Navbar from "../component/navbar";

import Slider from "react-slick";

function Home() {


  const slides = [{ img: "./assets/camel.jpeg" }, { img: "./assets/camel.jpeg"}, { img: "./assets/camel.jpeg" }, { img: "./assets/camel.jpeg" }, { img: "./assets/camel.jpeg"}]

  return (
    <>
      <Navbar />

      <section
        className="h-[80vh] mt-10 md:mt-[100px] flex flex-col items-center justify- w-full relative"
        style={{
          backgroundImage: "url(./assets/old.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundPositionY: "center",
          fontFamily: "monospace",
        }}
      >
        <div className="w-full h-full absolute top-0 right-0 bg-black opacity-30 z-[0]"></div>
        <h1 className="text-3xl md:text-[50px] font-extrabold text-center text-white w-full mt-[150px] md:mt-[250px] z-10">
          Find Next Place To Visit
        </h1>
        <h1 className="text-sm md:text-[20px] font-extrabold text-center text-white w-full mt-3 z-10 ">
          Discover Amazing Places at exclusive deals
        </h1>

        <div className="w-[80%] z-10 mx-auto flex md:flex-row flex-col items-center justify-center gap-[1px] mt-10">
          <div className="w-full md:w-[25%] h-[80px] bg-white flex justify-around p-3 items-center border border-gray-400 text-gray-700 rounded-md">
            <input
              className="w-full outline-none  h-[80px] rounded-md border border-none bg-transparent text-xl text-gray-700  font-extrabold"
              type="search"
              placeholder="Search city"
            />
            <FaSearch className="w-[10%]" />
          </div>

          <select className="w-full outline-none  md:w-[25%] h-[80px] border-none rounded-md border border-gray-400 bg-white text-lg text-gray-500 px-4 font-extrabold mb-0">
            <option value="" disabled selected>
              Select country
            </option>
            <option value="egypt">Egypt</option>
            <option value="usa">USA</option>
            <option value="iraq">Iraq</option>
          </select>

          <select className="w-full outline-none  md:w-[25%] h-[80px] border-none rounded-md border border-gray-400 bg-white text-lg text-gray-500 px-4 font-extrabold mb-0">
            <option value="" disabled selected>
              Select city
            </option>
            <option value="giza">Giza</option>
            <option value="qena">Qena</option>
            <option value="dekernis">Dekernis</option>
          </select>

          <button className="w-full md:w-[25%] h-[80px] rounded-md border-none flex items-center justify-center bg-orange-600 text-xl text-white font-extrabold mt-0">
            Search
          </button>
        </div>
      </section>

      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-[80%] bottom-[-40px]  text-white bg-gradient-to-b from-red-400 via-orange-500  to-red-400 rounded-lg border-none h-[200px] overflow-hidden ">
        <div className="w-[90%] mx-auto  h-full flex justify-around items-center p-5 ">
          <div className="w-[33%] h-full flex justify-center gap-5 items-center p-5 ">
            <FaGlobe className="text-4xl font-extrabold text-start " />
            <div className="w-[80%]">
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipe tenetur ab
                consequatur, aliquam debitis quasi.
              </p>
            </div>
          </div>

          <div className="w-[33%] h-full flex justify-center gap-5 items-center p-5  ">
            <FaChargingStation className=" text-4xl font-extrabold text-start " />
            <div className="w-[80%]">
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>Lorem ips magni repudiandae amet bquam debitis quasi.</p>
            </div>
          </div>

          <div className="w-[33%] h-full flex justify-center gap-5 items-center p-5  ">
            <FaRegFrown className=" text-4xl font-extrabold text-start " />
            <div className="w-[80%]">
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>enetur ab consequatur, aliquam debitis quasi.</p>
            </div>
          </div>
        </div>
      </div>

      <section className=" flex-wrap mt-52  h-full">
        <h1
          className="text-center dark:text-white text-4xl font-extrabold"
          style={{ fontFamily: "monospace" }}
        >
          popular places
        </h1>
        <h1
          className="text-center text-lg font-extrabold text-orange-500 w-[200px] flex justify-around mx-auto items-center"
          style={{ fontFamily: "monospace" }}
        >
          <p>show this places</p> <FaArrowRight />{" "}
        </h1>

        <div className=" w-full mt-14">
          <div className="flex gap-5 overflow-hidden flex-col md:flex-row w-[80%] mx-auto">
            <div className="w-full md:w-[66%] relative">
              <span className="absolute top-0 md:top-5 right-2 md:right-10 rounded-full bg-orange-600 flex items-center justify-center w-[30px] h-[30px] md:w-[100px] md:h-[40px] text-lg md:rounded-md text-white">
                -50
              </span>
              <span className="absolute bottom-0 md:bottom-0 right-0 md:right-0  opacity-0 hover:opacity-50 bg-black flex items-center justify-center w-full h-full   text-xl  text-white">
                cairo
              </span>
              <img src="./assets/old.jpg" className="w-full " alt="" />
            </div>

            <div className="w-full md:w-[33%] relative">
              <span className="absolute top-0 md:top-5 right-2 md:right-10 rounded-full bg-orange-600 flex items-center justify-center w-[30px] h-[30px] md:w-[100px] md:h-[40px] text-lg md:rounded-md text-white">
                -50
              </span>
              <span className="absolute bottom-0 md:bottom-0 right-0 md:right-0  opacity-0 hover:opacity-50 bg-black flex items-center justify-center w-full h-full   text-xl  text-white">
                cairo
              </span>
              <img
                src="./assets/place2.jpg"
                className="w-full h-full "
                alt=""
              />
            </div>
          </div>

          <div className="flex gap-5 overflow-hidden flex-col md:flex-row w-[80%] mx-auto mt-8">
            <div className="w-full md:w-[33%] relative">
              <span className="absolute top-0 md:top-5 right-2 md:right-10 rounded-full bg-orange-600 flex items-center justify-center w-[30px] h-[30px] md:w-[100px] md:h-[40px] text-lg md:rounded-md text-white">
                -50
              </span>
              <span className="absolute bottom-0 md:bottom-0 right-0 md:right-0  opacity-0 hover:opacity-50 bg-black flex items-center justify-center w-full h-full   text-xl  text-white">
                cairo
              </span>
              <img
                src="./assets/place3.jpeg"
                className="w-full h-full "
                alt=""
              />
            </div>
            <div className="w-full md:w-[33%] relative">
              <span className="absolute top-0 md:top-5 right-2 md:right-10 rounded-full bg-orange-600 flex items-center justify-center w-[30px] h-[30px] md:w-[100px] md:h-[40px] text-lg md:rounded-md text-white">
                -50
              </span>
              <span className="absolute bottom-0 md:bottom-0 right-0 md:right-0  opacity-0 hover:opacity-50 bg-black flex items-center justify-center w-full h-full   text-xl  text-white">
                cairo
              </span>
              <img
                src="./assets/place4.jpeg"
                className="w-full "
                alt=""
              />
            </div>
            <div className="w-full md:w-[33%] relative">
              <span className="absolute top-0 md:top-5 right-2 md:right-10 rounded-full bg-orange-600 flex items-center justify-center w-[30px] h-[30px] md:w-[100px] md:h-[40px] text-lg md:rounded-md text-white">
                -50
              </span>
              <span className="absolute bottom-0 md:bottom-0 right-0 md:right-0  opacity-0 hover:opacity-50 bg-black flex items-center justify-center w-full h-full   text-xl  text-white">
                cairo
              </span>
              <img
                src="./assets/place5.jpeg"
                className="w-full "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" flex-wrap mt-52  h-full">
        <h1
          className="text-center dark:text-white text-4xl font-extrabold"
          style={{ fontFamily: "monospace" }}
        >
          {" "}
          popular Tours
        </h1>
        <h1
          className="text-center text-lg font-extrabold text-orange-500 w-[200px] flex justify-around mx-auto items-center"
          style={{ fontFamily: "monospace" }}
        >
          <p>View all tours</p> <FaArrowRight />{" "}
        </h1>
      </section>

      <section className=" flex-wrap flex flex-col md:flex-row  w-[95%] mx-auto items-center justify-center gap-5 mt-24">
        <div className="relative flex flex-col w-[90%] md:w-[400px] rounded-md overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] object-cover  ">
          <span className="absolute top-[45%] w-[150px] h-[40px] rounded-sm left-11 bg-orange-500 text-white flex justify-center items-center text-lg">
            $3543543
          </span>
          <img
            src="./assets/place2.jpg"
            className="w-full h-[50%]"
            alt=""
          />
          <h1
            className="text-center text-lg font-extrabold w-full flex justify-center gap-3 mx-auto items-center mt-14 ml-0"
            style={{ fontFamily: "monospace" }}
          >
            <FaBolt className="text-orange-500 text-4xl" />{" "}
            <h1 className="text-start text-lg font-extrabold">
              ROMA, MOROCCO, SHARM EL SHEIKH
            </h1>
          </h1>
          <div className="flex justify-between items-center px-4 w-[90%] mx-auto mt-5">
            <p className="flex justify-center items-center gap-2 ">
              {" "}
              <FaClock color="red" /> 10 AM{" "}
            </p>
            <p className="text-gray-700">(the trip was ended)</p>
          </div>

          <div className="flex justify-around items-center gap-3 mt-3 w-[99%] mx-auto lg:mt-10 ">
            <div className="flex gap-1 items-center">
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaRegStar className="text-gray-500 text-xl" />
              <span className="text-gray-400 text-sm"> (the rate)</span>
            </div>
            <span className=" text-orange-500 font-extrabold">
              Rating:4.0
            </span>
          </div>
        </div>

        <div className="relative flex flex-col w-[90%] md:w-[400px] rounded-md overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] object-cover  ">
          <span className="absolute top-[45%] w-[150px] h-[40px] rounded-sm left-11 bg-orange-500 text-white flex justify-center items-center text-lg">
            $3543543
          </span>
          <img
            src="./assets/place1.jpeg"
            className="w-full h-[50%]"
            alt=""
          />
          <h1
            className="text-center text-lg font-extrabold w-full flex justify-center gap-3 mx-auto items-center mt-14 ml-0"
            style={{ fontFamily: "monospace" }}
          >
            <FaBolt className="text-orange-500 text-4xl" />{" "}
            <h1 className="text-start text-lg font-extrabold">
              ROMA, MOROCCO, SHARM EL SHEIKH
            </h1>
          </h1>
          <div className="flex justify-between items-center px-4 w-[90%] mx-auto mt-5">
            <p className="flex justify-center items-center gap-2 ">
              {" "}
              <FaClock color="orange" /> 10 AM{" "}
            </p>
            <p className="text-gray-700">(at this time)</p>
          </div>

          <div className="flex justify-between items-center px-4 mt-3 w-[99%] mx-auto lg:mt-10  ">
            <div className="flex gap-1 items-center">
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaRegStar className="text-gray-500 text-xl" />
              <FaRegStar className="text-gray-500 text-xl" />
              <span className="text-gray-400 text-sm"> (the rate)</span>
            </div>
            <span className=" text-orange-500 font-extrabold">
              Rating: 3.0
            </span>
          </div>
        </div>

        <div className="relative flex flex-col w-[90%] md:w-[400px] rounded-md overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] object-cover  ">
          <span className="absolute top-[45%] w-[150px] h-[40px] rounded-sm left-11 bg-orange-500 text-white flex justify-center items-center text-lg">
            $3543543
          </span>
          <img
            src="./assets/place5.jpeg"
            className="w-full h-[50%]"
            alt=""
          />
          <h1
            className="text-center text-lg font-extrabold w-full flex justify-center gap-3 mx-auto items-center mt-14 ml-0"
            style={{ fontFamily: "monospace" }}
          >
            <FaBolt className="text-orange-500 text-4xl" />{" "}
            <h1 className="text-start text-lg font-extrabold">
              ROMA, MOROCCO, SHARM EL SHEIKH
            </h1>
          </h1>
          <div className="flex justify-between items-center px-4 w-[90%] mx-auto mt-5">
            <p className="flex justify-center items-center gap-2 ">
              {" "}
              <FaClock color="orange" /> 12 AM{" "}
            </p>
            <p className="text-gray-700">(at tis time)</p>
          </div>

          <div className="flex justify-around items-center gap-3 mt-3 w-[99%] mx-auto lg:mt-10 ">
            <div className="flex gap-1 items-center">
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <span className="text-gray-400 text-sm"> (the rate)</span>
            </div>
            <span className=" text-orange-500 font-extrabold">
              Rating:5.0
            </span>
          </div>
        </div>
      </section>

      <section className=" flex-wrap w-full mt-52">
        <div className="w-[90%] md:w-[70%] bg-gradient-to-r from-orange-400 via-orange-600  to-red-400 text-white flex flex-col-reverse md:flex-row justify-between h-fit md:h-[450px] mx-auto rounded-lg overflow-hidden ">
          <div className="w-full md:w-[50%] flex flex-col justify-start items-center">
            <h1
              className="text-xl font-extrabold uppercase mt-10 md:mt-24"
              style={{ fontFamily: "monospace" }}
            >
              enjoy summer dealse
            </h1>
            <h1
              className="text-3xl font-extrabold uppercase mt-2 text-center"
              style={{ fontFamily: "monospace" }}
            >
              up To 40% Discount!!
            </h1>

            <button className="bg-slate-950 text-white rounded-md w-[200px] h-[50px] flex items-center justify-center mt-16">
              learn more
            </button>

            <div className="flex w-full mx-auto justify-center gap-4 items-center mt-5">
              <p>
                <FaCircleNotch size={28} />
              </p>
              <p className="text-xl font-extrabold">travle around with us</p>
            </div>
            <p className="text-lg mb-10"> lets gooo</p>
          </div>

          <div className="w-full md:w-[60%]">
            <img
              src="./assets/camel.jpeg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="  flex flex-wrap flex-col md:flex-row  w-[90%] mx-auto items-center justify-center gap-10 mt-24">
        <div className="relative flex flex-col w-[90%] md:w-[400px] rounded-md overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] md:h-[500px]  object-cover  ">
          {/* <span className="absolute top-[45%] w-[150px] h-[40px] rounded-sm left-11 bg-orange-500 text-white flex justify-center items-center text-lg">
$3543543
</span> */}
          <img
            src="./assets/view4.jpeg"
            className="w-full h-[50%]"
            alt=""
          />
          <h1
            className="text-center text-lg font-extrabold w-[90%] flex justify-center gap-3 mx-auto items-center mt-14 "
            style={{ fontFamily: "monospace" }}
          >
            <FaBolt className="text-orange-500 text-4xl" />{" "}
            <h1 className="text-start text-lg font-extrabold">
              visit natural palces with us we have alot of discounts
            </h1>
          </h1>
          <div className="flex justify-between items-center px-4 w-[90%] mx-auto mt-5">
            <p className="flex justify-center items-center gap-2 ">
              {" "}
              <FaClock color="red" /> 10 AM{" "}
            </p>
            <p className="text-gray-700">(the trip was ended)</p>
          </div>

          <div className="flex justify-around items-center gap-3 mt-3 w-[99%] mx-auto lg:mt-10 ">
            <div className="flex gap-1 items-center">
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaRegStar className="text-gray-500 text-xl" />
              <span className="text-gray-400 text-sm"> (the rate)</span>
            </div>
            <span className=" text-orange-500 font-extrabold">
              Rating:4.0
            </span>
          </div>
        </div>

        <div className="relative flex flex-col w-[90%] md:w-[400px] rounded-md overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] md:min-h-[500px] object-cover  ">
          {/* <span className="absolute top-[45%] w-[150px] h-[40px] rounded-sm left-11 bg-orange-500 text-white flex justify-center items-center text-lg">
$3543543
</span> */}
          <img
            src="./assets/view3.jpeg"
            className="w-full h-[50%]"
            alt=""
          />
          <h1
            className="text-center text-lg font-extrabold w-[90%] flex justify-center gap-3 mx-auto items-center mt-14 "
            style={{ fontFamily: "monospace" }}
          >
            <FaBolt className="text-orange-500 text-2xl" />{" "}
            <h1 className="text-start text-lg font-extrabold">
              visit natural palces with us we have alot of discounts
            </h1>
          </h1>
          <div className="flex justify-between items-center px-4 w-[90%] mx-auto mt-5">
            <p className="flex justify-center items-center gap-2 ">
              {" "}
              <FaClock color="orange" /> 10 AM{" "}
            </p>
            <p className="text-gray-700">(at this time)</p>
          </div>

          <div className="flex justify-around items-center gap-3 mt-3 w-[99%] mx-auto lg:mt-10  ">
            <div className="flex gap-1 items-center">
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaRegStar className="text-gray-500 text-xl" />
              <FaRegStar className="text-gray-500 text-xl" />
              <span className="text-gray-400 text-sm"> (the rate)</span>
            </div>
            <span className=" text-orange-500 font-extrabold">
              Rating: 3.0
            </span>
          </div>
        </div>

        <div className="relative flex flex-col w-[90%] md:w-[400px] rounded-md overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] md:h-[500px] object-cover  ">
          <span className="absolute top-[45%] w-[150px] h-[40px] rounded-sm left-11 bg-orange-500 text-white flex justify-center items-center text-lg">
            $3543543
          </span>
          <img
            src="./assets/view2.jpeg"
            className="w-full h-[50%]"
            alt=""
          />
          <h1
            className="text-center text-lg font-extrabold w-[90%] flex justify-center gap-3 mx-auto items-center mt-14 "
            style={{ fontFamily: "monospace" }}
          >
            <FaBolt className="text-orange-500 text-4xl" />{" "}
            <h1 className="text-start text-lg font-extrabold">
              visit natural palces with us we have alot of discounts
            </h1>
          </h1>
          <div className="flex justify-between items-center px-4 w-[90%] mx-auto mt-5">
            <p className="flex justify-center items-center gap-2 ">
              {" "}
              <FaClock color="orange" /> 12 AM{" "}
            </p>
            <p className="text-gray-700">(at tis time)</p>
          </div>

          <div className="flex justify-around items-center gap-3 mt-3 w-[99%] mx-auto lg:mt-10 ">
            <div className="flex gap-1 items-center">
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <FaStar className="text-orange-500 text-lg" />
              <span className="text-gray-400 text-sm"> (the rate)</span>
            </div>
            <span className=" text-orange-500 font-extrabold">
              Rating:5.0
            </span>
          </div>
        </div>
      </section>

      <section
        className="h-[60vh] mt-10 md:mt-[100px] flex flex-col items-center justify-center gap-10 w-full relative"
        style={{
          backgroundImage: "url(./assets/old.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundPositionY: "center",
          fontFamily: "monospace",
        }}
      >
        <h1
          className="text-4xl font-extrabold text-white "
          style={{ fontFamily: "monospace" }}
        >
          Traveling Highlights
        </h1>
        <h1
          className="text-2xl font-extrabold  text-orange-600 "
          style={{ fontFamily: "monospace" }}
        >
          Your New Traveling idea
        </h1>
        <p>
          <FaPlayCircle size={50} className="text-white" />
        </p>
      </section>





      <h1
          className="text-center text-4xl dark:text-white font-extrabold mt-16" 
          style={{ fontFamily: "monospace" }}
        >
Customers Reviews       
 </h1>
      <section className=" flex-wrap flex flex-col md:flex-row  w-[90%] mx-auto items-center justify-center gap-10 mt-24 text-center">


      <div className="w-[90%] md:w-[400px] rounded-md bg-orange-500 text-white p-5 min-h-[450px] flex flex-col items-center justify-start">
 
  <h1 className="text-2xl font-extrabold mt-3" style={{ fontFamily: "monospace" }}>
    Karem Mahmoud
  </h1>
  <h1 className="text-lg text-start font-extrabold mt-3" style={{ fontFamily: "monospace" }}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui reiciendis ab, amet accusamus voluptatibus necessitatibus quos nihil vitae porro in optio eaque eveniet! Exercitationem maxime quod quaerat explicabo numquam sequi?
  </h1>
  <div className="flex items-center justify-between w-[90%] mx-auto mt-8">
  <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
    <img
      src="./assets/camel.jpeg"
      alt="User Avatar"
      className="w-[90px] h-[90px] rounded-full"
    />
  </div>

<div>
<h1 className="flex flex-col items-center justify-center gap-3 text-xl font-extrabold" style={{fontFamily:"monospace"}}>Karem Mahmoud</h1>

<div >
      {/* Add user rating stars here */}
      {/* Example: 5 stars */}
      <span role="img" aria-label="Star">⭐</span>
      <span role="img" aria-label="Star">⭐</span>
      <span role="img" aria-label="Star">⭐</span>
      <span role="img" aria-label="Star">⭐</span>
      <span role="img" aria-label="Star">⭐</span>
    </div>
    <h1 className="flex flex-col items-center justify-center gap-3 text-lg font-extrabold" style={{fontFamily:"monospace"}}>rating is five stars</h1>


</div>

   

    
    <div>
      {/* Add other content or controls here */}
    </div>
  </div>
</div>


<div className="w-[90%] md:w-[400px] rounded-md bg-orange-500 text-white p-5 min-h-[450px] flex flex-col items-center justify-start">
 
 <h1 className="text-2xl font-extrabold mt-3" style={{ fontFamily: "monospace" }}>
   Karem Mahmoud
 </h1>
 <h1 className="text-lg text-start font-extrabold mt-3" style={{ fontFamily: "monospace" }}>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui reiciendis ab, amet accusamus voluptatibus necessitatibus quos nihil vitae porro in optio eaque eveniet! Exercitationem maxime quod quaerat explicabo numquam sequi?
 </h1>
 <div className="flex items-center justify-between w-[90%] mx-auto mt-8">
 <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
   <img
     src="./assets/camel.jpeg"
     alt="User Avatar"
     className="w-[90px] h-[90px] rounded-full"
   />
 </div>

<div>
<h1 className="flex flex-col items-center justify-center gap-3 text-xl font-extrabold" style={{fontFamily:"monospace"}}>Karem Mahmoud</h1>

<div >
     {/* Add user rating stars here */}
     {/* Example: 5 stars */}
     <span role="img" aria-label="Star">⭐</span>
     <span role="img" aria-label="Star">⭐</span>
     <span role="img" aria-label="Star">⭐</span>
     <span role="img" aria-label="Star">⭐</span>
     <span role="img" aria-label="Star">⭐</span>
   </div>
   <h1 className="flex flex-col items-center justify-center gap-3 text-lg font-extrabold" style={{fontFamily:"monospace"}}>rating is five stars</h1>


</div>

  

   
   <div>
     {/* Add other content or controls here */}
   </div>
 </div>
</div>




<div className="w-[90%] md:w-[400px] rounded-md bg-orange-500 text-white p-5 min-h-[450px] flex flex-col items-center justify-start">
 
 <h1 className="text-2xl font-extrabold mt-3" style={{ fontFamily: "monospace" }}>
   Karem Mahmoud
 </h1>
 <h1 className="text-lg text-start font-extrabold mt-3" style={{ fontFamily: "monospace" }}>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui reiciendis ab, amet accusamus voluptatibus necessitatibus quos nihil vitae porro in optio eaque eveniet! Exercitationem maxime quod quaerat explicabo numquam sequi?
 </h1>
 <div className="flex items-center justify-between w-[90%] mx-auto mt-8">
 <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
   <img
     src="./assets/camel.jpeg"
     alt="User Avatar"
     className="w-[90px] h-[90px] rounded-full"
   />
 </div>

<div>
<h1 className="flex flex-col items-center justify-center gap-3 text-xl font-extrabold" style={{fontFamily:"monospace"}}>Karem Mahmoud</h1>

<div >
     {/* Add user rating stars here */}
     {/* Example: 5 stars */}
     <span role="img" aria-label="Star">⭐</span>
     <span role="img" aria-label="Star">⭐</span>
     <span role="img" aria-label="Star">⭐</span>
     <span role="img" aria-label="Star">⭐</span>
     <span role="img" aria-label="Star">⭐</span>
   </div>
   <h1 className="flex flex-col items-center justify-center gap-3 text-lg font-extrabold" style={{fontFamily:"monospace"}}>rating is five stars</h1>


</div>

  

   
   <div>
     {/* Add other content or controls here */}
   </div>
 </div>
</div>


        </section>



        <section className=" flex-wrap flex flex-col md:flex-row  w-[95%] mx-auto items-center justify-center gap-5 mt-24">
      
        <div className="relative flex flex-col w-[90%] md:w-[400px] rounded-md overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] object-cover  ">
      <div className="w-full  h-full bg-black absolute top-0 left-0 opacity-30 flex items-center justify-center ">




      </div>
    
      <span className=" bottom-7 absolute top-0 left-0  text-center flex items-end text-2xl text-white justify-center ">
        how to travel with Karem mahmoud abdelkader
      </span>
          <img
            src="./assets/tourist.jpeg"
            className="w-full h-full"
            alt=""
          />
         
        </div>


        <div className="relative flex flex-col w-[90%] md:w-[400px] rounded-md overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] object-cover  ">
      <span className="w-full  h-full bg-black absolute top-0 left-0 opacity-30 flex items-center justify-center ">
      </span>
      <span className=" bottom-7 absolute top-0 left-0  text-center flex items-end text-2xl text-white justify-center ">
        how to travel with Karem mahmoud abdelkader
      </span>
          <img
            src="./assets/tourist2.jpeg"
            className="w-full h-full"
            alt=""
          />
         
        </div>






        <div className="relative flex flex-col w-[90%] md:w-[400px] rounded-md overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] object-cover  ">
      <span className="w-full  h-full bg-black absolute top-0 left-0 opacity-30 flex items-center justify-center ">
      </span>
      <span className=" bottom-7 absolute top-0 left-0  text-center flex items-end text-2xl text-white justify-center ">
        how to travel with Karem mahmoud abdelkader
      </span>
          <img
            src="./assets/tourist3.jpeg"
            className="w-full h-full"
            alt=""
          />
         
        </div>






      </section>
        
     
      {/* <div className="w-full m-auto mt-10"><Slider slides={slides} customStyle={{coverOrContain:"object-cover",scale:"scale-100"}} /></div> */}


      <section className=" flex-wrap mt-[500px]"></section>
    </>
  );
}

export default Home;
