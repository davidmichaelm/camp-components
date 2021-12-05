import React from "react";
import {Card, Step, StepLabel, Stepper} from "@mui/material";
import {useState} from "react";
import ContactStep from "./components/ContactStep";
import QuestionStep from "./components/QuestionStep";
import ReviewStep from "./components/ReviewStep";
import {MultiStepLabel} from "../components";
import {sanityClient} from "@campphillip/common";
import steps from "./data/steps.json";

export const BoardApplication = () => {
    const questions = steps.find(step => step.name === "questions")?.substeps;

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentSubstepIndex, setCurrentSubstepIndex] = useState(0);
    const currentStep = steps[currentStepIndex];

    const [formResults, setFormResults] = useState({});

    const saveData = (data, stepName) => {
        setFormResults(prevState => {
            prevState[stepName] = {
                ...prevState[stepName],
                ...data
            }
            return prevState;
        });
    };

    const next = (data, stepName) => {
        if (data && stepName) {
            saveData(data, stepName);
        }

        if (currentStep.substeps && currentSubstepIndex + 1 < currentStep.substeps.length) {
            setCurrentSubstepIndex(currentSubstepIndex + 1);
        } else {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const back = (data, stepName) => {
        if (data && stepName) {
            saveData(data, stepName);
        }

        if (currentStep.substeps && currentSubstepIndex !== 0) {
            setCurrentSubstepIndex(currentSubstepIndex - 1);
        } else {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    }

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
            <ContactStep
                onSubmit={(data) => next(data, 'contact-info')}
                defaultValues={{
                    ...formResults['contact-info']
                }}
            />}

            {currentStep?.label === 'Questions' &&
            questions.map((question, index) => {
                return <React.Fragment key={question.name}>
                    {currentSubstepIndex === index &&
                    <QuestionStep
                        onSubmit={(data) => next(data, 'questions')}
                        onBack={(data) => back(data, 'questions')}
                        label={question.inputs[0].label}
                        inputLabel={question.inputs[0].inputLabel}
                        name={question.name}
                        defaultValues={{
                            [question.name]: formResults['questions']?.[question.name]
                        }}
                    />
                    }
                </React.Fragment>
            })}

            {currentStep?.label === 'Review' &&
            <ReviewStep
                onSubmit={() => console.log("done")}
                onBack={back}
                steps={steps}
                formResults={formResults}
            />}
        </Card>
    );
};
