import {CardContent, CardActions, Button, Box} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import React from "react";

const FormStep = ({children, ...rest}) => {
    const {onSubmit, schema, content, inputs, showBack, onBack, style, defaultValues} = children;

    const {handleSubmit, formState: {errors}, register, getValues} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            ...defaultValues
        },
    });

    const childInputs = inputs?.map(child => {
        return child?.props?.name
            ? React.createElement(child.type, {
                ...{
                    ...child.props,
                    register: register,
                    key: child.props.name,
                    error: errors[child.props.name]
                }
            })
            : child;
    });

    const handleBackClick = () => {
        const values = getValues();
        onBack(values);
    };

    return (
        <form
            style={{width: '100%', ...style}}
            onSubmit={handleSubmit(onSubmit)}
            {...rest}>
            <CardContent
                sx={{
                    pt: 4,
                    px: 5,
                    pb: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}>
                {content}
                {childInputs}
            </CardContent>

            <CardActions>
                <Box sx={{ml: 'auto'}}>
                    {showBack && <Button onClick={handleBackClick}>Back</Button>}
                    <Button type="submit">Next</Button>
                </Box>
            </CardActions>
        </form>
    );
}

export default FormStep;
