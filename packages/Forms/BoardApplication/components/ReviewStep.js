import React from "react";
import {FormStep} from "../../components";
import {Box, Typography, Alert} from "@mui/material";

const ReviewStep = ({onSubmit, onBack, steps, formResults, finished, error}) => {

    const content = (
        <>
            {error &&
                <Alert severity="error">
                    Sorry, something went wrong. Please try submitting again. If this error persists, please contact the website administrator.
                </Alert>
            }
            <Typography variant="h4">Review</Typography>
            {steps.map(step => {
                const stepResults = formResults[step.name];
                if (!stepResults) return;

                const inputs = step.inputs
                    ? step.inputs
                    : step.substeps.reduce((inputCollection, substep) => {
                        return [...inputCollection, ...substep.inputs]
                    }, []);

                return (
                    <Box key={step.name}>
                        <Typography variant="h6" fontWeight="bold">{step.label}</Typography>
                        {inputs.map(input => (
                            <React.Fragment key={input.name}>
                                <Typography component="span" fontWeight="bold">{input.label}</Typography>
                                {' '}
                                <Typography sx={{pt: 0}}>{stepResults[input.name]}</Typography>
                            </React.Fragment>
                        ))}
                    </Box>
                )
            })}
        </>
    );

    const finishedContent = (
        <Box>
            <Typography variant="h4">
                Thank you!
            </Typography>
            <Typography sx={{pt: 1, pb: 2}}>
                Your submission has been received.
                Someone will reach out to you soon regarding your application.
            </Typography>
        </Box>
    );

    return (
        <FormStep>
            {{
                content: finished ? finishedContent : content,
                onSubmit,
                onBack,
                sx: {mt: 3},
                showButtons: {
                    back: !finished,
                    next: !finished
                },
                submitText: "Submit"
            }}
        </FormStep>
    )
}

export default ReviewStep;
