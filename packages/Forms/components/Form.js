import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';

const Form = ({defaultValues, children, onSubmit, schema}) => {
    const {handleSubmit, formState: {errors}, register} = useForm({
        resolver: yupResolver(schema),
        ...defaultValues
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map(children, child => {
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
            })}
        </form>
    );
}

export default Form;
