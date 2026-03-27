import VeritaScribeApp from "../products/VeritaScribe/src/veritascribeApp";
import ComplianceApp from "../products/ComplianceLoop/src/ComplianceApp";
import ComplisenseApp from "../products/CompliSense/src/ComplisenseApp";

const productRoutes = [
  {
    path: "/veritascribe/*",
    element: <VeritaScribeApp />
  },
  {
    path: "/compliance-loop/*",
    element: <ComplianceApp />
  },
  {
    path: "/complisense/*",
    element: <ComplisenseApp />
  }
];

export default productRoutes;