import React, { useState } from "react";
import DashboardAuthentication from "../../Components/DashboardAuthentication/DashboardAuthentication";

const Admin = () => {
    const credentials = [{username:'kai', password:'helloWorld', email:'kailashrathod249@gmail.com', roles:'admin'}];
    const [authenticated, setAutenticated]= useState(false);
    const authenticateCreds = (username, password) =>{
        for(var i=0;i<credentials.length;i++){
            if(credentials[i].username ===  username && credentials[i].password === password){
                setAutenticated(true);
            }
        }
    }
  return (
    <div>
        {authenticated?( <h3>Admin Dashboard!</h3> ):(<DashboardAuthentication authenticateCreds={authenticateCreds}/> )}
    </div>
  );
};

export default Admin;

