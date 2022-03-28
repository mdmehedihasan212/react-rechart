import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-')
                    const ph = {
                        name: parts[0],
                        value: parts[1]
                    };
                    return ph;
                })
                setPhones(phoneData)
                console.log(phoneData);
            })
    }, [])
    return (
        <div>
            <ComposedChart width={730} height={300} data={phones}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="value" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="value" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default SpecialChart;