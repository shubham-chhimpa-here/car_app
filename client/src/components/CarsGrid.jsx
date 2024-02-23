import { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import axios from "axios";
import LoadingGrid from "./LoadingGrid";

export default function CarsGrid() {
   
    const  [isLoading, setIsLoading] = useState(true)

    const [cars, setCars] = useState([])
    async function getData() {
        try {
          const response = await axios.get("https://freetestapi.com/api/v1/cars");
          setCars(response.data)

        } catch (error) {
          console.error(error);
        }
        setIsLoading(false)
      }
    
      useEffect(() => {
        getData();
      }, []);

      if(isLoading) {
        return <LoadingGrid />
      }

    return <>
        <div className="grid grid-cols-4  gap-14 px-10 py-10 justify-between">
           
            {
               cars.map((item, i) => {
                    return  <InfoCard key={i} item={item}/>
                })
            }

        </div>
    </>
}