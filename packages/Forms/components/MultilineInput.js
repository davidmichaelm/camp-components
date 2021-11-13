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
                error={error !== undefined}
                helperText={error?.message}
                label={inputLabel ? inputLabel : name}
                {...register(name, options)}
                {...rest}
            />
            {/*<InputBase
                multiline
                minRows={4}
                fullWidth
                placeholder="Enter your answer here"
                error={error !== undefined}
                sx={{
                    mt: 1,
                    padding: 2,
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: error
                        ? theme.palette.error.main
                        : theme.palette.action.disabled,
                    borderRadius: '4px'
                }}
                {...register(name, options)}
                {...rest}
            />*/}
        </Box>
    );
}

export default MultilineInput;
