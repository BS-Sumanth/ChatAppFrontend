import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage=()=>{
     return 'Username should contain between 5 and 15 characters and password should contain between 8 and 15 characters. Also correct e-mail should be provided.';
}

const getFormValidMessage=()=>{
     return 'Press to register!';
}

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {

     const navigate = useNavigate();

     const handlePushToLoginPage = () => {
          navigate("/login");
     }

     return (
          <>
               <Tooltip
                    title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
               >
                    <div>
                         <CustomPrimaryButton
                              label="Register"
                              additionalStyles={{ marginTop: '30px' }}
                              disabled={!isFormValid}
                              onClick={handleRegister}
                         />
                    </div>
               </Tooltip>
               <RedirectInfo
                    text=''
                    redirectText='Already have an account ?'
                    additionalStyles={{ marginTop: '5px' }}
                    redirectHandler={handlePushToLoginPage}
               />
          </>
     );
}

export default RegisterPageFooter;