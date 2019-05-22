import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  font-size: 10px;
  color: ${props => props.theme.darkGreyColor};
  margin-left: 40px;
  font-weight: 800;
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">SANGHEONGRAM 정보 </Link>
      </ListItem>
      <ListItem>
        <Link href="#">지원</Link>
      </ListItem>
      <ListItem>
        <Link href="#">홍보 센터</Link>
      </ListItem>
      <ListItem>
        <Link href="#">API</Link>
      </ListItem>
      <ListItem>
        <Link href="#">채용정보</Link>
      </ListItem>
      <ListItem>
        <Link href="#">개인정보처리방침</Link>
      </ListItem>
      <ListItem>
        <Link href="#">약관</Link>
      </ListItem>
      <ListItem>
        <Link href="#">디렉터리</Link>
      </ListItem>
      <ListItem>
        <Link href="#">프로필</Link>
      </ListItem>
      <ListItem>
        <Link href="#">해시태그</Link>
      </ListItem>
      <ListItem>
        <Link href="#">언어</Link>
      </ListItem>
      <Copyright> &copy;{new Date().getFullYear()} SANGHEONGRAM</Copyright>
    </List>
  </Footer>
);
