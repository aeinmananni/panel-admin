import { NavLink, NavLinkProps } from "react-router";

type LinkProps = {
  children?: React.ReactNode;
} & NavLinkProps;

export default function Link({ children, ...props }: LinkProps) {
  return <NavLink {...props}>{children}</NavLink>;
}
