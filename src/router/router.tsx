import { RouteObject, createBrowserRouter } from "react-router";
import { Home } from "../home";
import {
  AccessLevels,
  AddProducts,
  AdminRoles,
  Advertisements,
  Articles,
  Banners,
  Charts,
  CreateEditUser,
  DeleteProducts,
  EditProducts,
  GenerateInvoice,
  ManageComments,
  OrderStatus,
  Overview,
  PgSettings,
  ProductCategories,
  RolesPerms,
  SalesReports,
  SeoSettings,
  SiteInformation,
  Sliders,
  Statistics,
  TrafficeReports,
  UserList,
  UserReports,
  ViewFeedback,
  ViewOrders,
} from "../sections";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "user-list",
        element: <UserList />,
      },
      {
        path: "cu-user",
        element: <CreateEditUser />,
      },
      {
        path: "rols&permissions",
        element: <RolesPerms />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
      {
        path: "edit-products",
        element: <EditProducts />,
      },
      {
        path: "delete-products",
        element: <DeleteProducts />,
      },
      {
        path: "product-category",
        element: <ProductCategories />,
      },
      {
        path: "view-orders",
        element: <ViewOrders />,
      },
      {
        path: "order-status",
        element: <OrderStatus />,
      },
      {
        path: "generate-invoice",
        element: <GenerateInvoice />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "banners",
        element: <Banners />,
      },
      {
        path: "sliders",
        element: <Sliders />,
      },
      {
        path: "advertisements",
        element: <Advertisements />,
      },
      {
        path: "manage-comments",
        element: <ManageComments />,
      },
      {
        path: "view-feedback",
        element: <ViewFeedback />,
      },
      {
        path: "sales-reports",
        element: <SalesReports />,
      },
      {
        path: "user-reports",
        element: <UserReports />,
      },
      {
        path: "traffic-reports",
        element: <TrafficeReports />,
      },
      {
        path: "site-information",
        element: <SiteInformation />,
      },
      {
        path: "pg-settings",
        element: <PgSettings />,
      },
      {
        path: "seo-settings",
        element: <SeoSettings />,
      },
      {
        path: "admin-roles",
        element: <AdminRoles />,
      },
      {
        path: "access-levels",
        element: <AccessLevels />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  },
});

export default router;
