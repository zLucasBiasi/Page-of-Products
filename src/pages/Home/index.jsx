import { Loading } from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { getApiData } from "../../services/api";

import * as S from "./style";

export const Home = () => {
  const { error, loading, data } = useFetch(getApiData("produto"));
  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <S.Wrapper>
        <S.WrapperProducts>
          {data?.map((item) => (
            <S.StyleLink key={item.id} to={`produto/${item.id}`}>
              <S.Image src={item.fotos[0].src} />
              <S.Title>{item.nome}</S.Title>
            </S.StyleLink>
          ))}
        </S.WrapperProducts>
      </S.Wrapper>
    </>
  );
};
