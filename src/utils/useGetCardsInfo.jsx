import { useEffect, useState } from "react";
import { INSHORTS_API } from "./constants";

const useGetCardsInfo = () => {

    const [cardInfo, setCardInfo] = useState([]);

    useEffect(() => { fetchDataFromAPI() }, []);

    const fetchDataFromAPI = async () => {
        const data = await fetch(INSHORTS_API);
        const json = await data.json();
        setCardInfo(json.data.trending_tags);
    }

    return cardInfo;
}

export default useGetCardsInfo;