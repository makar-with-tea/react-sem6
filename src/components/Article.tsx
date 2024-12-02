import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Article.scss';

// интерфейс для статьи
interface AccordionArticleProps {
  title: string;
  content: string;
  isOdd: boolean;
}

// статья
const Article: React.FC<AccordionArticleProps> = ({ title, content, isOdd }) => {
  return (
    <Accordion className={`article ${isOdd ? 'odd' : 'even'}`}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Article;