import React, { PropTypes } from 'react';
import { BookcaseItem } from 'components/BookcaseItem';

export const BookcaseList = ({
  bookcases,
  group
}) => {
  console.log(bookcases);
  return (<div>
    <h2>Книжные полки {group === 'work' ? 'произведений' : 'изданий'}</h2>
    <ul>
    {bookcases.filter(bookcase => bookcase.group === group).sort((a, b) => a.order > b.order).map(bookcase =>
      <BookcaseItem key={bookcase.bookcase_id} bookcase={bookcase} />
    )}
    </ul>
  </div>);
}

BookcaseList.propTypes = {
  bookcases : PropTypes.array,
  group: PropTypes.string
};
