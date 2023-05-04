import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Menu2 from './Menu2';

function RenderMenu() {
  const navigate = useNavigate();

  return (
    <div>
      <Menu navigate={navigate} />
    </div>
  );
};

function RenderMenu2() {
    const navigate = useNavigate();
  
    return (
      <div>
        <Menu2 navigate={navigate} />
      </div>
    );
};

export { RenderMenu, RenderMenu2 };