import { Center, Text } from 'native-base';

export function SignIn() {
  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além{'\n'}
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  );
}