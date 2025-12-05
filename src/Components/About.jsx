import Button from "@mui/material/Button";

const About = () => {
  return (
    <>
      <section>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </section>
      <h1>hrApp About</h1>
      <div>Information page about hrApp</div>
    </>
  );
};
export default About;
