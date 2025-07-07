import { Link, Stack } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function FooterLink({ children }) {
  return (
    <Link underline="none" color="#fff" fontWeight={300} fontSize={14}>
      <Stack direction="row" spacing={1} gap={0.5}>
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </Link>
  );
}
