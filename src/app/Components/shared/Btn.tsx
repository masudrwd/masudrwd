import { Button } from '@chakra-ui/react';

const Btn = ({ children, ...props }: any) => {
   return <Button {...props}>{children}</Button>;
};

export default Btn;
