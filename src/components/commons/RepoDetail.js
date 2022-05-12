import React from 'react';
import WatchSVG from './svg/WatchSVG';
import StarSVG from './svg/StarSVG';
import ForkSVG from './svg/ForkSVG';
import "../issues-table/Issue.css"
import "./RepoDetails.css"


const RepoDetail = ({ tag, value }) => (
  <div className="detail_container">
    <span className="tag_container">
      { tag === 'Watch' && <WatchSVG /> }
      { tag === 'Star' && <StarSVG /> }
      { tag === 'Fork' && <ForkSVG /> }

      {tag}
      <span className="down_arrow"/>
    </span>
    <span className="value_container">{value}</span>
  </div>
);


export default RepoDetail;


