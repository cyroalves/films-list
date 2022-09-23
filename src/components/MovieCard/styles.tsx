import styled from 'styled-components';

export const Item = styled.div`
background: #1a242f;
cursor: pointer;
transition: all 0.3s;

&:hover {
  transform: scale(1.1);
  transition: all 0.3s;
}
`;

export const Top = styled.div`
height: 20em;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Bottom = styled.div`
padding: 20px;
`

export const Info = styled.div`
color: white;
  h4 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`