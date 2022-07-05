import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import AppLoader from "src/components/AppLoader";
import { LOGIN_ACTION } from "../../../store/actions";

const Login = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const authLoading = useSelector((state) => state.auth.loading);

  const authError = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456789");

  const handleLogin = async () => {
    dispatch(await LOGIN_ACTION(emailAddress, password));

    if (token) {
      navigate("/");
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      {authLoading && <AppLoader visible={authLoading} />}
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email Address"
                        autoComplete="username"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.currentTarget.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          onClick={() => handleLogin()}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "100%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>AUTO CLUB</h2>
                    <p>
                      Heaven for Car Lovers Powered By Usman Bajwa,Click on Link
                      below for Lookinto how we do things
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        REGISTER!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
