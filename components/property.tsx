import Link from "next/link";

interface PropertyProps {

    handleRemove: (id: string) => any;
    id: string;
    type: string;
    price: number;
    location: string;
    image: string;
    contact: string;
}

export default function Property({handleRemove, id, type, price, location, image, contact}: PropertyProps) {
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
                    <Link href = '/buyer/list'>Update</Link>
                    </button>
                    <button className="btn btn-primary" onClick = {() => handleRemove(image)}>Remove</button>
                </div>
            </div>
        </div>
    )
}