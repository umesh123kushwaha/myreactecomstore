import styled from "styled-components";

export const Button= styled.button`
    text-decoration: none;
    max-width: auto;
    background-color: rgb(98 84 243);
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    transition: all 0.3s ease;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover{
        /* transform: scale(0.96); */
        background-color: rgb(98 88 245);
       
        /* box-shadow: 0 2rem 2rem 0 ${({ theme }) => theme.colors.shadowSupport}; */
        
    }
    &:active{
        transform: scale(0.90);
        
    }

`