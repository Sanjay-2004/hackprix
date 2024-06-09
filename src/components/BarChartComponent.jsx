import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

const BarChartComponent = () => {

    const checkArr = [
        { domain: "frontend", performance: 7 },
        { domain: "backend", performance: 9 },
        { domain: "fullstack", performance: 7 },
        { domain: "devops", performance: 4 },
        { domain: "testing", performance: 5 },
        { domain: "management", performance: 6 },
        { domain: "design", performance: 7 },
        { domain: "product", performance: 8 },
        { domain: "marketing", performance: 10 },
        { domain: "sales", performance: 5 },
        { domain: "hr", performance: 5 },
        { domain: "finance", performance: 9 },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <p className='text-2xl'>Performance</p>
                </CardTitle>
                <hr />
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={checkArr} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="domain" />
                        <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                        {/* <Tooltip /> */}
                        <Bar dataKey="performance" fill="#ff8000" />
                        <ReferenceLine y={7} stroke="black" strokeOpacity={0.5} strokeWidth={3} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export default BarChartComponent;
