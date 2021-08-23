import { useEffect, useState } from "react";
import "../App.css";
// import { dummyList } from "../Resources/dummy";
import SearchBar from "./SearchBar";
import Api from "../Helper/API";
import UserList from "./UserList";
import { Container } from "@material-ui/core";
import AddBookDialog from "./AddBookDialog";
import Zoom from "@material-ui/core/Zoom";

export default function Main() {
  const api = new Api();
  useEffect(() => {
    async function fetchData() {
      return await api
        .getUsers()
        .then((res) => res.data)
        .then((data) =>
          setUser({ initialUsers: data, displayUsers: data, isLoading: false })
        );
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState({
    isLoading: true,
    initialUsers: [],
    displayUsers: [],
  });

  const [openAddBookDialog, setOpenAddBookDialog] = useState(false);
  const handleClose = () => {
    setOpenAddBookDialog(false);
  };

  const filterName = (userName) => {
    return user.initialUsers.filter((list) => {
      return list.username.toLowerCase().indexOf(userName.toLowerCase()) > -1;
    });
  };

  const handleInputChange = (e) => {
    const obj = e.target;
    console.log("Main Component=>", obj.value);
    console.clear();
    setUser({ ...user, displayUsers: filterName(obj.value) });
  };

  const handleAddBookButtonClick = (e) => {
    console.log("handleAddBookButtonClick");
    setOpenAddBookDialog(true);
  };

  return (
    <Container maxWidth="sm">
      <h1>Hello this is a Main Component</h1>
      <SearchBar
        handleInputChange={handleInputChange}
        handleAddBookButtonClick={handleAddBookButtonClick}
      />
      <UserList data={{ ...user }} />
      <AddBookDialog onClose={handleClose} open={openAddBookDialog} />
    </Container>
  );
}
