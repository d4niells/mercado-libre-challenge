import * as S from './styles';

type Props = {
  categories: string[];
};

const SectionCategories = ({ categories }: Props) => (
  <S.Container>
    {categories.map((category, index) => {
      const isLastIndex = categories.length - 1 === index;
      const concat = isLastIndex ? '' : '>';

      return (
        <S.Title key={`${index}-category`} isBold={isLastIndex}>
          {category} <span>{concat}</span>
        </S.Title>
      );
    })}
  </S.Container>
);

export default SectionCategories;
