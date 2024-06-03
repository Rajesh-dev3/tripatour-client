import{ styled , Select } from "@mui/material";

export const BorderlessSelect = styled(Select)(({ theme }) => ({
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  }));
export const BorderlessSelectShow = styled(Select)(({ theme }) => ({
    '.MuiOutlinedInput-notchedOutline': {
      border: "1px solid #e4e4e4",
    },
    // MuiSelect-select
    //  MuiSelect-outlined
    //   MuiSelect-multiple
    //    MuiInputBase-input 
    //    MuiOutlinedInput-input
        '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
          padding:"5px 10px 5px 10px"
        },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: "1px solid #e4e4e4",
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      Padding:"0px"
    },
  }));