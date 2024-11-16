import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [registerbutton, setRegisterbutton] = useState(false);
  const [errorpass, setErrorpass] = useState(false);
  //const [editbutton, setEditbutton] = useState(false);
  return (
    <>
      <main>
        {/* ici on veut afficher les results si on clique sur le bouton submit et si on entre un name, un email conforme, un mot de passe et un conf mdp identique au mdp
          sinon on cache les results donc de base la partie results est caché */}
        <div
          className={
            registerbutton &&
            name &&
            email &&
            password &&
            confpassword &&
            password === confpassword
              ? "show"
              : "hideResults"
          }
        >
          <h1>Results</h1>
          <div className="results">
            <p> Name : {name} </p>
            <p>Email : {email} </p>
            <p>Password : {password} </p>
          </div>
          {/* ici le button edit permettera lorsque l'on cliquera dessus de remettre l'état du bouton submit 
          de l'interface create account à l'état false et va donc cacher l'interface result et afficher l'interface create account 
          car l'etat de registerButton sera a nouveau false  */}
          <button
            onClick={() => {
              setRegisterbutton(false);
            }}
            className="editButton"
          >
            {" "}
            Edit your informations{" "}
          </button>
        </div>
        {/* ici on va cacher linterface create account si on appui sur le bouton submit, et que les autres conditions sont respectés */}
        <div
          className={
            registerbutton &&
            password === confpassword &&
            name &&
            email &&
            password &&
            confpassword
              ? "hideForm"
              : "showForm"
          }
        >
          <h1>create Account</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              {
                password !== confpassword &&
                  alert("les mot de passes ne sont pas identiques");
              }
              {
                !name &&
                  !password &&
                  !confpassword &&
                  !email &&
                  alert("veuillez remplir toutes les cases");
              }
            }}
          >
            <div className="inputs">
              <p>Name</p>
              <input
                value={name}
                type="text"
                placeholder="Jean Dupont"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="input"
              />
            </div>
            <div className="inputs">
              <p>Email</p>
              <input
                value={email}
                type="email"
                placeholder="JeanDupont@email.com"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="input"
              />
            </div>
            <div className="inputs">
              <p>Password</p>
              <input
                type="password"
                placeholder="MotDePaSse2024"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className={
                  password !== confpassword && errorpass
                    ? "errorInput"
                    : "input"
                }
              />
            </div>
            <div className="inputs">
              <p>Confirm Password</p>
              <input
                type="password"
                placeholder="MotDePaSse2024"
                onChange={(event) => {
                  setConfpassword(event.target.value);
                }}
                className={
                  password !== confpassword && errorpass
                    ? "errorInput"
                    : "input"
                }
              />
              <p
                className={
                  password !== confpassword && errorpass
                    ? "errorMessage"
                    : "noErrorMessage"
                }
              >
                Les mot de passes ne sont pas identitques !
              </p>
            </div>
            <input
              type="submit"
              value="Register"
              onClick={() => {
                {
                  password === confpassword && name && email && password
                    ? setRegisterbutton(true)
                    : setRegisterbutton(false);
                }
                {
                  setErrorpass(true);
                }
              }}
              className="submit"
            />
          </form>
        </div>
      </main>
    </>
  );
};

export default App;
