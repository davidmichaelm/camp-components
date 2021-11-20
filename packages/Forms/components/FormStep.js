import {CardContent, CardActions} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import React from "react";

const FormStep = ({children, ...rest}) => {
    const {onSubmit, schema, title, inputs, actions, style} = children;

    const {handleSubmit, formState: {errors}, register} = useForm({
        resolver: yupResolver(schema)
    });

    const childInputs = inputs.map(child => {
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
                {title}
                {childInputs}
            </CardContent>

            <CardActions>
                {actions}
            </CardActions>
        </form>
    );
}

export default FormStep;
