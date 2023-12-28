import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function Layout({ children }: WrapperProps) {
  return (
    <Wrap>
      <Header />
      {children}
      <Footer />
    </Wrap>
  );
}
