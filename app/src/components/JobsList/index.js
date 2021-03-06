import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function JobsList({ list }) {
  return (
    <ul id='job-list'>
      {
        list.map(job => {
          return <li key={job.id}>
            <div className='job-item-row'>
              <h4> <Link to="/#"> {job.title} </Link>  </h4>
              <span> {job.location} </span>
            </div>

            <div className='job-item-row'>
              <p> {job.company} - <strong> {job.type}</strong> </p>
              <span> {new Date(job.created_at).toLocaleDateString()} </span>
            </div>
          </li>
        })
      }
    </ul>
  )
}