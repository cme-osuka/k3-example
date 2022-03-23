import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../stores/auth/atom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useRecoilState(authState);

  // username: mor_2314
  // password: 83r5^_

  function login(username, password) {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => setAuth({
        ...auth,
        token: json.token
      }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div>
      <p>{auth.token}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Logga in</button>
      </form>
    </div>
  );
}

export default Login;
