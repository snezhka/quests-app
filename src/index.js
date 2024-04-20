import React from "react";
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import ErrorPage from "./error-page";
import App from 'components/app/app.jsx';
import Contacts from "components/contacts/contacts.jsx";
import DetailedQuest from "components/detailed-quest/detailed-quest.jsx";
import { fetchQuests, fetchQuest, sendOrder } from "components/common/common.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: fetchQuests,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "quests/:questId",
    element: <DetailedQuest />,
    loader: fetchQuest,
  }
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);





