import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../stores/auth/atom";

export const useAccessDenied = () => {
  const navigate = useNavigate();
  const { token } = useRecoilValue(authState);

  useEffect(() => {
    if (!token) navigate("/login");
  }, []);
};
