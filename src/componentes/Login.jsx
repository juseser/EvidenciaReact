import React from 'react'
import logo from '../img/logo.png'

export const Login = () => {
  return (
    <>
        <div className="section"></div>
        <center>
            <img className="responsive-img" src={logo} /> 
            <div className="section"></div>
            <div className="container">
                <div className="z-depth-1 grey lighten-4 row" >
                    <form className="col s12" action="../../vistas/inicio/inicio.html" method="post" onsubmit="return validarFormulario();">
                        <div className='row'>
                            <div className='col s12'></div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input className='validate' type='email' name='email' id='email' />
                                <label htmlFor='email'>Ingrese su Correo</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input className='validate' type='password' name='password' id='password' />
                                <label htmlFor='password'>Ingrese su Clave</label>
                            </div>
                            <label>
                                <a className='pink-text' href='#!'><b>Olvido su clave?</b></a>
                            </label>
                        </div>
                        <br />
                        <center>
                            <div className='row'>
                                <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect red darken-2' >Ingresar</button>
                            </div>
                        </center>
                    </form>
                </div>
            </div>
            <a href="../registro/registrosUsuario.html">Crear cuenta</a>
        </center>
    </>
  )
}
