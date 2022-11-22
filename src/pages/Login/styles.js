import styled from "styled-components";

export const Container  = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 80px;

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 32px;
    gap: 40px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
  
  }
  h2{
    font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  }
  label{
   margin-top: 20px;
   margin-bottom: 8px
  }
  input{
    width: 340px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #87848F;
    border-radius: 5px;
    padding-left: 12px;
  }
  button{
    width: 352px;
    height: 48px;
    background: #2E046D;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border: none;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
  }

` 
