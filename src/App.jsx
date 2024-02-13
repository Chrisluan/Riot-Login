import { Box, Button, Image, Text, ButtonGroup, Checkbox } from '@chakra-ui/react';
import { FaXbox, FaApple, FaFacebook } from "react-icons/fa";
import { useState } from 'react';
import Form from './components/Form';
import TextInput from './components/TextInput';
import Logo from './assets/Riot-Games-Logo.png';
import GoogleLogo from './assets/google-color-icon.svg';

function App() {
  return (
    <Form>
      <Image src={Logo} width={'6rem'} paddingBottom={12} paddingTop={10}/>
      <Box display={"flex"} alignItems={'center'} flexDir={'column'} gap={5}>
        <Box display={'flex'} flexDir={'column'} alignItems={'center'} rowGap={3}>
          <Text fontWeight={700} letterSpacing={-1} fontFamily={'montserrat'} fontSize={'1.2rem'}>
            Sign In
          </Text>
          <TextInput label={'USERNAME'}/>
          <TextInput label={'PASSWORD'}/>
        </Box>
        <ButtonGroup sx={{
          "&>*":{
            width:'60px',
            height:'27px',
            color:'white',
            boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75);",
          }
        }}>
          <Button backgroundColor={'#1877f2'}><FaFacebook /></Button>
          <Button backgroundColor={'white'}><Image src={GoogleLogo} width={'15px'}/></Button>
          <Button backgroundColor={'black'}><FaApple /></Button>
          <Button backgroundColor={'#107c10'}><FaXbox /></Button>
        </ButtonGroup>
        <Box width={'100%'} >
              <Checkbox colorScheme='red' sx={{
                textAlign:'center',
                fontFamily:'Montserrat',
                fontWeight:'600',
                letterSpacing:'-5',
              }}>
                  Stay signed In
              </Checkbox> 
        </Box>
        
      </Box>
    </Form>
  );
}

export default App;
