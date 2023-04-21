import Link from "next/link";

interface PropertyViewProps {

    id: string;
    type: string;
    price: number;
    location: string;
    image: string;
    contact: string;
}

export default function PropertyView({id, type, price, location, image, contact}: PropertyViewProps) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{location}</h2>
                <p>PKR {price}</p>
                <p>{type}</p>
                <p>Contact: {contact}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link href = '/user'>View</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}