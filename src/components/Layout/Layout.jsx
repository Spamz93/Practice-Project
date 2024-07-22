import { Container } from "@mui/system";

const Layout = ({ children }) => {
  return (
    <>
      <Container
        component={"div"} sx={{ width: "100%", padding: 0, margin: 0 }}>{children}
      </Container>
    </>
  );
};

export default Layout;
