import { useParams } from "react-router-dom";
import useNewsInfo from "../utils/useNewsInfo";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";

const NewsInfo = () => {
    const { tag } = useParams();

    const newsInfo = useNewsInfo(tag);
    // console.log(newsInfo);

    if (newsInfo === null) {
        return <Shimmer />;
    }

    return (
        <div className="container">
            <h1 className="text-center bg-light -p-3">{tag}</h1>
            <div className="row">
                {/* <NewsCard obj={newsInfo[0]} />
                <NewsCard obj={newsInfo[1]} />
                <NewsCard obj={newsInfo[2]} /> */}

                {
                    newsInfo.map(
                        (obj) => {
                            return <NewsCard obj={obj} key={obj.hash_id} />
                        }
                    )
                }
            </div>
        </div>
    )
}

export default NewsInfo;