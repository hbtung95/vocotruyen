import React from "react";
import AthleteCard from "./AthleteCard";
import { AthleteCardProps } from "./AthleteCard.types";

export default {
  title: "Entities/AthleteCard",
  component: AthleteCard,
};

const Template = (args: AthleteCardProps) => <AthleteCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  name: "Nguyễn Văn A",
  avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  club: "CLB Thanh Xuân",
  rank: "Hạng A",
  medals: { gold: 2, silver: 1, bronze: 0 },
  stats: { "Trận đấu": 10, "Thắng": 8, "Thua": 2 },
  isActive: true,
};
