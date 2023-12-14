import * as React from "react";
import Calendar from "@mui/icons-material/Event";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker as MuiDateRangePicker } from "@mui/x-date-pickers-pro";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { styled } from "styled-components";

export default function DataPicker({ onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <label>Даты</label>
      <DemoContainer components={["SingleInputDateRangeField"]}>
        <DateRangePicker
          onChange={onChange}
          slots={{ field: SingleInputDateRangeField }}
          slotProps={{
            textField: { InputProps: { endAdornment: <Calendar /> } },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
const DateRangePicker = styled(MuiDateRangePicker)(() => ({
  backgroundColor: "#fff",

  ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "7px",
    borderRadius: "6px",
  },
}));
