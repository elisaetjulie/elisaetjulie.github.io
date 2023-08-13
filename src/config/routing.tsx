import Location from "src/pages/Location";
import Main from "src/pages/Main";
import Programm from "src/pages/Programm/Programm";

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
    element: <Programm />,
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
