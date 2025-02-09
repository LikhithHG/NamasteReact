import ItemList from "./ItemList";

const RestaurnCategory = ({data, showItems, setShowIndex}) => {

    // const [showItems, setShowItems] = useState(false);

    // //console.log(data);

    const handleClick = () => {
        //console.log('clicked');
        //setShowItems(!showItems);
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                {/** Accordian Header */}
                <div 
                    className="flex justify-between cursor-pointer"
                    onClick = {handleClick}
                >
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>{showItems ? "⬆️" : "⬇️"}</span>
                </div>
                {/** Accordian Body -- Another component called Item Lisst*/}
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurnCategory;