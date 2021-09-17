import { useState } from 'react';
import { v4 } from 'uuid';

const Edit = ({ setData, submittingStatus }) => {
    const [note, setNote] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    function noteChange(e) {
        setNote(e.target.value);
    }
    function dateChange(e) {
        setDate(e.target.value);
    }
    function timeChange(e) {
        setTime(e.target.value);
    }

    console.log(v4(), note, date, time);

    function addItem() {
        // submittingStatus.current = true
        setData(function (prevData) {
            return [{ id: v4(), note, date, time }, ...prevData];
        });
    }

    return (
        <div>
            <h1>備忘錄</h1>
            <p>記事：</p>
            <input type="text" value={note} onChange={noteChange}></input>
            <p>日期：</p>
            <input type="date" value={date} onChange={dateChange}></input>
            <p>時間：</p>
            <input type="time" value={time} onChange={timeChange}></input>
            <button className="add" onClick={addItem}>
                新增
            </button>
        </div>
    );
};

export default Edit;
