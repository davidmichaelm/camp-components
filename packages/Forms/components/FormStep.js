import {Button, Box} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import React from "react";

const FormStep = ({children, ...rest}) => {
    const {onSubmit, schema, content, inputs, showButtons, onBack, style, defaultValues, submitText} = children;

    const {handleSubmit, formState: {errors}, register, getValues} = useForm({
        resolver: schema ? yupResolver(schema) : null,
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
            <Box
                sx={{
                    pt: 4,
                    pb: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}>
                {content}
                {childInputs}
                <Box sx={{ml: 'auto', display: 'flex', gap: 1}}>
                    {showButtons.back && <Button onClick={handleBackClick} size="large" variant="outlined">Back</Button>}
                    {showButtons.next && <Button type="submit" size="large" variant="contained">{submitText ? submitText : "Next"}</Button>}
                </Box>
            </Box>


        </form>
    );
}

export default FormStep;
