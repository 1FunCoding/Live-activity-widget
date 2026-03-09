import { createBrowserRouter } from "react-router";
import Home from "./screens/Home";
import SendPoll from "./screens/SendPoll";
import CameraRoll from "./screens/CameraRoll";
import PollResponses from "./screens/PollResponses";
import PostConfirmation from "./screens/PostConfirmation";
import SendToFriends from "./screens/SendToFriends";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/send-poll",
    Component: SendPoll,
  },
  {
    path: "/camera-roll",
    Component: CameraRoll,
  },
  {
    path: "/poll-responses",
    Component: PollResponses,
  },
  {
    path: "/post-confirmation",
    Component: PostConfirmation,
  },
  {
    path: "/send-to-friends",
    Component: SendToFriends,
  },
]);
