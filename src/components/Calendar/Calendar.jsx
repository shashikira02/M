import { useState, useMemo } from "react";
import { startOfDay } from "date-fns";
import { Box } from "@mui/material";

import DaySelector from "./DaySelector/DaySelector";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

function useTotalSlots(slots) {
  return useMemo(
    () =>
      slots.morning.length + slots.afternoon.length + slots.evening.length,
    [slots]
  );
}

export default function Calendar({ availableSlots, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const totalSlots = useTotalSlots(availableSlots);

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}