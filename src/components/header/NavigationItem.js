import React from 'react';
import CodeSVG from '../commons/svg/CodeSVG';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import PrSVG from '../commons/svg/PrSVG';
import ProjectSVG from '../commons/svg/ProjectSVG';
import InsightsSVG from '../commons/svg/InsightsSVG';



const NavigationItem = ({
  name, selected, value, url,
}) => (
  <div className={selected ? "nav_wrapper selected" : "nav_wrapper unselect"}>
    {name === 'Code' && <CodeSVG /> }
    {name === 'Issues' && <IssueOpenedSVG selected />}
    {name === 'Pull Requests' && <PrSVG />}
    {name === 'Projects' && <ProjectSVG />}
    {name === 'Insights' && <InsightsSVG />}
    <a className='nav_a' href={url}>{name}</a>
    { value
      ? <span className='nav_Item'>{value}</span>
      : <span>{value}</span>
    }
  </div>
);

export default NavigationItem;
