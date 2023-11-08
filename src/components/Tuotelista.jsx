import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Tuotelista.css";

const Tuotelista = () => {
  const [tuotteet, setTuotteet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTuotteet = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/tuotteet");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTuotteet(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTuotteet();
  }, []);

  if (loading)
    return (
      <div className="loading-spinner">
        <CircularProgress />
      </div>
    );
  if (error)
    return (
      <Typography
        className="error-message"
        color="error"
      >{`Error: ${error.message}`}</Typography>
    );

  return (
    <Box className="box-container">
      <Typography className="title" variant="h4" component="h1" gutterBottom>
        Tuotteet
      </Typography>

      <List className="list">
        {tuotteet.map((tuote) => (
          <ListItem className="list-item" key={tuote.id}>
            <ListItemText
              className="list-item-text"
              primary={tuote.name}
              secondary={tuote.description}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Tuotelista;
