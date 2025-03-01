import { ClassificationType, GroupingType } from "../model";
import { IconsMap } from "../icons/icon";

export const classificationItem: ClassificationType[] = [
  { classificationId: 1, classificationName: "Dashboard" },
  { classificationId: 2, classificationName: "User management" },
  { classificationId: 3, classificationName: "Product management" },
  { classificationId: 4, classificationName: "Orders & Invoices" },
  { classificationId: 5, classificationName: "Content Management" },
  { classificationId: 6, classificationName: "Comments & Feedback" },
  { classificationId: 7, classificationName: "Reports & Analytics" },
  { classificationId: 8, classificationName: "General Settings" },
  { classificationId: 9, classificationName: "Access & Roles" },
].map((it) => ({ ...it, icon: IconsMap[it.classificationId] }));

export const groupingItem: GroupingType[] = [
  { groupingId: 1, groupingName: "Overview", classificationId: 1 },
  { groupingId: 2, groupingName: "Charts", classificationId: 1 },
  { groupingId: 3, groupingName: "Statistics", classificationId: 1 },
  { groupingId: 4, groupingName: "User List", classificationId: 2 },
  { groupingId: 5, groupingName: "Create/Edit User", classificationId: 2 },
  { groupingId: 6, groupingName: "Roles and Permissions", classificationId: 2 },
  { groupingId: 7, groupingName: "Add Product", classificationId: 3 },
  { groupingId: 8, groupingName: "Edit Product", classificationId: 3 },
  { groupingId: 9, groupingName: "Delete Product", classificationId: 3 },
  { groupingId: 10, groupingName: "Product Categories", classificationId: 3 },
  { groupingId: 11, groupingName: "View Orders", classificationId: 4 },
  { groupingId: 12, groupingName: "Order Status", classificationId: 4 },
  { groupingId: 13, groupingName: "Generate Invoice", classificationId: 4 },
  { groupingId: 14, groupingName: "Articles", classificationId: 5 },
  { groupingId: 15, groupingName: "Pages", classificationId: 5 },
  { groupingId: 16, groupingName: "Banners", classificationId: 5 },
  { groupingId: 17, groupingName: "Sliders", classificationId: 5 },
  { groupingId: 18, groupingName: "Advertisements", classificationId: 5 },
  { groupingId: 19, groupingName: "Manage Comments", classificationId: 6 },
  { groupingId: 20, groupingName: "View Feedback", classificationId: 6 },
  { groupingId: 21, groupingName: "Sales Reports", classificationId: 7 },
  { groupingId: 22, groupingName: "User Reports", classificationId: 7 },
  { groupingId: 23, groupingName: "Traffic Reports", classificationId: 7 },
  { groupingId: 24, groupingName: "Site Information", classificationId: 8 },
  {
    groupingId: 25,
    groupingName: "Payment Gateway Settings",
    classificationId: 8,
  },
  { groupingId: 26, groupingName: "SEO Settings", classificationId: 8 },
  { groupingId: 27, groupingName: "Admin Roles", classificationId: 9 },
  { groupingId: 28, groupingName: "Access Levels", classificationId: 9 },
];
