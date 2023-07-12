import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';

const Picker = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomPickerWrapper = styled.div`
  margin-right: 30px;
`;

export default function DatePickerValue() {
  const [startDate, setStartDate] = React.useState(dayjs('2022-04-17'));
  const [endDate, setEndDate] = React.useState(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <Picker>
          <CustomPickerWrapper>
            <DatePicker label="펀딩 시작일" value={startDate} onChange={newValue => setStartDate(newValue)} />
          </CustomPickerWrapper>
          <CustomPickerWrapper>
            <DatePicker label="펀딩 마감일" value={endDate} onChange={newValue => setEndDate(newValue)} />
          </CustomPickerWrapper>
        </Picker>
      </DemoContainer>
    </LocalizationProvider>
  );
}
