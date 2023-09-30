import styled from "styled-components";

export const StyledButton = styled.button`
background-color: ${(props) => (props.navbar ? 'black' : props.edit ? 'transparent' : '#007bff')};
color:white;
border:none;
border-radius:5px;
margin:10px;
padding:10px 20px;
cursor: pointer;
&:hover{
    background-color:#0056b3
}
`

export const StyledNav = styled.div`
display:flex;
justify-content:space-between;
background-color:rgb(240,242,244);
border-radius:8px;
padding:5px;
margin:10px

`

export const StyledInput = styled.input`
border:none;
border-bottom: 2px solid #007bff;
padding:5px;
background-color:transparent;
margin-left:10px;
`
export const StyledLi = styled.li`
list-style:none
`
export const StyledToDoStatus = styled.button`
color:${props => (props.done ? 'rgb(0,102,68)' : 'rgb(66,82,110)')};
background-color:${props => (props.done ? 'rgb(227,252,239)' : 'rgb(223,225,230)')};;
border:1px solid black;
border-radius:2px;
font-weight:700;
margin-top:3px
`

export const StyledContainer = styled.div`
display:flex;
justify-content:space-between;
margin:20px 100px 20px 60px;
border-style:solid;
padding:15px;
border-radius:5px;
`