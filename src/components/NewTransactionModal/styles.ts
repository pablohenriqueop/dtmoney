import styled from "styled-components";

import { transparentize } from "polished";

export const Container = styled.form`

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: var(--border-radius);
        
        background: #e7e9ee;
        border: 1px solid #d7d7d7;

        font-weight: 400;
        font-size: 1.6rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }

    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background:  var(--green);
        color: #ffffff;
        border-radius: 0.25rem;
        border: 0;
        margin-top: 1rem;
        font-weight: 600;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .transaction-type{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        margin-top: 1rem;

    }
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'red' | 'green';
}

const colors = {
    red: '#E62E4D',
    green:'#33CC95'
}

export const RadioBox = styled.button<RadioBoxProps>`

           width: 100%;
           padding: 0 1.5rem;
           height: 4rem;
           border-radius: 0.25rem;
           border: 1px solid #d7d7d7;
           background: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};
           display: flex;
           align-items: center;
           justify-content: center;
           color: var(--text-title);
           font-size: 1rem;

           transition: all 0.2s;

            &:hover {
                filter: brightness(0.8);
            }

           img {
            margin-right: 1.6rem;
           }
        
        
`