import * as S from "./style";

export const Header = () => {
  return (
    <nav>
      <S.Container>
        <S.ListNav>
          <li>
            <S.StyleLink to="/">Produtos</S.StyleLink>
          </li>
          <li>
            <S.StyleLink to="contato">Contato</S.StyleLink>
          </li>
        </S.ListNav>
      </S.Container>
    </nav>
  );
};
