import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import arrow from "../img/arrow_next.png";
import {
  LoginStyled,
  FormStyled,
  LogoStyled,
  InputStyled,
  ForgotPassword,
  LoginBtn,
  SignInEmail,
  HrStyled,
  GoToHome,
  ArrowStyled,
} from "../styles/LoginStlye";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [user, setUserId] = useState({ email: null, password: null });
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  const gotoSignIn = () => {
    navigate("/signin");
  };
  const putInfo = (e, type) => {
    setUserId({
      ...user,
      [type]: e.target.value,
    });
  };
  //비밀번호, 이메일 틀렸을 때 alert창 보여주게끔 추가 -> 서버 api 수정 요청
  const handleLogin = (e) => {
    e.preventDefault();
    const response = axios.post("/auth/login", user);
    response
      .then((response) => {
        const { token } = response.data;
        console.log(token);
        axios.defaults.headers.common["Authorization"] = `${token}`;
        alert("로그인에 성공하였습니다.");
        goToHome();
      })
      .catch((error) => alert(error));
  };

  return (
    <LoginStyled>
      <LogoStyled alt="logo" src={logo} />
      <FormStyled>
        <InputStyled
          onBlur={(e) => {
            putInfo(e, "email");
          }}
          type="text"
          placeholder="이메일"
        />
        <InputStyled
          onBlur={(e) => {
            putInfo(e, "password");
          }}
          type="password"
          placeholder="비밀번호"
          maxLength={14}
        />

        <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
      </FormStyled>

      <SignInEmail onClick={gotoSignIn}>이메일로 회원가입</SignInEmail>

      <GoToHome onClick={goToHome}>
        <span>어플 둘러보기</span>
        <ArrowStyled alt="arrow" src={arrow} />
      </GoToHome>
    </LoginStyled>
  );
};
export default Login;
