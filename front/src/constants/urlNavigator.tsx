import { useNavigate } from "react-router";

const ROUTES = {
  CAMPING: "/camping",
  MATJIB: "/matjib",
  TRAVEL: "/travel",
  CAFE: "/cafe",
  CAMPINGDetail: "/camping/details",
};

export const useCampingNavigation = () => {
  const navigate = useNavigate();
  return () => navigate(ROUTES.CAMPING);
};

export const useCampingDetailNavigation = () => {
  const navigate = useNavigate();
  return () => navigate(ROUTES.CAMPINGDetail);
};

export const useMatjibNavigation = () => {
  const navigate = useNavigate();
  return () => navigate(ROUTES.MATJIB);
};

export const useTravelNavigation = () => {
  const navigate = useNavigate();
  return () => navigate(ROUTES.TRAVEL);
};

export const useCafeNavigation = () => {
  const navigate = useNavigate();
  return () => navigate(ROUTES.CAFE);
};
