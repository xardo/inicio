import { useState } from 'react';
import '../login.css';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <body>
      <main className={isSignUp ? 'sign-up-mode' : ''}>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form action="main.html" autoComplete="off" className="sign-in-form">
                <div className="logo">
                  <img src="/Assets/img4.png" alt="easyclass" />
                  <h4>Distorrink</h4>
                </div>

                <div className="heading">
                  <h2>{isSignUp ? 'Empecemos' : 'Bienvenido'}</h2>
                  <h6>{isSignUp ? '¿Ya tienes una cuenta?' : '¿No estás registrado?'}</h6>
                  <a href="#" className="toggle" onClick={toggleSignUp}>
                    {isSignUp ? 'Inicia sesión' : 'Regístrate'}
                  </a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="email"
                      required
                      id="email2"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      required
                      id="password-login"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                    />
                    <label>Contraseña</label>
                  </div>

                  <input type="submit" value="Inicia sesión" id="login" className="sign-btn" />

                  <p className="text">
                    ¿Olvidó su contraseña o sus datos de inicio de sesión?
                    <a href="/Views/Index/recoverd pasword/main.html">Consigue ayuda</a> Recuperando tu cuenta
                  </p>
                </div>
              </form>

              <form action="#" autoComplete="off" className="sign-up-form">
                <div className="logo">
                  <img src="/Assets/img4.png" alt="easyclass" />
                  <h4>Distorrink</h4>
                </div>

                <div className="heading">
                  <h2>{isSignUp ? 'Empecemos' : 'Bienvenido'}</h2>
                  <h6>{isSignUp ? '¿Ya tienes una cuenta?' : '¿No estás registrado?'}</h6>
                  <a href="#" className="toggle" onClick={toggleSignUp}>
                    {isSignUp ? 'Inicia sesión' : 'Regístrate'}
                  </a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Nombre</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="email"
                      required
                      id="email"
                      className="input-field"
                      autoComplete="off"
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      required
                      id="password-register"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                    />
                    <label>Contraseña</label>
                  </div>

                  <input type="submit" value="Regístrate" id="register" className="sign-btn" />

                  <p className="text">
                    Al registrarme, acepto los
                    <a href="#">Términos y condiciones</a> y
                    <a href="#">Política de privacidad</a>
                  </p>
                </div>
              </form>
            </div>

            <div className="carousel">
              <div className="images-wrapper">
                <img src="/Assets/img2.png" className="image img-1 show" alt="" />
                <img src="/Assets/img1.png" className="image img-2" alt="" />
                <img src="/Assets/img3.png" className="image img-3" alt="" />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    <h2>Consigue empleo adaptado para ti</h2>
                    <h2>Infórmate de las ofertas de trabajo</h2>
                    <h2>Sube tu hoja de vida ahora mismo</h2>
                  </div>
                </div>

                <div className="bullets">
                  <span className="active" data-value="1"></span>
                  <span data-value="2"></span>
                  <span data-value="3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Login;
