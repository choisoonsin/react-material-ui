import {
  Card,
  CardContent,
  Container,
  LinearProgress,
  Paper,
} from "@material-ui/core";

export default function UserList({ data }) {
  const { isLoading, displayUsers } = data;
  return (
    <Container fixed>
      <Paper elevation={3} style={{ maxHeight: 400, overflow: "auto" }}>
        {!isLoading ? (
          displayUsers.length > 0 ? (
            displayUsers.map((value, idx) => (
              <Card
                key={idx}
                variant="outlined"
                style={{ marginBottom: "5px" }}
              >
                <CardContent>
                  <h3>{value.username}</h3>
                  <hr></hr>
                  <p>email:{value.email}</p>
                  <p>
                    address:{value.address.street + " " + value.address.city}
                  </p>
                  <p>phone:{value.phone}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card variant="outlined">
              <CardContent>Not found user</CardContent>
            </Card>
          )
        ) : (
          <LinearProgress />
        )}
      </Paper>
    </Container>
  );
}
