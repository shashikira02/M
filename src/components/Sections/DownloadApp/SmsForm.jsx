import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

export default function SmsForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box mb={5} component="form" onSubmit={handleSubmit}>
      <Typography
        fontWeight={600}
        mb={1}
        sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
      >
        Get the link to download the app
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <TextField
          fullWidth
          placeholder="Enter phone number"
          sx={{
            minWidth: 300,
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: "#fff",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ whiteSpace: "nowrap" }}>
                +91
              </InputAdornment>
            ),
          }}
          required
        />

        <Button
          type="submit"
          size="large"
          variant="contained"
          disableElevation
          sx={{
            whiteSpace: "nowrap",
            flexShrink: 0,
            px: 4,
          }}
        >
          Send SMS
        </Button>
      </Box>
    </Box>
  );
}
