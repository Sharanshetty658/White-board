import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import { NavLink } from "react-router-dom";
import WhiteBoard from "components/Whiteboard";


export default function Home1Page() {

  const [Pen, setPen] = useState(true);
  const [btncolor, setBtnColor] = useState(true);
  const [color, setColor] = useState("black");
  const [brushValue, setBrushValue] = useState();

  const handlePen = () => {
    setPen(!Pen);
    setBtnColor(!btncolor);
  }
  const buttonColor = !btncolor ? "lime_400" : "black_900";
  const handleReset = () => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

  }

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const handleRed = () => {
    setColor('red')
  }

  const handleBlue = () => {
    setColor('blue')
  }

  const handleGreen = () => {
    setColor('green')
  }

  const handleInputChange = (e) => {
    const newValue = e.target.value !== '' ? parseInt(e.target.value) :'5' ;
    setBrushValue(newValue);
};


  return (
    <>
      <Helmet>
        <title>Sharan's Application8</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pb-[111px] gap-[11px] md:pb-5 bg-lime-A100">
        <header className="flex flex-row md:flex-col justify-between items-center w-full p-4 md:gap-10 bg-lime-A100_e5">
          <Img src="images/img_link_framer_1pfxpb1.svg" alt="image" className="h-[24px] ml-8 md:ml-0 sm:ml-5" />
          <div className="flex flex-row justify-start items-center w-[50%] md:w-full mr-8 pl-[483px] gap-2 md:pl-5 sm:mr-5">
            <div className="h-[16px] w-px bg-lime-400" />
            <div className="flex flex-row justify-center w-[38%] p-[9px]">
              <NavLink to="/SignIn" className="mt-[3px]">
                <Text size="xs" as="p" className="!text-gray-900_01 !text-[17.1px]">
                  Sign in
                </Text>
              </NavLink>
            </div>
            <NavLink
              to="/login"
              className="flex justify-center items-center w-[108px] h-[43px] px-[23px] py-[11px] sm:px-5 bg-gray-900_01 rounded-[21px]"
            >
              <Text size="xs" as="p" className="!text-gray-200 !text-[17.1px]">
                Sign up
              </Text>
            </NavLink>
          </div>
        </header>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-center w-full md:px-5 max-w-[1000px]">
              <div className="flex flex-row justify-center w-[75%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Heading as="h1" className="tracking-[-2.50px] text-center !text-[101.1px]">
                    Your Personalized{" "}
                  </Heading>
                  <Heading as="h2" className="mt-[-18px] tracking-[-2.50px] text-center !text-[101.1px]">
                    WhiteBoard
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end w-[62%] md:w-full mt-5">
              <div className="flex flex-col items-start justify-start w-full gap-[3px] mx-auto md:px-5 max-w-[873px]">
                <div className="flex flex-row md:flex-col justify-start items-center md:gap-5">
                  <Text as="p" className="tracking-[-0.10px]">
                    Increase your team’s
                  </Text>
                  <Text as="p" className="ml-3 md:ml-0 !text-gray-900 tracking-[-0.10px] !text-[24.8px]">
                    <span className="text-gray-900">speed</span>
                    <span className="text-gray-900 text-2xl">,</span>
                    <span className="text-gray-900">collaboration</span>
                    <span className="text-gray-900 text-2xl">,</span>
                  </Text>
                  <Text as="p" className="ml-[11px] md:ml-0 tracking-[-0.10px]">
                    and
                  </Text>
                  <Text as="p" className="ml-[5px] md:ml-0 !text-gray-900 tracking-[-0.10px] !text-[24.8px]">
                    alignment
                  </Text>
                  <Text as="p" className="ml-1.5 md:ml-0 tracking-[-0.10px]">
                    by giving everyone
                  </Text>
                </div>
                <Text as="p" className="ml-[26px] md:ml-0 sm:ml-5 tracking-[-0.10px]">
                  acess to your Whiteboard
                </Text>
              </div>
            </div>
            <div className="bg-white-100 shadow-lg flex rounded-[9px] justify-evenly p-4 space-x-2">
              <div className="flex space-x-2">
                <Button
                  className="Pen"
                  shape="round"
                  size="xs"
                  color={buttonColor}
                  onClick={handlePen} >
                  Pen
                </Button>
                <Button
                  className="Pen"
                  shape="round"
                  size="xs"
                  color="black_900"
                  onClick={handleReset}>
                  Reset
                </Button>
                <input 
                        className="rounded-[9px] h-[40px] w-[50px] text-center color-white shadow-md"
                        placeholder="Size"
                        type="number"
                        value={brushValue}
                        onChange={handleInputChange}
                    >
                    
                    </input>
              </div>

              <div className="flex space-x-2">
                <button className="h-8 w-8 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-800" onClick={handleRed}></button>
                <button className="h-8 w-8 bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800" onClick={handleBlue}></button>
                <button className="h-8 w-8 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-800" onClick={handleGreen}></button>
              </div>
            </div>
            <div className="h-[837px] w-full mt-[-2px] relative">
              <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex flex-col items-center justify-start h-[101px] w-[101px] mr-[262px] md:mr-5">
                  <div className="h-[101px] w-[101px] relative">
                    <Img
                      src="images/img_icon.svg"
                      alt="icon_one"
                      className="justify-center h-[101px] w-[101px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <Img
                      src="images/img_icon_lime_a100.svg"
                      alt="icon_three"
                      className="justify-center h-[66px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-end w-full mt-[-19px] z-[1]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row justify-center w-full z-[1]">
                      <Img src="images/img_div_framer_p82khg.svg" alt="image_one" className="h-[48px]" />
                    </div>
                    <WhiteBoard
                      canvasRef={canvasRef}
                      ctxRef={ctxRef}
                      Pen={Pen}
                      color={color}
                      elements="elements"
                      setElements="setElements"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start h-[87px] w-[87px] left-[34%] top-[4%] p-[11px] m-auto bg-lime-400 absolute rounded-[43px]">
                <Img
                  src="images/img_icon_lime_a100_65x65.svg"
                  alt="icon_five"
                  className="h-[65px] w-full max-w-[65px]"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center w-[28%] md:w-full mt-20">
              <Text size="md" as="p" className="!text-light_green-800 tracking-[2.00px] uppercase">
                By Sharan Shetty
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
