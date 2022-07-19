import { Backdrop, CircularProgress } from "@mui/material";

export const Loading = ({ loading }) => {
  return (
    <div>
      <Backdrop open={loading} sx={{ color: "#fff", zIndex: 9 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
