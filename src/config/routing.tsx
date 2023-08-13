import Location from "src/pages/Location";
import Main from "src/pages/Main";

export const routing = [
  {
    label: "Accueil",
    path: "/",
    element: <Main />,
  },
  {
    label: "Lieu",
    path: "/location",
    element: <Location />,
  },
  {
    label: "Programme",
    path: "/program",
    element: <>TODO</>,
  },
  {
    label: "Hébergement",
    path: "/hosting",
    element: <>TODO</>,
  },
  {
    label: "Photos",
    path: "/pictures",
    element: <>TODO</>,
  },
];
