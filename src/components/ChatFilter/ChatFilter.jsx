import { Box, Select, MenuItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function ChatFilter({ allChats, setFilterChats }) {
  const [selectedRating, setSelectedRating] = useState("All Ratings");

  useEffect(() => {
    if (selectedRating === "All Ratings") {
      setFilterChats(allChats);
    } else {
      const filteredChats = allChats.filter((chat) =>
        chat.chat.some((message) => message.rating === selectedRating)
      );
      setFilterChats(filteredChats);
    }
  }, [selectedRating, allChats, setFilterChats]);

  return (
    <Box mb={3}>
      <Typography fontSize={12} mb={0.5}>
        Filter by Rating
      </Typography>
      <Select
        size="small"
        value={selectedRating}
        onChange={(e) => setSelectedRating(e.target.value)}
      >
        <MenuItem value="All Ratings">All Ratings</MenuItem>
        <MenuItem value={1}>1 Star</MenuItem>
        <MenuItem value={2}>2 Stars</MenuItem>
        <MenuItem value={3}>3 Stars</MenuItem>
        <MenuItem value={4}>4 Stars</MenuItem>
        <MenuItem value={5}>5 Stars</MenuItem>
      </Select>
    </Box>
  );
}

export default ChatFilter;
