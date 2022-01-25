import styled from 'styled-components'

const Wrapper = styled.div`
width:100vw;
min-height:100px;
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,0);
`
const Search = styled.div`
width:95%;
min-height:55px;
display:flex;
background:  #3F4354;
border-radius:20px;
`
const Icon = styled.div`
width:55px;
min-height:55px;
display:flex;
justify-content:center;
align-items:center;

& > svg {
height:60%;
width:60%;
fill: #03CC90;
}

`
const Input = styled.div`
width:calc(100% - 100px);
min-height:55px;
display:flex;
justify-content:center;
align-items:center;
margin:0 auto 0 0;
background: ;

& > input{
width:100%;
height:100%;
color: #03CC90;
background: transparent;
border:none;
font-size:1.2rem;
text-align:center;
:focus{
outline:none;
}

}
}

`

export {
    Wrapper,
    Search,
    Icon,
    Input
}