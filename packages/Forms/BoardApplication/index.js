import React from "react";
import {Paper, CircularProgress, Step, StepLabel, Stepper, Box, Typography} from "@mui/material";
import {useState, useEffect} from "react";
import ContactStep from "./components/ContactStep";
import QuestionStep from "./components/QuestionStep";
import ReviewStep from "./components/ReviewStep";
import {MultiStepLabel} from "../components";
import {db} from "./firestore";
import {collection, addDoc, doc, getDoc} from "firebase/firestore";
import TempContent from "./components/TempContent";
import ErrorIcon from '@mui/icons-material/Error';

export const BoardApplication = () => {
    const [steps, setSteps] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const questions = steps.find(step => step.name === "questions")?.substeps;

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentSubstepIndex, setCurrentSubstepIndex] = useState(0);
    const currentStep = steps[currentStepIndex];

    const [formResults, setFormResults] = useState({});
    const [finished, setFinished] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    useEffect(() => {
        const fetchSchema = async () => {
            setLoading(true);
            const docRef = doc(db, "forms/boardApplications");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const steps = docSnap.data().schema;
                steps.push({
                    label: "Review",
                    name: "review"
                });
                setSteps(steps);
            } else {
                setError(true);
            }

            setLoading(false);
        };
        fetchSchema();
    }, []);

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

    const onSubmit = async () => {
        const doc = {
            _type: "BoardApplication"
        };

        for (const step in formResults) {
            for (const field in formResults[step]) {
                doc[field] = formResults[step][field];
            }
        }

        try {
            await addDoc(collection(db, "forms/boardApplications/submissions"), doc);
            next();
            setFinished(true);
        } catch (e) {
            setSubmitError(true);
            console.error("Error adding document:", e);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <Paper sx={{ flex: 1, maxWidth: '55rem', margin: 'auto'}} elevation={0}>
            {loading &&
                <TempContent>
                    <Typography>Form loading...</Typography>
                    <CircularProgress/>
                </TempContent>
            }
            {error &&
                <TempContent>
                    <ErrorIcon color="error" sx={{fontSize: 75}}/>
                    <Box sx={{textAlign: "center"}}>
                        <Typography variant="h5">Sorry, something went wrong</Typography>
                        <Typography>Try reloading the page. If the issue persists, please contact Camp
                            Phillip.</Typography>
                    </Box>
                </TempContent>
            }
            {!loading && !error &&
                <>
                    <Stepper sx={{pt: 3}} activeStep={currentStepIndex}>
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

                    {currentStep?.name === 'contact-info' &&
                        <ContactStep
                            onSubmit={(data) => next(data, 'contact-info')}
                            defaultValues={{
                                ...formResults['contact-info']
                            }}
                        />}

                    {currentStep?.name === 'questions' &&
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

                    {(currentStep?.name === 'review' || finished) &&
                        <ReviewStep
                            onSubmit={onSubmit}
                            onBack={back}
                            steps={steps}
                            formResults={formResults}
                            finished={finished}
                            error={submitError}
                        />}
                </>
            }
        </Paper>
        </Box>
    );
};
