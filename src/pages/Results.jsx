import QuestionComponent from "@/components/QuestionComponent"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Results = () => {

    const array = [
        {
            topic: "Check This",
            questions: [
                { question: "Is it accessible?", response: "Yes", grade: "A", remark: "Good job!" },
                { question: "Is it responsive?", response: "Yes", grade: "A", remark: "Good job!" },
                { question: "Is it performant?", response: "Yes", grade: "A", remark: "Good job!" }
            ]
        },
        {
            topic: "Check That",
            questions: [
                { question: "Is it accessible?", response: "No", grade: "B", remark: "Needs improvement!" },
                { question: "Is it responsive?", response: "Yes", grade: "A", remark: "Good job!" },
                { question: "Is it performant?", response: "Yes", grade: "A", remark: "Good job!" }
            ]
        }
    ];

    return (
        <Accordion type="single" collapsible>
            {array.map((item, index) => {
                return <AccordionItem key={index} value={index + 1}>
                    <AccordionTrigger>{item.topic}</AccordionTrigger>
                    <AccordionContent>
                        {item.questions.map((q, ind) => (
                            <QuestionComponent key={ind} {...q} />
                        ))}

                    </AccordionContent>
                </AccordionItem>
            })}
        </Accordion>

    )
}

export default Results
