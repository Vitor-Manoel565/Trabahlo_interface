import * as style from "./style";

interface sectionProps {
  text: string;
  value: string;
  title: string;
}

export default function Section({ text, value, title }: sectionProps) {
  return (
    <style.paragraph>
      <style.text>{text}</style.text>
      <style.containerSubscription>
        <style.title>{title}</style.title>
        <style.text>
          Apenas R$ <style.valueSubscription>{value}</style.valueSubscription>{" "}
          anuais por seis edições de colecionador
        </style.text>
      </style.containerSubscription>
    </style.paragraph>
  );
}
