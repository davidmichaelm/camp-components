import React from "react";
import {FormStep} from "../../components";
import {Box, Typography} from "@mui/material";

const ReviewStep = ({onSubmit, onBack, steps, formResults}) => {

    const content = (
        <>
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

    return (
        <FormStep>
            {{
                content,
                onSubmit,
                onBack,
                sx: {mt: 3},
                showBack: true,
                submitText: "Submit"
            }}
        </FormStep>
    )
}

export default ReviewStep;
