import { Box, Typography, Container, Stack } from "@mui/material";
import { useState, useEffect, useMemo, useCallback } from "react";

import HospitalCard from "../components/HospitalCard/HospitalCard";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";
import cta from "../assets/cta.png";

function useLocalStorageBookings() {
  const [bookings, setBookings] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bookings") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  return [bookings, setBookings];
}

export default function MyBookings() {
  const [bookings] = useLocalStorageBookings();
  const [filteredBookings, setFilteredBookings] = useState(bookings);

  useEffect(() => setFilteredBookings(bookings), [bookings]);

  const handleFilter = useCallback(
    (newList) => setFilteredBookings(newList),
    []
  );

  const searchBarList = useMemo(() => bookings, [bookings]);

  return (
    <>
      <NavBar />
      <Box
        sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}
      >
        <Box
          mb="50px"
          pt={{ xs: 3, md: 1 }}
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 0, md: 5 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 12 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography variant="h1" sx={{ color: "#fff", pb: "8px" }}>
                My Bookings
              </Typography>

              <Box
                bgcolor="#fff"
                p={3}
                flexGrow={1}
                borderRadius={2}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                sx={{ translate: "0 50px" }}
                width={{ xs: 1, md: "auto" }}
              >
                <SearchBar list={searchBarList} filterList={handleFilter} />
              </Box>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {filteredBookings.length > 0 &&
                filteredBookings.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    details={hospital}
                    booking={true}
                  />
                ))}

              {filteredBookings.length == 0 && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  No Bookings Found!
                </Typography>
              )}
            </Stack>

            <img src={cta} width={360} height="auto" />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
