"use client";
import Link from "next/link";
import {useState} from "react";
import Property from "../../../components/property";

const Manage = () => {

    const [properties, setProperties] = useState([

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
    ])

    const handleRemove = (id: string) => {

        setProperties(properties.filter((ppty) => (ppty.image != id)))
    }

    return (
        <div className="hero min-h-screen bg-base-200 flex flex-col space-y-4 items-center">
            <div className="navbar bg-base-100 mb-auto">
                <a className="btn btn-ghost normal-case text-xl">
                <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">LandLine<span style = {{color: "#661AE6"}}>.</span></h1>
                </a>
            </div>

            <div id="stats" className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((ppty) => (
                    <Property key = {ppty.image} handleRemove = {handleRemove} id = {ppty.id} type = {ppty.type} price = {ppty.price} location = {ppty.location} image = {ppty.image} contact = {ppty.contact}/>
                ))}
            </div>

            <footer className="mt-auto footer items-center p-4 bg-base-100 text-neutral-content">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All rights reserved</p>
                </div> 
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a> 
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </footer>
        </div>
  )
}

export default Manage;