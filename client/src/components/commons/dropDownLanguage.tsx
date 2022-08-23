import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";

interface lng {
  id: string;
  nativeName: string;
}

export function LngDropDown(props: any) {
  const lngs: lng[] = props.lngs;

  const { i18n } = useTranslation();

  const currentlng: string = i18n.resolvedLanguage.substring(0, 2);

  var userLanguage = currentlng || window.navigator.language;
  if (userLanguage === "en") userLanguage = "gb";

  const [selectedLng, setSelectedLng] = useState(userLanguage);

  return (
    <Dropdown className="mt-3" style={{ float: "right" }}>
      <Dropdown.Toggle variant="blank" id="dropdown-basic">
        <span className={`fi fi-${selectedLng}`}></span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {lngs.map((value) => (
          <>
            <Dropdown.Item
              type="submit"
              key={value.id}
              as="button"
              onClick={() => {
                setSelectedLng(value.id);
                i18n.changeLanguage(`${value.id}-${value.id.toUpperCase()}`);
              }}
            >
              <span className={`fi fi-${value.id}`}></span>
              <span className="ml-2">{value.nativeName}</span>
              <br />
            </Dropdown.Item>
          </>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LngDropDown;
