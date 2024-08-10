import { Link } from "react-router-dom"

const Card = (props) => {
    // console.log(props);

    const { image_url, label, tag } = props?.obj;

    return (
        <div className="col-md-3 mt-4">
            <div className="card bg-light">
                <Link to={`/${tag}`}>
                    <img src={image_url} alt="img" className="img-thumbnail" style={{ "aspectRatio": "4/3" }} />
                </Link>
                <h5 className="text-center p-2">{label}</h5>
            </div>
        </div>
    )
}

export default Card;