import {FormStep} from "../../components";
import {Button} from "@mui/material";

const ReviewStep = ({onSubmit, onPrevious}) => {
    return (
        <FormStep>
            {{
                onSubmit,
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

export default ReviewStep;
