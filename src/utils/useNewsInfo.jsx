import { useEffect, useState } from "react"
import { INSHORTS_API } from "./constants";

const useNewsInfo = (tag) => {
    const [newsInfo, setNewsInfo] = useState(null);

    useEffect(() => { fetchNewsFromAPI() }, []);

    const fetchNewsFromAPI = async () => {
        const data = await fetch(INSHORTS_API + "/" + tag);
        const json = await data.json();
        setNewsInfo(json.data.suggested_news);
    }

    return newsInfo;
}

export default useNewsInfo;