import { useState } from 'react';
import { Input } from "@chakra-ui/react";

const TextInput = ({ label }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Input
        placeholder={label}
        backgroundColor={'#ededed'}
        color={'#636363'}
        border={'none'}
        width={'17rem'}
        fontFamily={'montserrat'}
        fontSize={'10px'}
        fontWeight={700}
        textAlign='left'
        onFocus={handleFocus}
        onBlur={handleBlur}
        _focus={
            {
                border:"1px solid"
            }
        }
        _placeholder={{
          fontSize: isFocused ? '8px' : '12px',
          position: isFocused ? 'absolute' : 'relative',
          transform: isFocused ? 'translate(-0%, -100%)' : 'translate(-0%, -0%)',
          transition: 'fontSize 0.5s, top 0.1s, left 0.1s, transform 0.1s',
        }}
      />
    </div>
  );
};

export default TextInput;
