import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CloseIcon from "@mui/icons-material/Close";

function FeedbackModal({ open, onClose, chatId, updateChat }) {
  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    updateChat((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId ? { ...chat, feedback: feedbackText } : chat
      )
    );
    setFeedbackText("");
    onClose();
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    bgcolor: "primary.bgtheme",
    maxWidth: 720,
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={2} alignItems="center">
            <FeedbackIcon />
            <Typography variant="h2" component="h2">
              Provide Feedback
            </Typography>
          </Stack>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box
          component="form"
          onSubmit={handleFeedbackSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "12px",
          }}
        >
          <TextField
            multiline
            rows={6}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            sx={{ width: "100%" }}
            required
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default FeedbackModal;
