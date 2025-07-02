import React, { useContext, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import PopularMenu from './PopularMenu';
import { AuthContext } from '../../../ContextAPI/AuthProvider';

const PopularMenus = () => {
  const { menus, handlePopularMenus } = useContext(AuthContext);

  useEffect(() => {
    // Load popular menus on mount
    handlePopularMenus();
  }, []);

  return (
    <>
      <Marquee className="w-full md:w-[90%]" speed={50} pauseOnHover={true}>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5 w-full md:mb-20 mt-5">
          {menus.length > 0 ? (
            menus.map((menu) => <PopularMenu key={menu._id} menu={menu} />)
          ) : (
            <p className="text-center col-span-3 text-gray-500">No popular menus available</p>
          )}
        </div>
      </Marquee>
    </>
  );
};

export default PopularMenus;
