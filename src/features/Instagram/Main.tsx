import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import instapost from "../../instagram-image.jpeg";
import { useState } from "react";
const Main = () => {
  const [like, setLike] = useState<boolean>(true);
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [follow, setFoloow] = useState<boolean>(true);
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Paper
          elevation={3}
          sx={{ width: "20%", height: "380px", borderRadius: "20px" }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
            height="100%"
          >
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              padding={2}
            >
              <Grid item>
                <Grid container alignItems="center" flexDirection="row">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography sx={{ padding: "0 7px" }}>user_name</Typography>
                </Grid>
              </Grid>
              <Grid item>
                {follow ? (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      setFoloow(!follow);
                    }}
                  >
                    Follow
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      setFoloow(!follow);
                    }}
                  >
                    Follow
                  </Button>
                )}
              </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
              <img width="100%" src={instapost} alt="post" />
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              padding={3}
            >
              <Grid item>
                {like ? (
                  <FavoriteIcon
                    color="error"
                    onClick={() => {
                      setLike(!like);
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => {
                      setLike(!like);
                    }}
                  />
                )}
                <ChatBubbleOutlineRoundedIcon sx={{ margin: "0 5px" }} />
                <ShareRoundedIcon />
              </Grid>
              <Grid item>
                {bookmark ? (
                  <BookmarkBorderRoundedIcon
                    onClick={() => {
                      setBookmark(!bookmark);
                    }}
                  />
                ) : (
                  <BookmarkIcon
                    onClick={() => {
                      setBookmark(!bookmark);
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Main;
