import { Link, useParams } from "react-router-dom"
import Rating from "./Rating"
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

// color
// : 
// "Silver"

// engine
// : 
// "2.0L 4-cylinder"
// features
// : 
// (3) ['Bluetooth', 'Backup Camera', 'Keyless Entry']
// fuelType
// : 
// "Gasoline"
// horsepower
// : 
// 169
// id
// : 
// 1
// image
// : 
// "https://fakeimg.pl/500x500/cccccc"
// make
// : 
// "Toyota"
// mileage
// : 
// 20000
// model
// : 
// "Corolla"
// owners
// : 
// 1
// price
// : 
// 25000
// transmission
// : 
// "Automatic"
// year
// : 
// 2022

export default function CarDetails() {
    window.scroll({
        top: 0
    })
    const [isLoading, setIsLoading] = useState(true)
    const {carId} = useParams()
    const [car, setCar] = useState({})
    async function getData() {
        try {
          const response = await axios.get(`https://freetestapi.com/api/v1/cars/${carId}`);
          setCar(response.data)
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false)
      }
    
      useEffect(() => {
        getData();
      }, []);

      if(isLoading) {
        return <Loading />
      }
    return <>
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">

            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt="image of a girl posing" src="https://tse4.mm.bing.net/th?id=OIP.DxV_HfLqa-LEu7uY6pJxaQHaG8&pid=Api&P=0&h=180" />
                <img className="mt-6 w-full" alt="image of a girl posing" src="https://tse4.mm.bing.net/th?id=OIP.DxV_HfLqa-LEu7uY6pJxaQHaG8&pid=Api&P=0&h=180" />
            </div>
            <div className="md:hidden">
                <img className="w-full" alt="image of a girl posing" src="https://tse4.mm.bing.net/th?id=OIP.DxV_HfLqa-LEu7uY6pJxaQHaG8&pid=Api&P=0&h=180" />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://tse4.mm.bing.net/th?id=OIP.DxV_HfLqa-LEu7uY6pJxaQHaG8&pid=Api&P=0&h=180" />
                    <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://tse4.mm.bing.net/th?id=OIP.DxV_HfLqa-LEu7uY6pJxaQHaG8&pid=Api&P=0&h=180" />
                    <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://tse4.mm.bing.net/th?id=OIP.DxV_HfLqa-LEu7uY6pJxaQHaG8&pid=Api&P=0&h=180" />
                    <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src="https://tse4.mm.bing.net/th?id=OIP.DxV_HfLqa-LEu7uY6pJxaQHaG8&pid=Api&P=0&h=180" />
                </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white my-2">
                        {car.make} {car.model}
                    </h1>
                    <Rating />
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                   
                <h1 className="lg:text-xl text-lg font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                Rs {car.price * 80 / 100000} Lakh*</h1>


                </div>
               
              <Link to={'/login'}>
              <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
                    <svg className="mr-3 text-white dark:text-gray-900" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.66699 4.83333V4.84166" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.333 11.5V11.5083" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Seller Contact
                </button>
              </Link>
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                        {/* It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters. */}
                    </p>
                   
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Color: {car.color}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Engine: {car.engine}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">FuelType: {car.fuelType}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Horsepower: {car.horsepower}bhp</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Mileage: {car.mileage / 1000} kmpl</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Transmission: {car.transmission}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Year: {car.year}</p>
                   
                </div>
                
                <div>
                   
                </div>
            </div>
        </div>
    </>
}