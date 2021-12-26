import {FormStep, MultilineInput} from "../../components";
import * as yup from "yup";

const QuestionStep = ({onSubmit, onBack, label, inputLabel, name, defaultValues}) => {
    const schema = yup.object().shape({
        [name]: yup.string().required("This is a required field")
    });

    return (
        <FormStep>
            {{
                onSubmit,
                schema,
                inputs: [
                    <MultilineInput
                        label={label}
                        inputLabel={inputLabel}
                        name={name}/>
                ],
                sx: {mt: 3},
                showButtons: {
                    back: true,
                    next: true,
                },
                onBack,
                defaultValues
            }}
        </FormStep>
    )
}

export default QuestionStep;
