// 로그인, 로그아웃
import React from "react";
import styled from "styled-components";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius: 0px;
  max-width: 350px;
  width: 100%;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 10px;
        &::placeholder {
          font-size: 8px;
          color: ${props => props.theme.lightGrayColor};
          opacity: 0.7;
          font-weight: 600;
        }
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default ({
  setAction,
  action,
  username,
  firstName,
  lastName,
  email,
  secret,
  onSubmit
}) => (
  <Wrapper>
    <Form>
      {action === "login" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"이메일 주소"} {...email} type="email" />
          <Button text={"로그인"} />
        </form>
      )}
      {action === "signUp" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"이메일 주소"} {...email} type="email" />
          <Input placeholder={"아이디"} {...username} />
          <Input placeholder={"사용자 성"} {...firstName} />
          <Input placeholder={"사용자 이름"} {...lastName} />
          <Button text={"가입"} />
        </form>
      )}
      {action === "confirm" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"시크릿 키를 입력하세요"} required {...secret} />
          <Button text={"인증하기"} />
        </form>
      )}
    </Form>
    <StateChanger>
      {action === "login" ? (
        <>
          계정이 없으신가요?&nbsp;&nbsp;
          <Link onClick={() => setAction("signUp")}>가입하기</Link>
        </>
      ) : (
        <>
          계정이 있으신가요?&nbsp;&nbsp;
          <Link onClick={() => setAction("login")}>로그인</Link>
        </>
      )}
    </StateChanger>
  </Wrapper>
);
