import { useState, useEffect } from "react";
import "./App.css";
import GitHubCard from "./components/GitHubCard";
import api_data from "./api_data.json";
import Grid from "@mui/material/Grid";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

// const URL = "https://api.github.com/users/${repoName}/repos";

function App() {
  const [val, setVal] = useState("");
  const [repoName, setReportName] = useState("hiteshsahu");
  const [repos, setRepos] = useState([]);

  const clickHandler = () => {
    setReportName(val);
    setVal("");
  };

    useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.github.com/users/${repoName}/repos?sort=updated`);
        const data = await response.json();
        setRepos(data)
    };
    getData();
  }, [repoName]);

  const orderedList = repos.slice().sort((a, b) => b.updated_at.localeCompare(a.updated_at))


  return (
    <div className="App">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ mb: 3 }}
      >
        <TextField
          id="outlined-basic"
          label="search repos"
          variant="outlined"
          val={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={clickHandler}
          sx={{ height: 50, width: 80, backgroundColor: "#00838f", color: "#fff" }}
        >
          Click
        </Button>
      </Stack>
      <Typography variant="h4" >{repoName} GitHub Repos</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {!orderedList
          ? <h3>Loading...</h3>
          : orderedList?.map((repo, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <GitHubCard key={repo.id} repo={repo} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
}

export default App;
