import React from "react";

const IconList = ({ Icon, children }) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-1 '>
      {React.Children.map(children, (child) => {
        return <IconListItem Icon={Icon}>{child.props.children}</IconListItem>;
      })}
    </div>
  );
};

const IconListItem = ({ Icon, children }) => {
  return (
    <p className='text-gray-600 dark:text-white py-2 flex items-center'>
      <Icon className='pr-1' />
      {children}
    </p>
  );
};

IconList.Item = IconListItem;

export default IconList;
