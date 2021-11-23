import {FormStep, MultilineInput} from "../../components";
import * as yup from "yup";
import {Button} from "@mui/material";

const QuestionStep = ({onSubmit, onPrevious, label, inputLabel, name}) => {
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
                actions:
                    <>
                        <Button onClick={onPrevious} sx={{ml: 'auto'}}>Previous</Button>
                        <Button type="submit">Next</Button>
                    </>,
                sx: {mt: 3}
            }}
        </FormStep>
    )
}

export default QuestionStep;
