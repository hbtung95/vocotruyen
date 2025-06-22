import React from "react";
import AdminLayout from "./AdminLayout";
import AthleteLayout from "./AthleteLayout";
import CoachLayout from "./CoachLayout";
import RefereeLayout from "./RefereeLayout";
import BaseLayout from "./BaseLayout";

type Props = {
  role: "admin" | "athlete" | "coach" | "referee" | string;
  children: React.ReactNode;
};

const AutoLayoutWrapper: React.FC<Props> = ({ role, children }) => {
  switch (role) {
    case "admin":
      return <AdminLayout>{children}</AdminLayout>;
    case "athlete":
      return <AthleteLayout>{children}</AthleteLayout>;
    case "coach":
      return <CoachLayout>{children}</CoachLayout>;
    case "referee":
      return <RefereeLayout>{children}</RefereeLayout>;
    default:
      return <BaseLayout>{children}</BaseLayout>;
  }
};

export default AutoLayoutWrapper;
