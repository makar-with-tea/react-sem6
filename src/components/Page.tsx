import React from 'react';
import { Container, Stack } from '@mui/material';
import Article from './Article';

// примеры статей
const articles = [
  { title: 'Why purple is the best color?', content: 'Because it\'s pretty :< I Think that\'s enough of an explanation.' },
  { title: 'Cats or dogs?', content: 'Both. Both are good.' },
  { title: 'What is the meaning of life?', content: '42' },
  { title: 'What am I doing with my life?', content: 'I don\'t know, but you\'re reading this article.' },
  { title: 'A.', content: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},
 ];

 // страница со статьями
const Page: React.FC = () => {
  return (
    <Container>
      <Stack spacing={2}>
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            content={article.content}
            isOdd={index % 2 === 0}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Page;