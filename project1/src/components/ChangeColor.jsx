
import { useState } from 'react';
import '../index.css';


function ChangeColor() {
  const colors = [
    { name: 'White', color: '#ffffff', text: '#000' },
    { name: 'Red', color: '#ff0000', text: '#fff' },
    { name: 'Blue', color: '#007bff', text: '#fff' },
    { name: 'Green', color: '#28a745', text: '#fff' },
    { name: 'Black', color: '#000000', text: '#fff' },
    { name: 'Orange', color: '#fd7e14', text: '#fff' },
    { name: 'Purple', color: '#6f42c1', text: '#fff' },
    { name: 'Teal', color: '#20c997', text: '#fff' },
    { name: 'Gold', color: '#ffc107', text: '#000' },
    { name: 'Pink', color: '#e83e8c', text: '#fff' },
  ];

  let [currentBGColor, changeBGColor] = useState("#ffffff");
  
  return (
    <>
      <section className='parent-color-changes-div' style={{backgroundColor: currentBGColor}}></section>
      <div className='change-color-section'>
          {colors.map((item) => (
                  <button
                    key={item.name}
                    style={{
                      backgroundColor: item.color,
                      color: item.text,
                      margin: '5px',
                      padding: '10px 20px',
                    }}

                    onClick={function(){changeBGColor(item.color)}}
                  >
                    {item.name}
                  </button>
            ))
          }
      </div>
    </>
  );
}

export default ChangeColor;
