import {FormStep} from "../../components";
import {Button} from "@mui/material";

const ReviewStep = ({onSubmit}) => {
    return (
        <FormStep>
            {{
                onSubmit,
                actions: <Button type="submit" sx={{ml: 'auto'}}>Submit</Button>,
                sx: {mt: 3}
            }}
        </FormStep>
    )
}

export default ReviewStep;
