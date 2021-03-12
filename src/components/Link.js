import React from 'react';

function Link() {
    return (
        <div>
        To see the current guidance from the scottish government go{' '}
        <a
          className="App-link"
          href="https://www.gov.scot/coronavirus-covid-19/"
          target="_blank"
          rel="noreferrer"
        >
         here
        </a>
    </div>
    )
}

export default Link;