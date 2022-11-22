import { useState, ReactNode, HTMLAttributes } from "react";
import { useRouter } from "next/router";
import { RiEqualizerLine } from "react-icons/ri";
import TextButton from "../TextButton";
import styles from "./DropMenu.module.scss";

interface DropMenuProps {
  children: ReactNode;
  toggle?: ReactNode;
  left?: boolean;
  right?: boolean;
}

function DropMenu({ children, toggle, left, right }: DropMenuProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={styles["drop-menu-screen"]}
        onClick={() => setOpen(false)}
        style={{ pointerEvents: open ? "all" : "none" }}
      />
      <div className={styles["drop-menu"]}>
        <div
          onClick={() => setOpen((o) => !o)}
          className={styles["drop-menu-toggle"]}
        >
          {toggle ? toggle : <RiEqualizerLine />}
        </div>
        {open && (
          <div
            className={`${styles["drop-menu-menu"]} ${
              left ? styles["menu-left"] : right ? styles["menu-right"] : ""
            } `}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
}

interface DropMenuLinkItemProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  to?: string;
  disabled?: boolean;
}

function DropMenuLinkItem({
  title,
  onClick,
  to,
  disabled,
}: DropMenuLinkItemProps) {
  const router = useRouter();

  return (
    <TextButton
      className={styles["drop-menu-link-item"]}
      onClick={(e) => (onClick ? onClick(e) : to ? router.push(to) : null)}
      disabled={disabled}
    >
      {title}
    </TextButton>
  );
}

DropMenu.LinkItem = DropMenuLinkItem;

export default DropMenu;
