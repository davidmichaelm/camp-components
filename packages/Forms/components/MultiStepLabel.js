import {StepLabel} from "@mui/material";

const MultiStepLabel = ({name, currentStep, totalSteps}) => {
    return (
            <StepLabel>
                {(!currentStep || currentStep > totalSteps) &&
                name}
                {(currentStep && currentStep <= totalSteps) &&
                `${name} (${currentStep}/${totalSteps})`}
            </StepLabel>
    );
}

export default MultiStepLabel;
