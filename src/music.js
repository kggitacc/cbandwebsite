import React from 'react';
import Draggable from 'react-draggable';
import './App.css';
import { Link } from 'react-router-dom';

export function Music() {
  return (
    

    <div>
         <div class="container-sm">
            <div class="container">
             <div class="row align-items-start">
                <div class="col">
                
    </div>
    <div class="col">
      
    </div>
    <div class="col">
<p>
    Music is coming soon ™  </p>  </div>
  </div>
</div>
</div>
      
      <Draggable defaultPosition={{x: 20, y: 1}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="471.059" height="70" viewBox="0 0 471.059 70">
        
      <g id="popup_2" data-name="popup 2" transform="translate(-870 -151)">
    <g id="Rectangle_4" data-name="Rectangle 4" transform="translate(870 188)" fill="#f6f6f4" stroke="#0a0805" stroke-width="1">
      <rect width="471.059" height="32.469" stroke="none"/>
      <rect x="0.5" y="0.5" width="470.059" height="31.469" fill="none"/>
    </g>
    <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(870 151)" fill="#d3fb75" stroke="#0a0805" stroke-width="1">
      <rect width="471.059" height="40" stroke="none"/>
      <rect x="0.5" y="0.5" width="470.059" height="39" fill="none"/>
    </g>
    <text id="soundcloud" transform="translate(880 177)" fill="#0a0805" font-size="20" font-family="C1i">
      <tspan x="0" y="0">Music here</tspan>
    </text>
    <a href="https://soundcloud.com/cccccband" target="_blank" rel="noopener noreferrer">
      <text class="clearfix" id="https:_soundcloud.com_cccccband" data-name="https://soundcloud.com/cccccband" transform="translate(880 194)" fill="#0a0805" font-size="15" font-family="SegoeUI, Segoe UI">
        <tspan class="clearfix" x="0" y="16"></tspan>
      </text>
    </a>
    <path id="x" d="M10,10h0v0h0v0Z" transform="translate(1320.987 156.393) rotate(45)" fill="none" stroke="#0a0805" stroke-width="1"/>
  </g>
</svg>

</Draggable>

    </div>

  );
}
