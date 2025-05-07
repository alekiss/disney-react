import { Container, Typography, Paper, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const Sobre = () => {
  return (
    <Box sx={{minHeight: "100vh"}}>
      <Container maxWidth="md" sx={{ mt: 20 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <InfoIcon sx={{ fontSize: 40, color: "#1976d2", mr: 1 }} />
            <Typography variant="h4" component="h1">
              Sobre o Projeto
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
            Esta aplicação foi desenvolvida como exemplo para demonstrar
            conceitos de React, uso de rotas, e integração com a biblioteca de
            componentes Material UI (MUI). Além disso, ela também apresenta como
            hospedar uma aplicação de forma gratuita utilizando o Vercel.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Sobre;
