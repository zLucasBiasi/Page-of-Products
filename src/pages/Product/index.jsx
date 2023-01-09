import { Loading } from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { getApiData } from "../../services/api";
import { useParams } from "react-router-dom";

import * as S from "./style";

export const Product = () => {
  const { item } = useParams();
  const { data, loading, error } = useFetch(getApiData(`produto/${item}`));

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <S.Wrapper>
        <S.Title>{data?.nome}</S.Title>
        <S.Price>R$ {data?.preco}</S.Price>
        <S.Description>{data?.descricao}</S.Description>
        <S.ImageWrap>
          {data?.fotos?.map((item) => (
            <S.Image key={item.src} src={item.src} />
          ))}
        </S.ImageWrap>
      </S.Wrapper>
    </>
  );
};
