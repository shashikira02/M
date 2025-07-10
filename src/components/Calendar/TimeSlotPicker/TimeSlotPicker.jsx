import { Chip, Stack, Typography, Divider } from "@mui/material";
import { useMemo } from "react";

function useSlotSections(availableSlots) {
  return useMemo(
    () => [
      { label: "Morning", slots: availableSlots.morning },
      { label: "Afternoon", slots: availableSlots.afternoon },
      { label: "Evening", slots: availableSlots.evening },
    ],
    [availableSlots]
  );
}

const CustomChip = ({ label, onClick }) => (
  <Chip
    label={label}
    color="primary"
    variant="outlined"
    sx={{
      borderRadius: "5px",
      fontSize: { xs: 10, md: 14 },
      cursor: "pointer",
      "&:nth-of-type(1)": { ml: 0 },
      mr: { xs: 1, md: 3 },
      mt: { xs: 1, md: 0 },
    }}
    onClick={onClick}
  />
);

export default function TimeSlotPicker({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  const sections = useSlotSections(availableSlots);

  const handleClick = (slot) =>
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {sections.map(
        ({ label, slots }) =>
          slots.length > 0 && (
            <Stack
              key={label}
              direction="row"
              alignItems="center"
              px={{ xs: 0, md: 6 }}
              flexWrap="wrap"
            >
              <Typography
                width={{ xs: 1, md: "15%" }}
                fontSize={{ xs: 14, md: 16 }}
              >
                {label}
              </Typography>
              {slots.map((slot) => (
                <CustomChip
                  key={slot}
                  label={slot}
                  onClick={() => handleClick(slot)}
                />
              ))}
            </Stack>
          )
      )}
    </Stack>
  );
}