import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import ZUserDialog from "./ZUserDialog";

export default function Rekisterointi({ fetchTuotteet }) {
  const [kayttajat, setKayttajat] = useState({
    username: "",
    passwordHash: "",
    role: "USER",
    etunimi: "",
    sukunimi: "",
    sahkoposti: "",
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setKayttajat({ ...kayttajat, [e.target.name]: e.target.value });
  };

  const fetchKayttajat = () => {
    if (kayttajat.username.length < 5 || kayttajat.passwordHash.length < 7) {
      alert(
        "Käyttäjätunnuksen on oltava vähintään 5 merkkiä pitkä!          Salasanan on oltava vähintään 7 merkkiä pitkä!"
      );
      return;
    }

    fetch("https://softala.haaga-helia.fi:8075/api/kayttajat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kayttajat),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong: " + response.statusText);
        }
        fetchTuotteet();
      })
      .catch((err) => console.error(err));
    handleClose();
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="success" onClick={handleClickOpen}>
          Rekisteröidy
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Uusi asiakas</DialogTitle>
        <ZUserDialog kayttajat={kayttajat} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Peruuta</Button>
          <Button onClick={fetchKayttajat}>Luo asiakas</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
