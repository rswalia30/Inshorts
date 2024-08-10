import { Link } from "react-router-dom";

const NewsCard = (props) => {
    // console.log(props);
    console.log(props?.obj?.news_obj);

    const { image_url, title, content, bottom_text, bottom_panel_link } = props?.obj?.news_obj;

    return (
        <div className="d-flex bg-light mt-4 p-2">
            <div>
                <img src={image_url} alt=""
                    className="img-fluid"
                    style={{ "aspectRatio": "4/3" }}
                />
            </div>
            <div className="ms-3">
                <h4>{title}</h4>
                <p>{content}</p>
                <Link to={bottom_panel_link} className="text-decoration-none">
                    <p className="fst-italic fw-lighter">{bottom_text}</p>
                </Link>
            </div >
        </div>
    )
}

export default NewsCard;