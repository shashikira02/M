import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import { useMemo } from "react";
import 'swiper/css';
import lesley from '../../../assets/lesley.png'
import ahmad from '../../../assets/ahmad.png'
import heena from '../../../assets/heena.png'
import ankur from '../../../assets/ankur.png'
import stevens from '../../../assets/ahmad-stevens.png'
import SpecialistCard from './SpecialistCard'

function useSpecialistData(){
    return useMemo(
        ()=> [
        { img: lesley, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: ahmad, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: heena, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: ankur, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: stevens, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
        { img: lesley, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: ahmad, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: heena, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: ankur, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: stevens, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
    ], []
    )
}

export default function Specialists() {
    const specialistData = useSpecialistData();    
    const renderSlide = useMemo(
    () =>
      ({ img, title, designation }, index) =>
        (
          <SwiperSlide key={index}>
            <SpecialistCard
              img={img}
              title={title}
              designation={designation}
            />
          </SwiperSlide>
        ),
    []
  );

    return (
        <Box py={4} id="find-doctors">
            <Typography variant="h2" textAlign='center' mb={3} px={2}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true
                }}
                breakpoints={
                    {
                        767: {
                            slidesPerView: 4
                        }
                    }
                }
            >
                {specialistData.map(renderSlide)}
            </Swiper>
        </Box>
    )
}