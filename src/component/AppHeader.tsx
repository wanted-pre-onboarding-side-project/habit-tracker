import { Box, Heading, Text } from '@chakra-ui/react';

const AppHeader = () => {
  return (
    <Box>
      <Heading>HABIT TRACKER</Heading>
      <Text mt="5">- 습관은 만들어지는 것이다.</Text>
    </Box>
  );
};

export default AppHeader;

//  TODO
//
//  앞에 유저 이름을 넣을 수 있게, 그리고 유저가 원하는 문구를 사용할 수 있게 하면 좋을 듯
//  이슈에 넣어보기
//  <Heading>{userName}'s HABIT TRACKER</Heading>
//  <Text mt="5">{userPhrase}</Text>
