import {Card, Step, StepLabel, Stepper} from "@mui/material";
import {useState} from "react";
import ContactStep from "./components/ContactStep";
import QuestionStep from "./components/QuestionStep";

export const BoardApplication = () => {
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    const [currentStep, setCurrentStep] = useState(0);

    const next = () => {
        console.log("next")
        setCurrentStep(currentStep + 1);
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
        <ContactStep onSubmit={next}/>
    ];

    questions.forEach((question, index) => {
        const num = index + 1;
        steps.push(<QuestionStep onSubmit={next} label={question} inputLabel={`Question #${num}`}
                                 name={`question${num}`}/>)
    });

    const stepperLabels = [
        'Contact Info',
        'Questions'
    ];

    return (
        <Card sx={{maxWidth: '40rem', margin: 'auto', borderRadius: 4}}>
            <Stepper sx={{px: 5, pt: 3}} activeStep={currentStep}>
                {stepperLabels.map(step => {
                    const completed = currentStep >= steps.length;

                    return (
                        <Step key={step} completed={completed}>
                            <StepLabel>
                                {step === 'Questions' && (
                                    <>
                                        {(currentStep === 0 || currentStep === steps.length) &&
                                        'Questions'}
                                        {(currentStep !== 0 && currentStep < steps.length) &&
                                        `Questions (${currentStep}/${steps.length - 1})`}
                                    </>
                                )}
                                {step !== 'Questions' && step}
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {steps[currentStep]}
        </Card>
    );
};
