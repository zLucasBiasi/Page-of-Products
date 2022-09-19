import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { getApiData } from "../../services/api";

import * as S from "./style";

export const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { item } = useParams();

  useEffect(() => {
    const useApiData = async () => {
      try {
        setLoading(true);
        setProduto(await getApiData(`produto/${item}`));
      } catch (erro) {
        setError("um erro ocorreu");
      } finally {
        setLoading(false);
      }
    };

    useApiData();
  }, [item]);

  if (loading) return <Loading />;

  if (error) return <p>{error}</p>;

  return (
    <>
      <S.Wrapper>
        <S.Title>{produto?.nome}</S.Title>
        <S.Price>R$ {produto?.preco}</S.Price>
        <S.Description>{produto?.descricao}</S.Description>
        <S.ImageWrap>
          {produto?.fotos.map((item) => (
            <S.Image key={item.src} src={item.src} />
          ))}
        </S.ImageWrap>
      </S.Wrapper>
    </>
  );
};
