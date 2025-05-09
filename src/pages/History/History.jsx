import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Stack, Typography, Divider } from "@mui/material";
import ChatFilter from "../../components/ChatFilter/ChatFilter";
import ChatHistoryCard from "../../components/ChatHistoryCard/ChatHistoryCard";

function History() {
  const [conversations, setConversations] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);

  useEffect(() => {
    const storedConversations = localStorage.getItem("conversation") || "[]";
    const parsedConversations = JSON.parse(storedConversations);

    setConversations(parsedConversations);
    setFilteredChats(parsedConversations);
  }, []);

  return (
    <Stack>
      <Navbar />

      <Box p={{ xs: 2, md: 3 }}>
        <Typography variant="h2" component="h2" textAlign="center">
          Conversation History
        </Typography>

        {conversations.length > 0 && (
          <ChatFilter allChats={conversations} setFilterChats={setFilteredChats} />
        )}

        {conversations.length === 0 && (
          <Typography textAlign="center" p={2} bgcolor="primary.light">
            No saved chats.
          </Typography>
        )}

        {conversations.length > 0 && filteredChats.length === 0 && (
          <Typography textAlign="center" p={2} bgcolor="primary.light">
            No such chats.
          </Typography>
        )}

        {filteredChats.length > 0 && (
          <Stack
            spacing={4}
            divider={
              <Divider sx={{ borderColor: "primary.bg", opacity: 0.4 }} />
            }
          >
            {filteredChats.map((chat, index) => (
              <ChatHistoryCard details={chat} key={index} />
            ))}
          </Stack>
        )}
      </Box>
    </Stack>
  );
}

export default History;
