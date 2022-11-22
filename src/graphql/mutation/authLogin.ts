import { gql } from "@apollo/client"

export const LOGIN_VALIDATION= gql`
  mutation singIn($input: SignInInput!){
    signIn(input: $input){
    token
      user{
        email
        name
      }
    }
  }
`