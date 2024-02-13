import { Button } from "@chakra-ui/react";
const CButton = ({icon, bgColor}) => {
    return (
        <Button backgroundColor={bgColor} sx={{
            width:'60px',
            height:'26px',
            color:'white',
            boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75);",
            _hover: {
                bg:bgColor,
            }
        }}>{icon}</Button>
    )
}
export default CButton;