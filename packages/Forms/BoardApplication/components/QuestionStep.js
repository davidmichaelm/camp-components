import {FormStep, MultilineInput} from "../../components";
import * as yup from "yup";
import {Button} from "@mui/material";

const QuestionStep = ({onSubmit, label, inputLabel, name}) => {
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
                actions: <Button type="submit" sx={{ml: 'auto'}}>Next</Button>,
                sx: {mt: 3}
            }}
        </FormStep>
    )
}

export default QuestionStep;
