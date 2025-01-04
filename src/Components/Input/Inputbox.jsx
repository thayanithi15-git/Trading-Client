import React from "react";
import Input from "@mui/joy/Input";
import Select from "react-select";
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from '@mui/material';

function Inputbox({ placeholder, height, search, name, value, onChange }) {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Input
          
          startDecorator={search ?(<SearchIcon style={{ color: '#aaa' }} />):null}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          sx={{
            backgroundColor: '#000', // Set background to black
            color: '#fff', // Set text color to white
            border: '1px solid #2b2b2b', // Set border to grey
            height: height, // Increase the height of the input box
            '&::placeholder': {
              fontWeight: '400', // Set placeholder font weight
              color: '#aaa', // Optional: Change placeholder color
            },
            '&:hover': {
              // border: '1px solid #bbb',
            },
            '& .MuiInput-root': {
              borderColor: '#ccc', // Ensure grey border color applies to the input root
            },
          }}
          startAdornment={
            search ? (
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#aaa' }} />
              </InputAdornment>
            ) : null
          }
        />
      </div>
    );
  }

function InputSelect({value, onChange}) {

    const options = [
        { value: 'Course', label: 'Course' },
        { value: 'Signals', label: 'Signals' },
    ]


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Select
  id="timing"
  // value={value}
  onChange={onChange}
  options={options}
  classNamePrefix="select"
  styles={{
    control: (base, state) => ({
      ...base,
      backgroundColor: "#000",
      color: "white",
      boxShadow: "none",
      borderColor: state.isFocused ? "#0b6bcb" : "#2b2b2b", // Change border color when focused
      "&:hover": {
        // borderColor: "#0b6bcb", // Optional: you can add hover border change as well
      },
    }),
    option: (base, { isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? "#0b6bcb" : "#444",
      color: "white", // Text color of options
      padding: "10px", // Adjust padding for more space
      "&:hover": {
        backgroundColor: "#0b6bcb",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#333",
      borderRadius: "8px",
      maxHeight: "200px", // Set max height to avoid overflow
      overflowY: "auto", // Make the menu scrollable if options exceed maxHeight
    }),
    singleValue: (base) => ({
      ...base,
      color: "white", // Selected option text color
    }),
  }}
  isClearable
/>
    </div>
  );
}

export { Inputbox, InputSelect };
