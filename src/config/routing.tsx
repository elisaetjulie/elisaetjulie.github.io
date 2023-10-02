import Hosting from "src/pages/Hosting/Hosting";
import Location from "src/pages/Location";
import Main from "src/pages/Main";
import Pictures from "src/pages/Pictures/Pictures";
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
    element: <Hosting />,
  },
  {
    label: "Photos",
    path: "/pictures",
    element: <Pictures />,
  },
];
