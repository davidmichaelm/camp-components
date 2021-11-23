import {Card, Step, StepLabel, Stepper} from "@mui/material";
import {useEffect, useState} from "react";
import ContactStep from "./components/ContactStep";
import QuestionStep from "./components/QuestionStep";
import ReviewStep from "./components/ReviewStep";
import {MultiStepLabel} from "../components";

export const BoardApplication = () => {
    const [questions, setQuestions] = useState([]);
    const [steps, setSteps] = useState([]);

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentSubstepIndex, setCurrentSubstepIndex] = useState(0);

    const [formResults, setFormResults] = useState({});

    const currentStep = steps[currentStepIndex];
    const currentSubstep = currentStep?.substeps
        ? currentStep.substeps[currentSubstepIndex]
        : null;

    const next = (data) => {
        if (currentStep.substeps && currentSubstepIndex + 1 < currentStep.substeps.length) {
            setCurrentSubstepIndex(currentSubstepIndex + 1);
        } else {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const previous = (data) => {
        if (currentStep.substeps && currentSubstepIndex !== 0) {
            setCurrentSubstepIndex(currentSubstepIndex - 1);
        } else {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    }

    useEffect(() => {
        setQuestions([
            "Tell us a bit about you and your background.",
            "Why are you interested in being on the board?",
            "How often do you visit Camp?",
            "What do you see as Camp's greatest need?",
            "What do you see as your role on the board?",
            "What makes you excited about Camp?",
            "What other volunteer commitments do you have? Do you have any experience being on a board?"
        ]);
    }, []);

    useEffect(() => {
        setSteps([
            {
                label: 'Contact Info'
            },
            {
                label: 'Questions',
                substeps: questions
            },
            {
                label: 'Review'
            }
        ]);
    }, [questions]);

    console.log(currentStep?.label)

    return (
        <Card sx={{maxWidth: '40rem', margin: 'auto', borderRadius: 4}}>
            <Stepper sx={{px: 5, pt: 3}} activeStep={currentStepIndex}>
                {steps.map((step, index) => {
                    return <Step key={step.label}>
                        {!step.substeps &&
                        <StepLabel>{step.label}</StepLabel>
                        }
                        {step.substeps && (
                            <MultiStepLabel
                                name={step.label}
                                currentStep={currentStepIndex === index ? currentSubstepIndex + 1 : null}
                                totalSteps={step.substeps.length}
                            />
                        )}</Step>;
                })}
            </Stepper>

            {currentStep?.label === 'Contact Info' &&
            <ContactStep onSubmit={(data) => next(data)}/>}

            {currentStep?.label === 'Questions' &&
            <QuestionStep
                onSubmit={(data) => next(data)}
                onPrevious={(data) => previous(data)}
                label={currentSubstep}
                inputLabel={`Question #${currentSubstepIndex + 1}`}
                name={`question${currentSubstepIndex + 1}`}
            />}

            {currentStep?.label === 'Review' &&
            <ReviewStep onSubmit={() => console.log("done")} onPrevious={previous} />}
        </Card>
    );
};
