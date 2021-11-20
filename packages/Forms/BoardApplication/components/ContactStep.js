import {FormStep, Input} from "../../components";
import * as yup from "yup";
import {Button, Typography} from "@mui/material";

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const schema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    Email: yup.string().email('Email must be a valid email').required('Email is a required field'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
});

const ContactStep = ({onSubmit}) => {
    return (
        <FormStep>
            {{
                onSubmit,
                schema,
                title: <Typography variant="h4">Contact Info</Typography>,
                inputs: [
                    <Input label="Name" name="name"/>,
                    <Input label="Email" name="Email"/>,
                    <Input label="Phone Number" name="phone"/>
                ],
                actions: <Button type="submit" sx={{ml: 'auto'}}>Next</Button>
            }}
        </FormStep>
    );
}

export default ContactStep;
