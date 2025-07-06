import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';
2
const Facebook = () => {
  return (
    <FacebookProvider appId="754275823685100" chatSupport>
      <CustomChat pageId="604292892774856" minimized={false} />
    </FacebookProvider>
  );
};

export default Facebook;
