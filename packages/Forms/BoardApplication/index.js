import {Card, Step, StepLabel, Stepper} from "@mui/material";
import {useState} from "react";
import ContactStep from "./components/ContactStep";
import QuestionStep from "./components/QuestionStep";
import ReviewStep from "./components/ReviewStep";
import {MultiStepLabel} from "../components";

export const BoardApplication = () => {
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentSubstepIndex, setCurrentSubstepIndex] = useState(0);

    const next = () => {
        setCurrentStepIndex(currentStepIndex + 1);
    };

    const nextSubstep = (totalSteps) => {
        if (currentSubstepIndex + 1 < totalSteps) {
            setCurrentSubstepIndex(currentSubstepIndex + 1);
        } else {
            next();
        }
    };

    const questions = [
        "Tell us a bit about you and your background.",
        "Why are you interested in being on the board?",
        "How often do you visit Camp?",
        "What do you see as Camp's greatest need?",
        "What do you see as your role on the board?",
        "What makes you excited about Camp?",
        "What other volunteer commitments do you have? Do you have any experience being on a board?"
    ];

    const steps = [
        {
            label: 'Contact Info',
            element: <ContactStep onSubmit={next}/>
        },
        {
            label: 'Questions',
            substeps: questions.map((question, index) => {
                const num = index + 1;
                return <QuestionStep
                    onSubmit={() => nextSubstep(questions.length)}
                    label={question}
                    inputLabel={`Question #${num}`}
                    name={`question${num}`}
                />
            })
        },
        {
            label: 'Review',
            element: <ReviewStep onSubmit={() => console.log("done")}/>
        }
    ];

    const currentStep = steps[currentStepIndex];
    const currentSubstep = currentStep?.substeps
        ? currentStep.substeps[currentSubstepIndex]
        : null;

    return (
        <Card sx={{maxWidth: '40rem', margin: 'auto', borderRadius: 4}}>
            <Stepper sx={{px: 5, pt: 3}} activeStep={currentStepIndex}>
                {steps.map((step, index) => {
                    return <Step key={step.label}>
                        {step.element &&
                        <StepLabel>{step.label}</StepLabel>
                        }
                        {(step.substeps && !step.element) && (
                            <MultiStepLabel
                                name={step.label}
                                currentStep={currentStepIndex === index ? currentSubstepIndex + 1 : null}
                                totalSteps={step.substeps.length}
                            />
                        )}</Step>;
                })}
            </Stepper>

            {currentStep?.element && currentStep.element}
            {(!currentStep?.element && currentStep?.substeps) &&
            currentSubstep
            }
        </Card>
    );
};
