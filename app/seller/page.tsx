"use client";
import Link from "next/link";
import {useState} from "react";
import PropertyView from "../../components/propertyView";

const properties = [

    {
        id: "1",
        type: "Residential",
        price: 5600000,
        location: "F-8/2 Islamabad",
        image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg",
        contact: "0334 5463453"
    },

    {
        id: "2",
        type: "Commercial",
        price: 7500000,
        location: "Gulberg Islamabad",
        image: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_960_720.jpg",
        contact: "0334 5463453"
    },

    {
        id: "3",
        type: "Residential",
        price: 5600000,
        location: "DHA Phase II Lahore",
        image: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg",
        contact: "0334 5463453"
    },

    {
        id: "4",
        type: "Residential",
        price: 5600000,
        location: "G-6/2 Islamabad",
        image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
        contact: "0334 5463453"
    },

    {
        id: "5",
        type: "Commercial",
        price: 7500000,
        location: "Rawal Road Islamabad",
        image: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
        contact: "0334 5463453"
    },

    {
        id: "6",
        type: "Residential",
        price: 5600000,
        location: "Clifton Karachi",
        image: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg",
        contact: "0334 5463453"
    }
];

const Seller = () => {

    const [searchParams, setSearchParams] = useState({

        location: "",
        minPrice: null,
        maxPrice: null,
        propertyType: "All"
      })

    const filteredProperties = properties.filter(

        (property : any) => {
            
            if (searchParams.propertyType === "All") {

                if ((!searchParams.minPrice) && (!searchParams.maxPrice)) {

                    return property.location.toLowerCase().includes(searchParams.location.toLowerCase());
                }

                else if (!searchParams.minPrice) {

                    return (

                        property.location.toLowerCase().includes(searchParams.location.toLowerCase()) &&
                        (property.price <= (searchParams.maxPrice === null ? Number.MAX_VALUE : searchParams.maxPrice))
                    );
                }

                else if (!searchParams.maxPrice) {

                    return (

                        property.location.toLowerCase().includes(searchParams.location.toLowerCase()) &&
                        (property.price >= searchParams.minPrice)
                    );
                }

                else {

                    return (

                        property.location.toLowerCase().includes(searchParams.location.toLowerCase()) &&
                        (property.price >= searchParams.minPrice) &&
                        (property.price <= searchParams.maxPrice)
                    );
                }
            }

            else {

                if ((!searchParams.minPrice) && (!searchParams.maxPrice)) {

                    return (

                        property.location.toLowerCase().includes(searchParams.location.toLowerCase()) &&
                        (property.type === searchParams.propertyType) &&
                        (property.type === searchParams.propertyType)
                    )
                }

                else if (!searchParams.minPrice) {

                    return (

                        property.location.toLowerCase().includes(searchParams.location.toLowerCase()) &&
                        (property.type === searchParams.propertyType) &&
                        (property.price <= (searchParams.maxPrice === null ? Number.MAX_VALUE : searchParams.maxPrice))
                    );
                }

                else if (!searchParams.maxPrice) {

                    return (

                        property.location.toLowerCase().includes(searchParams.location.toLowerCase()) &&
                        (property.type === searchParams.propertyType) &&
                        (property.price >= searchParams.minPrice)
                    );
                }

                else {

                    return (

                        property.location.toLowerCase().includes(searchParams.location.toLowerCase()) &&
                        (property.type === searchParams.propertyType) &&
                        (property.price >= searchParams.minPrice) &&
                        (property.price <= searchParams.maxPrice)
                    );
                }
            }
        }
    );

    const handleChange = (e: any) => {

        setSearchParams(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    return (
        <div className="antialiased bg-base-200 w-full min-h-screen text-slate-300 relative py-4">
            <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <div id="menu" className="bg-base-100 col-span-3 rounded-lg p-4 ">
                    <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">LandLine<span style = {{color: "#661AE6"}}>.</span></h1>
                    <p className="text-slate-400 text-sm mb-2">Welcome back,</p>
                    <a href="#" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                        <div>
                            <img className="rounded-full w-10 h-10 relative object-cover" src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125" alt=""/>
                        </div>
                        <div>
                            <p className="font-medium group-hover:text-indigo-400 leading-4">Mohsin Ali</p>
                            <span className="text-xs text-slate-400">Spades Inc</span>
                        </div>
                    </a>
                    <hr className="my-2 border-slate-700"/>
                    <div id="menu" className="flex flex-col space-y-2 my-5">
                        <a href="#" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    
                                </div>
                                <div>
                                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Make Purchase</p>
                                <p className="text-slate-400 text-sm hidden md:block">Buy new property</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                            <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>                              
                                </div>
                                <div>
                                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Manage Documents</p>
                                <p className="text-slate-400 text-sm hidden md:block">Edit/Delete Documents</p>
                                </div>
                                <div className="absolute -top-3 -right-3 md:top-0 md:right-0 px-2 py-1.5 rounded-full bg-indigo-800 text-xs font-mono font-bold">4</div>
                            </div>
                        </a>
                        <a href="#" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>                              
                                </div>
                                <div>
                                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Finance</p>
                                <p className="text-slate-400 text-sm hidden md:block">Manage Finances</p>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-indigo-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                        
                                </div>
                                <div>
                                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">Settings</p>
                                <p className="text-slate-400 text-sm hidden md:block">Edit settings</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <p className="text-sm text-center text-gray-600">v1 | &copy; 2023 Devsociates</p>
                </div>

                <div id="content" className="bg-base-100 col-span-9 rounded-lg p-6 flex flex-col space-y-4 items-center justify-evenly">
                    <div className = "flex w-full items-center justify-between space-x-1">
                        <input name = "location" type="text" onChange = {handleChange} placeholder="Search Location" className="p-2 input input-bordered" />

                        <label>Min Price:  </label>
                        <input type = "number" onChange = {handleChange} name = "minPrice" className="p-2 w-40 input input-bordered"/>

                        <label>Max Price:  </label>
                        <input type = "number" onChange = {handleChange} name = "maxPrice" className="p-2 w-40 input input-bordered"/>

                        <select onChange = {handleChange} name = "propertyType" className = "p-2 w-32 input input-bordered">
                            <option selected value = "All">Select Type</option>
                            <option value = "Commercial">Commercial</option>
                            <option value = "Residential">Residential</option>
                        </select>
                    </div>
                    <div id="stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        {filteredProperties.map((ppty) => (
                            <PropertyView key = {ppty.image} id = {ppty.id} type = {ppty.type} price = {ppty.price} location = {ppty.location} image = {ppty.image} contact = {ppty.contact}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seller;
