import React from "react";
import {Card, Step, StepLabel, Stepper} from "@mui/material";
import {useEffect, useState} from "react";
import ContactStep from "./components/ContactStep";
import QuestionStep from "./components/QuestionStep";
import ReviewStep from "./components/ReviewStep";
import {Input, MultiStepLabel} from "../components";

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

    useEffect(() => {
        setQuestions([
            {
                name: "question1",
                inputs: [
                    {
                        name: "question1",
                        label: "Tell us a bit about you and your background.",
                        inputLabel: "Question 1"
                    }
                ]
            },
            // {
            //     name: "question2",
            //     inputs: [
            //         {
            //             name: "question2",
            //             label: "Why are you interested in being on the board?",
            //             inputLabel: "Question 2"
            //         }
            //     ]
            // },
            // {
            //     name: "question3",
            //     inputs: [
            //         {
            //             name: "question3",
            //             label: "How often do you visit Camp?",
            //             inputLabel: "Question 3"
            //         }
            //     ]
            // },
            // {
            //     name: "question4",
            //     inputs: [
            //         {
            //             name: "question4",
            //             label: "What do you see as Camp's greatest need?",
            //             inputLabel: "Question 4"
            //         }
            //     ]
            // },
            // {
            //     name: "question5",
            //     inputs: [
            //         {
            //             name: "question5",
            //             label: "What do you see as your role on the board?",
            //             inputLabel: "Question 5"
            //         }
            //     ]
            // },
            // {
            //     name: "question6",
            //     inputs: [
            //         {
            //             name: "question6",
            //             label: "What makes you excited about Camp?",
            //             inputLabel: "Question 6"
            //         }
            //     ]
            // },
            // {
            //     name: "question7",
            //     inputs: [
            //         {
            //             name: "question7",
            //             label: "What other volunteer commitments do you have? Do you have any experience being on a board?",
            //             inputLabel: "Question 7"
            //         }
            //     ]
            // }
        ]);
    }, []);

    useEffect(() => {
        setSteps([
            {
                label: 'Contact Info',
                name: 'contact-info',
                inputs: [
                    {
                        name: "name",
                        label: "Name"
                    },
                    {
                        name: "Email",
                        label: "Email"
                    },
                    {
                        name: "phone",
                        label: "Phone Number"
                    }
                ]
            },
            {
                label: "Questions",
                name: "questions",
                substeps: questions
            },
            {
                label: 'Review',
                name: 'review'
            }
        ]);
    }, [questions]);

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
