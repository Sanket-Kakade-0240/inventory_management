import React from "react";
import styled from "styled-components";

const Container = styled.div`
height: 60px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);
`;

const Wrapper = styled.div`
padding-bottom: 20px;

display: flex;
align-items: center;

`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
font-weight: bold;
margin-left: 25px;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left/>
        <Center>
          <Logo>IMS</Logo>
        </Center>
        <Right />
      </Wrapper>
    </Container>
  );
};

export default Navbar;