import { Button, Container, Input } from "@material-ui/core";

export default function SearchBar(props) {
  const { handleInputChange, handleAddBookButtonClick } = props;

  return (
    <Container maxWidth="sm" style={{ marginBottom: "10px" }}>
      <Input color="primary" onChange={handleInputChange}></Input>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleAddBookButtonClick}
      >
        Add Book
      </Button>
    </Container>
  );
}
