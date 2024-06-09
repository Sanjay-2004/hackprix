import React from 'react'

const QuestionComponent = ({ question, response, grade, remark }) => {
    return (
        <div>
            <h1>Question:</h1>
            <p>{question}</p>
            <h1>Response:</h1>
            <p>{response}</p>
            <h1>Grade:</h1>
            <p>{grade}</p>
            <h1>Remark:</h1>
            <p>{remark}</p>
        </div>
    )
}

export default QuestionComponent
