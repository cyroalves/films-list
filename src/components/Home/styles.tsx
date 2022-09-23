import styled from 'styled-components';

export const Wrapper = styled.div`
color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0 1rem;
`;

export const List = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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