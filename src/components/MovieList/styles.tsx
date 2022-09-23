import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 1em;
  padding-bottom: 8rem;
  min-height: 100%;
  padding-bottom; 6%;
`;

export const List = styled.div`
margin: 20px 0px;
h2 {
  color: white;
  margin-bottom: 10px;
  font-weight: 400px;
}
`;

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
grid-gap: 15px;
`

export const Error = styled.div`
margin: 20px 0px;
h3 {
  color: white;
  margin-bottom: 10px;
  font-weight: 400;
}
`