function DessertsList(props){
    const lowCaloDessertsList = props.data
    .filter((dessert) => {
        /* Get all the low calories desserts */
        return dessert.calories < 500;
    })
    .sort((a, b) => {
        /* Sort the desserts by calories */
        return a.calories - b.calories; // ascending order (<0)
    })
    /* Transform the list */
    .map((dessert) => {
        return (
            <li>
                {dessert.name} - {dessert.calories} cal
            </li>
        );
    });
    return (
        <ul>
            {lowCaloDessertsList}
        </ul>
    );

}
export default DessertsList;