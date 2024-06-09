import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CardComponent({ title, description, tags }) {
    return (
        <>
            <Card style={{ position: 'relative' }} className='h-[250px] hover:scale-105 transition'>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <hr />
                <CardContent>
                    {description}
                </CardContent>
                <CardFooter className='h-[100px] flex flex-col  justify-end items-start '>
                    <div className='mb-2'>
                        {tags && tags.map(
                            (info, index) => {
                                return (
                                    <Badge key={index} className="mx-1" variant="outline">{info}</Badge>
                                )
                            }
                        )}
                    </div>
                </CardFooter>
            </Card>

        </>
    )
}
