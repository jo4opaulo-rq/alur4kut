import styled from 'styled-components'

//const Title = styled.h1`
//  font-size: 50px;
// color: ${({ theme }) => theme.colors.primary};
//`


const Box= styled.div`
  background: #686468;
  border-radius: 8px;
`;

const MainGride= styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;


  @media(min-width: 860px){
    grid-template-areas: "perfil bemvindo comunidade";
    grid-template-columns:160px 618px 312px;


  }

`;
export default function Home() {
  return (
    
  <MainGride>
    <img src="https://twitter.com/beyonce/photo"/>
      <Box style={"grid-area: perfil;"}>
        Imagem
        <img src="d.png"/ >
      </Box>

      <Box style={"gride-area: bemvindo;"}>
        Bem-vinde
      </Box>

      <Box>

        Comundidades

      </Box>
    </MainGride>
  )
}
