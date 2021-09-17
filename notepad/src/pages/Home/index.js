import { useState, useEffect, useRef } from 'react';
import { API_GET_DATA } from '../../global/constants';

import Edit from './components/Edit';
import List from './components/List';
import './index.css';

/* promise 寫法 */
// function fetchData() {
//     fetch(API_GET_DATA)
//         .then((res) => res.json())
//         .then((data) => console.log(data));
// }
/* async/await 寫法 */
async function fetchData(setData) {
    const res = await fetch(API_GET_DATA);
    const { data } = await res.json();
    setData(data);
}

async function putData(data) {
    await fetch(API_GET_DATA, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ data }),
    });
}

const Home = () => {
    const [data, setData] = useState([]);
    const submittingStatus = useRef(false);

    useEffect(() => {
        fetchData(setData).then((submittingStatus.current = true));
    }, []);

    useEffect(() => {
        if (!submittingStatus.current) return;

        putData(data);
    }, [data]);

    return (
        <div className="app">
            <Edit setData={setData} submittingStatus={submittingStatus} />
            <List
                listData={data}
                setData={setData}
                submittingStatus={submittingStatus}
            />
        </div>
    );
};

export default Home;
