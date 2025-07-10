import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

function useFilteredList(list, inputText) {
  return useMemo(() => {
    const trimmed = inputText.trim().toLowerCase();
    if (!trimmed) return list;
    return list.filter((item) =>
      item["Hospital Name"]?.toLowerCase().includes(trimmed)
    );
  }, [inputText, list]);
}

export default function SearchBar({ list, filterList }) {
  const [inputText, setInputText] = useState("");
  const filteredList = useFilteredList(list, inputText);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(filteredList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}