import { Link } from "react-router-dom";

export default function InfoCard({ item }) {
    const { make, model, price, id } = item;
    return <>

        <div className="block rounded-lg bg-white  mt-16 " >
            <Link to={`/car/${id}`}>
                <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                    <img className="rounded-lg  sm:m-h-64 md:h-64 w-full" src="https://tse4.mm.bing.net/th?id=OIP.DxV_HfLqa-LEu7uY6pJxaQHaG8&pid=Api&P=0&h=180"
                        alt="" />

                </div>
            </Link>

            <div className="p-2">
                <div className="flex justify-between">
                    <h5 className="mb-2 text-md font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {make} {model}
                    </h5>
                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
                        5.0 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-4 h-4 ml-1">
                            <path fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd" />
                        </svg>

                    </h5>
                </div>

                <h5 className="mb-2 text-md font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                    Rs {price * 80 / 100000} Lakh*
                </h5>
            </div>
        <Link to={'/login'}>
        <button type="button" className="text-red-500 border border-red-700 w-full  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center  mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Check New Offers</button>
        </Link>
        </div>

    </>
}