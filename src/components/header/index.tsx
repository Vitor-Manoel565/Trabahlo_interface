import * as style from "./styles";

interface HeaderProps {
  imagePath: string;
  title: string;
  subtitle: string;
}

export default function Header({ imagePath, title, subtitle }: HeaderProps) {
  return (
    <style.containerHeader>
      <style.logo src={imagePath} />
      <style.containerTitles>
        <style.title>{title}</style.title>
        <style.subtitle>{subtitle}</style.subtitle>
      </style.containerTitles>
    </style.containerHeader>
  );
}
