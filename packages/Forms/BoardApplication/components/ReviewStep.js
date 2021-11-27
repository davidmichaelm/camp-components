import React from "react";
import {FormStep} from "../../components";
import {Typography} from "@mui/material";

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
                    <React.Fragment key={step.name}>
                        <Typography variant="h6">{step.label}</Typography>
                        {inputs.map(input => (
                            <div key={input.name}>{input.label}: {stepResults[input.name]}</div>
                        ))}
                    </React.Fragment>
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
                showBack: true
            }}
        </FormStep>
    )
}

export default ReviewStep;
