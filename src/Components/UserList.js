import {
  Container,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

export default function UserList({ data }) {
  const { isLoading, displayUsers } = data;
  return (
    <Container fixed>
      <List>
        {!isLoading ? (
          displayUsers.length > 0 ? (
            displayUsers.map((value, idx) => (
              <ListItem alignItems="flex-start" key={idx}>
                <ListItemText>
                  <h3>{value.username}</h3>
                  <hr></hr>
                  <p>email:{value.email}</p>
                  <p>
                    address:{value.address.street + " " + value.address.city}
                  </p>
                  <p>phone:{value.phone}</p>
                </ListItemText>
              </ListItem>
            ))
          ) : (
            <ListItem alignItems="flex-start">
              <ListItemText>Not found user</ListItemText>
            </ListItem>
          )
        ) : (
          <LinearProgress />
        )}
      </List>
    </Container>
  );
}
