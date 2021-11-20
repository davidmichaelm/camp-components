import {Box, FormLabel, TextField, useTheme} from "@mui/material";

const MultilineInput = ({register, name, label, inputLabel, options, error, ...rest}) => {
    const theme = useTheme();

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <FormLabel
                sx={{
                    color: error
                        ? theme.palette.error.main
                        : theme.palette.text.secondary,
                    mb: 1
                }}
            >{label ? label : name}</FormLabel>
            <TextField
                multiline
                minRows={5}
                error={error !== undefined}
                helperText={error?.message}
                label={inputLabel ? inputLabel : name}
                {...register(name, options)}
                {...rest}
            />
        </Box>
    );
}

export default MultilineInput;
