import { Box, Button, Image, Text, ButtonGroup, Checkbox } from '@chakra-ui/react';
import { FaXbox, FaApple, FaFacebook } from "react-icons/fa";
import CButton from './components/CButton';
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
        <ButtonGroup>
          <CButton bgColor={'#1877f2'} icon={<FaFacebook />}></CButton>
          <CButton bgColor={'white'} icon={<Image src={GoogleLogo} width={'15px'}/>}></CButton>
          <CButton bgColor={'black'} icon={<FaApple />}></CButton>
          <CButton bgColor={'#107c10'} icon={<FaXbox />}></CButton>
        </ButtonGroup>
        <Box width={'100%'} display={'flex'} alignItems={'center'} >
              <Checkbox colorScheme='red' sx={{
                
                textAlign:'center',
                fontFamily:'Montserrat',
                fontWeight:'600',
                
                letterSpacing:'-5',
              }}>
                  <Text fontSize='13px' height={'fit-content'}>Stay signed in</Text>
              </Checkbox> 
        </Box>
        
      </Box>
    </Form>
  );
}

export default App;
