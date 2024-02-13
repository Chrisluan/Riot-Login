import { Box } from '@chakra-ui/react';

const Form = ({children}) => {
    return (
        <Box
            padding={'1rem'}
            position="fixed"
            left={0}
            top={0}
            bottom={0}
            width="22rem"
            display={'flex'}
            alignItems={'center'}
            flexDir={'column'}
            backgroundColor="#f9f9f9"
            zIndex={10} 
        >
           {children}
        </Box>
    );
};

export default Form;
