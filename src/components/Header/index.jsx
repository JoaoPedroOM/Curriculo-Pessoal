import {Container,StyledLink} from "./styles"

export function Header({ativo}){
    return(
        <Container>
        <a href="/">
          <span>&lt;</span>
          <h3>João Pedro</h3>
          <span>&gt;</span>
        </a>

        <StyledLink to="/projetos">
          Projetos
          {ativo === true ? <span></span> : null}
        </StyledLink>
      </Container>
    )
}
