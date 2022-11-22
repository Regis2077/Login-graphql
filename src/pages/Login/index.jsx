import { Container } from './styles.js'
import { useMutation } from '@apollo/client';
import React, {useState} from 'react';
import { LOGIN_VALIDATION } from '../../graphql/mutation/authLogin';
import { useNavigate } from 'react-router-dom';

export  const Login = () => {
const navigate = useNavigate()
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const[signIn, {data, loading, error}]= useMutation(LOGIN_VALIDATION, { 
    variables: { input: formState}
    }
  );
  if(loading) return <>carregando...</>
  if(error) return <>tem algo errado</>
  if(data) navigate('/home')

  return (
    <Container>
    <form onSubmit={(e) => {
        signIn({ variables: {
          email: formState.email,
          password: formState.password
        }})
      }}> 
      <h2>Olá, entre com e-mail e senha.</h2>
      <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="email"
          placeholder="exemplo@email.com"
        />
        <input
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value
              })
            }
            type="password"
            placeholder="Digite sua senha"
          />
        <button
            
            type="submit"
          >
            Entrar
          </button>
      </form>
      
   </Container>
       
    
  )
}

