import React from 'react';

const Footer = () => {
  return (
    <div className="absolute bottom-0 right-0 z-10  pr-6  lg:pr-4 mb-1">
      <p  className="text-gray-500 transition-colors text-xs" aria-label='Designed and built by Faiyaz'>Built by&nbsp;
        <a data-v2='creator' className="cursor-pointer text-base"  href='https://www.faiyazbits.com/'>Faiyaz</a>
          <>
            &nbsp;|&nbsp;<a data-v2='source' className="cursor-pointer text-base" aria-label='Source code' href='https://github.com/faiyazbits/faiyazbits'>Source</a>
          </>
      </p>
    </div>
  );
};

export default Footer;