import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState, useCallback } from "react";
import { format } from "date-fns";

function useEmailInput() {
  const [email, setEmail] = useState("");
  const onChange = useCallback((e) => setEmail(e.target.value), []);
  const reset = useCallback(() => setEmail(""), []);
  return { email, onChange, reset };
}

function useFormatDate() {
  return useCallback(
    (day) => (day ? format(new Date(day), "E, d LLL") : null),
    []
  );
}

function useBookingSubmit({
  bookingDetails,
  showSuccessMessage,
  setOpen,
  resetEmail,
}) {
  const triggerEvent = useCallback(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "first_visit",
      eventDate: new Date().toISOString(),
    });
  }, []);
  const email = resetEmail();

  return useCallback(
    (e) => {
      e.preventDefault();
      triggerEvent();

      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      localStorage.setItem(
        "bookings",
        JSON.stringify([
          ...bookings,
          { ...bookingDetails, bookingEmail: email },
        ])
      );

      showSuccessMessage(true);
      resetEmail();
      setOpen(false);
    },
    [bookingDetails, showSuccessMessage, setOpen, resetEmail, email,triggerEvent]
  );
}

export default function BookingModal({
  setOpen,
  open,
  bookingDetails,
  showSuccessMessage,
}) {
  const { email, onChange, reset } = useEmailInput();
  const formatDate = useFormatDate();
  const handleSubmit = useBookingSubmit({
    bookingDetails,
    showSuccessMessage,
    setOpen,
    resetEmail: reset,
  });

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography component="h3" variant="h3">
          Confirm booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          <Box component="span">
            Please enter your email to confirm booking for{" "}
          </Box>
          <Box component="span" fontWeight={600}>
            {`${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`}
          </Box>
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack alignItems="flex-start" spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={onChange}
            />
            <Stack direction="row" spacing={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
