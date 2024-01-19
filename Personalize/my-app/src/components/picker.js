  import React, { useState, useEffect } from 'react';
  import './picker.css';
  import { SketchPicker } from 'react-color';

  const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    const [borderStyle, setBorderStyle] = useState('solid');
    const [borderRadius, setBorderRadius] = useState('0px');
    const [padding, setPadding] = useState('0px');
    const [fontSize, setFontSize] = useState('16px');
    const [fontFamily, setFontFamily] = useState('Arial');
    const [selectedInput, setSelectedInput] = useState('name');
    const [css, setCss] = useState('');

    useEffect(() => {
      generateCss();
    }, [selectedColor, borderStyle, borderRadius, padding, fontSize, fontFamily]);

    const handleColorChange = (color) => {
      setSelectedColor(color.hex);
    };

    const handleBorderStyleChange = (event) => {
      setBorderStyle(event.target.value);
    };

    const handleBorderRadiusChange = (event) => {
      setBorderRadius(event.target.value);
    };

    const handlePaddingChange = (event) => {
      setPadding(event.target.value);
    };

    const handleFontSizeChange = (event) => {
      setFontSize(event.target.value);
    };

    const handleFontFamilyChange = (event) => {
      setFontFamily(event.target.value);
    };

    const generateCss = () => {
      const cssString = `
        background-color: ${selectedColor};
        border-style: ${borderStyle};
        border-radius: ${borderRadius};
        padding: ${padding};
        font-size: ${fontSize};
        font-family: ${fontFamily};
      `;
      setCss(cssString);
    };

    const applyStyle = (inputName) => {
      if (inputName === selectedInput) {
        return {
          backgroundColor: selectedColor || '#ffffff',
          borderStyle: borderStyle,
          borderRadius: borderRadius,
          padding: padding,
          fontSize: fontSize,
          fontFamily: fontFamily,
        };
      }
      return {};
    };

    return (
      <div>
        <SketchPicker color={selectedColor} onChange={handleColorChange} />

        <select value={selectedInput} onChange={(elem) => setSelectedInput(elem.target.value)}>
          <option value="name">Name</option>
          <option value="pseudonym">Pseudonym</option>
        </select>
        <br/>
        <select value={borderStyle} onChange={handleBorderStyleChange}>
          <option value="solid">solid</option>
          <option value="dotted">dotted</option>
          <option value="dashed">dashed</option>
          <option value="double">double</option>
          <option value="groove">groove</option>
          <option value="ridge">ridge</option>
          <option value="inset">inset</option>
          <option value="outset">outset</option>
          <option value="none">none</option>
          <option value="hidden">hidden</option>
        </select>

        <br />

        <div>
          <label>Border Radius:</label>
          <input type="text" value={borderRadius} onChange={handleBorderRadiusChange} />
        </div>

        <div>
          <label>Padding:</label>
          <input type="text" value={padding} onChange={handlePaddingChange} />
        </div>

        <div>
          <label>Font Size:</label>
          <input type="text" value={fontSize} onChange={handleFontSizeChange} />
        </div>

        <div>
          <label>Font Family:</label>
          <input type="text" value={fontFamily} onChange={handleFontFamilyChange} />
        </div>


        <br />

        <input
          type="text"
          placeholder="enter your name"
          name="name"
          style={applyStyle('name')}
        />

        <input
          type="text"
          placeholder="enter your pseudonym"
          name="pseudonym"
          style={applyStyle('pseudonym')}
        />

        <br />
        <br />

        <div>
          <h3>Generated CSS:</h3>
          <pre>{css}</pre>
        </div>
      </div>
    );
  };

  export default ColorPicker;
