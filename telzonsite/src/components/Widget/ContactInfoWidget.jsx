import React from "react";
import { Icon } from "@iconify/react";

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ""
          )}
          <a href="tel:+919307189776">+91 9307189776</a>
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:envelope" />
            </span>
          ) : (
            ""
          )}
          <a href="mailto:info@telzonmarketing.in">info@telzonmarketing.in</a>
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:map-marker" />
            </span>
          ) : (
            ""
          )}
          Manish Nagar, Nagpur, Maharashtra <br /> 440037
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:map-marker" />
            </span>
          ) : (
            ""
          )}
          Kothrud, Pune <br /> 411038
        </li>
      </ul>
    </>
  );
}
