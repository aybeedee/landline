type Property = {

    id: string,
    type: string,
    price: number,
    location: string,
    image: string,
    contact: string
};

export default function Property(props: Property) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={props.image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.location}</h2>
                <p>PKR {props.price}</p>
                <p>{props.type}</p>
                <p>Contact: {props.contact}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-primary">Remove</button>
                </div>
            </div>
        </div>
    )
}