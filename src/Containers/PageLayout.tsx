import * as React from 'react';



interface Props {
  children?: JSX.Element | JSX.Element[];
}

export default function PageLayout(props: Props) {
  const { children } = props;

  return (
    <div className="dashboardWrapper">
      {/* <Header /> */}
     
      <div className="pageContainer">{children}</div>
      {/* <Footer /> */}
   
    </div>
  );
}
