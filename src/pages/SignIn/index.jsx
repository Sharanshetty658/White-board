import React , {useState}from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Img } from "../../components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {

  const auth = getAuth();
  const [Email, setEmail]=useState('')
  const [Password,setPassword] = useState('')

  const [btncolor, setBtnColor] = useState(true);
  const buttonColor = !btncolor ? "lime_400" : "black_900";
  const handleClick = (e)=>{
    setBtnColor(!btncolor)
    e.preventDefault();
    createUserWithEmailAndPassword(auth,Email,Password)
      .then((userCredential)=>{
        const user = userCredential.user;
        console.log(userCredential)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });

  }


  return (
    <>
      <Helmet>
        <title>Sharan's Application8</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-end justify-start w-full pl-14 pr-[107px] py-[107px] md:p-5 bg-lime-A100">
        <div className="flex flex-col items-start justify-start w-[90%] md:w-full mt-[150px] mb-[5px]">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-row md:flex-col justify-between items-start w-[68%] md:w-full md:gap-10">
              <div className="flex flex-row justify-between items-start w-auto mt-7 gap-[35px] md:mt-0">
                <Button shape="round" className="w-[50px] mt-[62px] rotate-[36deg]">
                  <Img src="images/img_svg2987495473.svg" />
                </Button>
                <Img src="images/img_div_framer_h44doq.svg" alt="image" className="h-[107px] w-[107px] mb-1" />
              </div>
              <div className="flex flex-row sm:flex-col justify-start items-start mb-[13px] gap-[30px] sm:gap-5">
                <Button href="#" className="mb-[9px]">
                  <Text size="xl" as="p" className="!text-black-900_01">
                    Sign In
                  </Text>
                </Button>
                <Button shape="round" className="w-[50px] mt-[76px] sm:mt-0 rotate-[-9deg]">
                  <Img src="images/img_svg1241889265.svg" />
                </Button>
              </div>
            </div>
            <Img
              src="images/img_div_framer_ty8oja.svg"
              alt="image_one"
              className="h-[42px] w-[42px] mt-[21px] md:mt-0"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[23px] p-11 mx-auto md:p-5 bg-white-A700_01 shadow-sm max-w-[773px] rounded-[84px]">
            <Text size="lg" as="p" className="!text-black-900_01">
              Email
            </Text>
            <div className="flex flex-col items-center justify-start w-[69%] md:w-full mb-[49px]">
            <Input shape="round" name="edittext" className="w-full mt-7" value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            />

              <Text size="lg" as="p" className="mt-[98px] !text-black-900_01">
                Password
              </Text>
              <Input shape="round" name="edittext" className="w-full mt-7" value={Password} 
              onChange={(e)=>setPassword(e.target.value)}
              />
              <Button
                color={buttonColor}
                onClick= {handleClick}
                size="sm"
                className="mt-[114px] sm:px-5 min-w-[296px] rounded-[40px] sm:min-w-full"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
