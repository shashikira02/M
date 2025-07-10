import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Divider, Stack, Typography } from "@mui/material";
import styles from "./DaySelector.module.css";
import { format, add, isEqual, startOfDay } from "date-fns";
import { SlideNextButton, SlidePrevButton } from "./SliderButtons";
import { useMemo } from "react";

function useDateItems() {
  const today = startOfDay(new Date());
  return useMemo(
    () => Array.from({ length: 7 }, (_, i) => add(today, { days: i })),
    []
  );
}

function useDateFormatter() {
  const today = startOfDay(new Date());
  return useMemo(
    () => (day) => {
      if (isEqual(today, day)) return "Today";
      if (isEqual(today, add(day, { days: -1 }))) return "Tomorrow";
      return format(day, "E, d LLL");
    },
    []
  );
}

export default function DaySelector({
  selectedDate,
  setSelectedDate,
  totalSlots,
}) {
  const dateItems = useDateItems();
  const customDateFormat = useDateFormatter();

  const handleClick = (day) => setSelectedDate(day);

  return (
    <Stack pt={3} position="relative">
      <Divider sx={{ mb: 3 }} />
      <Swiper
        slidesPerView={4}
        loop={false}
        spaceBetween={11}
        className={styles.swiperStyles}
        breakpoints={{
          767: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {dateItems.map((day, index) => (
          <SwiperSlide key={index} className={styles.swiperslide}>
            <Stack
              textAlign="center"
              onClick={() => handleClick(day)}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                fontWeight={isEqual(day, selectedDate) ? 700 : 400}
                fontSize={{ xs: 11, md: 16 }}
              >
                {customDateFormat(day)}
              </Typography>
              <Typography fontSize={{ xs: 8, md: 12 }} color="primary.green">
                {`${totalSlots} Slots Available`}
              </Typography>

              <Box
                height={{ xs: "4px", md: "5px" }}
                width={{ xs: 1, md: "calc(100% - 50px)" }}
                position="relative"
                bottom="0"
                bgcolor={
                  isEqual(day, selectedDate) ? "primary.main" : "rgba(0,0,0,0)"
                }
                left={0}
                zIndex={999}
                mt="5px"
                mx="auto"
              />
            </Stack>
          </SwiperSlide>
        ))}

        <span slot="container-start">
          <Box display={{ xs: "none", md: "block" }}>
            <SlidePrevButton />
          </Box>
        </span>

        <span slot="container-end">
          <Box display={{ xs: "none", md: "block" }}>
            <SlideNextButton />
          </Box>
        </span>
      </Swiper>

      <Box
        height={{ xs: "4px", md: "5px" }}
        width={{ xs: 1, md: "calc(100% - 150px)" }}
        bgcolor="#F0F0F5"
        mt="5px"
        position="absolute"
        bottom={0}
        left="50%"
        sx={{ translate: "-50% 0" }}
      />
    </Stack>
  );
}