import { NavLink, NavLinkProps } from "react-router";

type LinkProps = {} & NavLinkProps;

export default function Link({ ...props }: LinkProps) {
  return <NavLink {...props}></NavLink>;
}
