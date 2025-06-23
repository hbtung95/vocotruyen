import React from "react";
import AthleteCardCompact from "./AthleteCardCompact";
import { AthleteCardCompactProps } from "./AthleteCardCompact.types";

export default {
  title: "Entities/AthleteCard/Compact",
  component: AthleteCardCompact,
};

const Template = (args: AthleteCardCompactProps) => <AthleteCardCompact {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "2",
  name: "Lê Thị B",
  avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  rank: "Hạng B",
  highlight: false,
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  ...Default.args,
  highlight: true,
};
