const Item = ({ id, note, date, time, setData, submittingStatus }) => {
    function deleteItem() {
        // submittingStatus.current = true;
        setData(function (prev) {
            return prev.filter((item) => item.id !== id);
        });
    }

    return (
        <div className="item">
            <div>
                <p>{note}</p>
                <p>{`${date} ${time}`}</p>
            </div>
            <button className="remove" onClick={deleteItem}>
                刪除
            </button>
        </div>
    );
};

export default Item;
