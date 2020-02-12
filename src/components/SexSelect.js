import React from 'react';

const SexSelect = () => {
  return (
    <div>
      <label class="switch switch-slide">
      <input class="switch-input" type="checkbox" />
      <span class="switch-label" data-on="Yes" data-off="No"></span> 
      <span class="switch-handle"></span>
      </label>
    </div>
  );
}

export default SexSelect;