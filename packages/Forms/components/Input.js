import {TextField} from "@mui/material";

const Input = ({register, name, label, options, error, ...rest}) => {
    return <TextField
        fullWidth
        error={error !== undefined}
        helperText={error?.message}
        label={label ? label : name}
        {...register(name, options)}
        {...rest}
    />;
};

export default Input;
