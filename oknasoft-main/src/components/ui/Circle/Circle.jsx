import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { useState } from "react";
import styles from "./Circle.module.scss";
import classNames from "classnames";
import telegram from "../../../assets/icons/telegram.svg";
import viber from "../../../assets/icons/viber.svg";

export const Circle = () => {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <CircleMenu
      onMenuToggle={() => activeHandler()}
      menuToggleClassName={classNames(styles.circleBtn, {
        [styles.active]: isActive,
      })}
      className={styles.circle}
      startAngle={260}
      rotationAngle={180}
      itemSize={2}
      radius={5}
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        className={styles.circleItem}
        style={{ backgroundColor: "var(--whatsapp)" }}
        // link={"https://t.me/"}
        tooltip="Whatsapp"
      >
        <div className={`pi pi-whatsapp`}></div>
      </CircleMenuItem>
      <CircleMenuItem
        className={styles.circleItem}
        style={{ backgroundColor: "var(--telegram)" }}
        // link={"https://t.me/"}
        tooltip="Telegram"
      >
        <div>
          <img src={telegram} alt="" />
        </div>
      </CircleMenuItem>
      <CircleMenuItem
        className={styles.circleItem}
        style={{ backgroundColor: "var(--viber)" }}
        // link={"https://t.me/"}
        tooltip="Viber"
      >
        <div>
          <img src={viber} alt="" />
        </div>
      </CircleMenuItem>
    </CircleMenu>
  );
};
