export interface AthleteCardProps {
  id: string;
  name: string;
  avatarUrl?: string;
  club?: string;
  rank?: string;
  medals?: {
    gold: number;
    silver: number;
    bronze: number;
  };
  stats?: Record<string, string | number>;
  isActive?: boolean;
  onClick?: () => void;
  // Add more props as needed
}
