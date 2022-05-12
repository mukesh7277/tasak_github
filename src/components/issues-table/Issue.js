import React from 'react';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import Labels from './Labels';


const Issue = ({
  issue: {
    title, number, created_at, user: { login }, labels,
  },
}) => (
  <div className='issue_wrapper'>
    <div className="issue_subwrap">
      <div className='issue_open'>
        <IssueOpenedSVG color="#28a745" />
      </div>
      <div className='issue_title'>
          {title}
        <Labels labels={labels} />
      </div>
    </div>

    <div className='issue_open'> 
      <span>#{number}{' '}opened{' '}{created_at}{' '}ago by{' '}
        <a className="issue_a" href={`https://github.com/facebook/react/issues/created_by/${login}`}>
          {login}
        </a>
      </span>

    </div>
  </div>);

export default Issue;
