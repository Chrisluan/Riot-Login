import { Box, IconButton, Input, InputRightElement } from "@chakra-ui/react";

const TextInput = ({label}) => {
    return (
            <Input
            placeholder={label}
            backgroundColor={'#ededed'}
            color={'#636363'}
            border={'none'}
            width={'17rem'}
            fontFamily={'montserrat'}
            fontSize={'10px'}
            fontWeight={700}
            >
            
            </Input>
    )
}
export default TextInput;