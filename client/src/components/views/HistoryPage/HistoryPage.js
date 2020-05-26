import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function HistoryPage() {

    const [History, setHistory] = useState([])

    useEffect(() => {

        Axios.get('/api/users/getHistory')
            .then(response => {
                if (response.data.success) {
                    setHistory(response.data.history)
                } else {
                    alert('Failed to get History')
                }
            })

    }, [])

    let format = function (time, format) {
        let t = new Date(time);
        let tf = function (i) { return (i < 10 ? '0' : '') + i };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
            switch (a) {
                case 'yyyy':
                    return tf(t.getFullYear());
                    break;
                case 'MM':
                    return tf(t.getMonth() + 1);
                    break;
                case 'mm':
                    return tf(t.getMinutes());
                    break;
                case 'dd':
                    return tf(t.getDate());
                    break;
                case 'HH':
                    return tf(t.getHours());
                    break;
                case 'ss':
                    return tf(t.getSeconds());
                    break;
            }
        })
    }

    return (
        <div style={{ width: '80%', margin: '3rem auto ' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>History</h1>
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>

                    </tr>
                </thead>

                <tbody>
                    {History.map(item => (
                        <tr key={item._id}>
                            <td>{item.paymentId}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{format(item.dateOfPurchase, 'dd/MM/yyyy')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage
