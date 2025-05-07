import {
  Container,
  Typography,
  Paper,
  Box,
  Avatar,
  Link as MuiLink,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contato = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#040714"
      }}
    >
      <Container maxWidth="sm" sx={{ mt: 20 }}>
        <Paper elevation={3} sx={{ p: 6, textAlign: "center" }}>
          <Avatar
            alt="Álekiss Melo"
            src="/profile.jpg"
            sx={{ width: 180, height: 180, mx: "auto", mb: 2 }}
          />
          <Typography variant="h5" gutterBottom>
            Álekiss Melo
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <MuiLink
              href="https://github.com/alekiss"
              target="_blank"
              rel="noopener" //Impede que a página de destino tenha acesso ao objeto window.opener, evitando certos ataques (como tabnabbing).
              underline="none"
              color="inherit"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <GitHubIcon /> github.com/alekiss
            </MuiLink>
            <MuiLink
              href="https://wa.me/5583998656883"
              target="_blank"
              rel="noopener"
              underline="none"
              color="inherit"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <WhatsAppIcon /> (83) 99865-6883
            </MuiLink>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contato;
