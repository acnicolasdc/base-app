import React from "react";
import { routes } from "../../routes/public";
import useHeader, {defaultParams} from "../../hooks/useHeader";
import LayoutFrame from "../../components/Layouts/LayoutFrame";

const ForgotPassword = () => {
  useHeader({ ...defaultParams, rightText: 'Remember Password? Login', rightNavigation:routes.LOGIN });
  return (
    <LayoutFrame>

    </LayoutFrame>
  );
};

export default ForgotPassword;
