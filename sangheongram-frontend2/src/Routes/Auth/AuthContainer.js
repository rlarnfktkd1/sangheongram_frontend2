// 로그인, 로그아웃
import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("login");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");
  const email = useInput("");
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });
  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "login") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("계정이 존재하지 않습니다. 회원가입을 진행해주세요");
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            toast.success("Check your mailbox for your login secret");
            setTimeout(() => setAction("confirm"), 1000);
          }
        } catch {
          toast.error("시크릿키 요청을 실패했습니다. 다시 시도해주세요");
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          console.log(createAccount);
          if (!createAccount) {
            toast.error("계정 생성에 실패했습니다. 다시 시도해주세요");
          } else {
            toast.success("계정 생성 성공! 로그인을 진행해주세요");
            setTimeout(() => setAction("login"), 3000);
          }
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error("All field are required");
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      secret={secret}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
