import { useState, useEffect } from "react";

export default (name: string, email: string, pass: string) => {
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {

    
    async () => {
      let response = await fetch("http:localhost:3333/createAcount", {});
      let resJSON = response.json();
      console.log("teste", resJSON);
      if (resJSON) {
        setIsCreate(true);
      }
    };
  }, []);

  return isCreate;
};
