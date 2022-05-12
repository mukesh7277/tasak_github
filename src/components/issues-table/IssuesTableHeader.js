import React from 'react';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import CompletedSVG from '../commons/svg/CompletedSVG';
import "./Issue.css";


const otherValues = ['Author', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];


const IssuesTableHeader = () => (
  <div className='table_container'>
    <div className='open_issue_detail'>
      <span className="open_issue_a open_thread"
      >
        <IssueOpenedSVG />
            625 Open
      </span>
      <span className='open_issue_a close_thread'
        style={{ marginLeft: '10px' }}
      >
        <CompletedSVG color="#586069" hoverColor="#24292e" />
            10,104 closed
      </span>
    </div>
    <div className='other_detail'>
      {otherValues.map(value => {return(
        <span key={value} className='detail_value'>
        {value}
        {' '}
        <span className="down_arrow"/>
        {' '}
      </span>
      )})}
    </div>
  </div>
);

export default IssuesTableHeader;

