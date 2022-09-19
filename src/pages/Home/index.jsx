import { useState, useEffect } from "react";

import { Loading } from "../../components/Loading";
import { getApiData } from "../../services/api";

import * as S from "./style";

export const Home = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const useApiData = async () => {
      try {
        setLoading(true);
        setDados(await getApiData("produto"));
      } catch (erro) {
        setError("um erro ocorreu");
      } finally {
        setLoading(false);
      }
    };

    useApiData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <S.Wrapper>
        <S.WrapperProducts>
          {dados?.map((item) => (
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
