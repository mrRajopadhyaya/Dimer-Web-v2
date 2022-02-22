import Dashboard from "../../pages/Dashboard";
import Transaction from "../../pages/Transaction";
import { ChartPieIcon, CashIcon } from "@heroicons/react/outline";

interface RouteDetail {
  isIndex: boolean;
  path: string;
  label: string;
  component: any;
  icon: any;
}

export const routes: RouteDetail[] = [
  {
    isIndex: true,
    path: "/",
    label: "Dashboard",
    component: Dashboard,
    icon: ChartPieIcon,
  },
  {
    isIndex: false,
    path: "/transaction",
    label: "Transaction",
    component: Transaction,
    icon: CashIcon,
  },
  // {
  //   path: "/settings",
  //   label: "Settings",
  //   component: Settings,
  //   icon: SettingsIcon,
  // },
];
