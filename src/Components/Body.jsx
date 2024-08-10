import useGetCardsInfo from "../utils/useGetCardsInfo";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
    const cardsInfo = useGetCardsInfo();
    // console.log(cardsInfo);

    if (cardsInfo.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="container">
            <h1 className="text-center bg-light p-3">Welcome To InsightDaily</h1>
            <div className="row">
                {/* <Card obj={cardsInfo[0]} />
                <Card obj={cardsInfo[1]} />
                <Card obj={cardsInfo[2]} />
                <Card obj={cardsInfo[3]} /> */}

                {
                    cardsInfo.map(
                        (obj, index) => {
                            return <Card obj={obj} key={index} />
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Body;