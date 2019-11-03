import React from 'react'

import PageTitle from './PageTitle'

const Page = props => (
  <div>
    <PageTitle>{props.title}</PageTitle>
    <div>
      {props.children}
    </div>
  </div>
)

export default Page
